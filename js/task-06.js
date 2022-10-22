// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputEl = document.querySelector("#validation-input");
const dataLength = 6;
const inputColorValidEl = document.querySelector("#validation-input.valid");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  // 1 варіант = працює без перезавантаження

  event.currentTarget.value.length === dataLength
    ? inputEl.classList.toggle("valid") &&
      inputEl.classList.replace("invalid", "valid")
    : inputEl.classList.toggle("invalid") &&
      inputEl.classList.replace("valid", "invalid");

  // 2 варіант = працює при перезавантаженні сторінки

  // event.currentTarget.value.length === dataLength
  //   ? inputEl.classList.toggle("valid")
  //   : inputEl.classList.toggle("invalid");
}
