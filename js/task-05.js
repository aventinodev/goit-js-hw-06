// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous"я

// const inputEl = document.querySelector("#name-input");
// const titleEl = document.querySelector("#name-output");

const refs = {
  inputEl: document.querySelector("#name-input"),
  titleEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.currentTarget.value === ""
    ? (refs.titleEl.textContent = "Anonymous")
    : (refs.titleEl.textContent = event.currentTarget.value);
}
