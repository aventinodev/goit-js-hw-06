// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const boxCollectionEl = document.querySelector("#boxes");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");

const inputEl = document.querySelector("input");

buttonCreateEl.addEventListener("click", createBoxes);
buttonDestroyEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = inputEl.value;
  const sizeStart = 30;

  for (let i = 0; i < amount; i += 1) {
    let size = i * 10 + sizeStart + "px";
    let boxEl = document.createElement("div");
    let color = getRandomHexColor();

    boxEl.style.width = size;
    boxEl.style.height = size;
    boxEl.style.marginTop = "10px";
    boxEl.style.backgroundColor = color;

    boxCollectionEl.append(boxEl);
  }
}

function destroyBoxes() {
  boxCollectionEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
