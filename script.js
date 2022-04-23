const formInput = document.querySelector(".form__input");
const list = document.querySelector(".list");
const txtError = document.querySelector(".txt__error");
const mainWrapper = document.querySelector(".main-wrapper");
const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let fieldValue = formInput.value;
  if (validateField(fieldValue)) {
    createLi();
    formInput.value = "";
  }
});

function createLi() {
  let inputValue = formInput.value;
  const createList = document.createElement("li");
  createList.classList.add("list__li");
  createList.innerHTML = `${inputValue} <button class="delete-button">Delete</button>`;
  list.prepend(createList);
}

mainWrapper.addEventListener("click", (event) => {
  const item = event.target;
  if (item.classList.contains("delete-button")) {
    item.closest("li").remove();
  } else if (item.classList.contains("list__li")) {
    item.classList.toggle("active");
  }
});

formInput.addEventListener("input", () => {
  validateField(formInput.value);
});

function validateField(value) {
  const regExp = /^[a-z\d]{2,25}$/gi;
  let resultChecking = regExp.test(value);
  if (!resultChecking && value) {
    formInput.classList.add("error");
    txtError.classList.add("display");
  } else {
    formInput.classList.remove("error");
    txtError.classList.remove("display");
  }
  return resultChecking;
}
