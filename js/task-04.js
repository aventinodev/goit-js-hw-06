// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const buttonDecrementEl = document.querySelector('[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector("#value");

buttonDecrementEl.addEventListener("click", onClickButtonDecrement);
buttonIncrementEl.addEventListener("click", onClickButtonIncrement);

function onClickButtonDecrement() {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}

function onClickButtonIncrement() {
  counterValue += 1;
  counterEl.textContent = counterValue;
}
