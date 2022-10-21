let counterValue = 0;

const buttonDecrementEl = document.querySelector('[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector("#value");

buttonDecrementEl.addEventListener("click", onClickButtonDecrement);
buttonIncrementEl.addEventListener("click", onClickButtonIncrement);

function onClickButtonDecrement(counterValue) {
  counterValue -= 1;
  counterEl.textContent = counterValue;
  console.log("- 1 = ", counterValue);

  console.log(counterEl);
}

function onClickButtonIncrement() {
  counterValue += 1;
  counterEl.textContent = counterValue;
  console.log("+ 1 =", counterValue);
  console.log(counterEl);
}
