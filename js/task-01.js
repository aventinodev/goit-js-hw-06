"use strict";
// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const listCategory = document.querySelectorAll("#categories > li").length;
console.log(listCategory);
console.log(`Number of categories: ${listCategory}`);

const items = document.querySelectorAll(".item");
console.log(items);
items.forEach((item) => {
  let category = item.firstElementChild.textContent;
  let numberElements = item.lastElementChild.children.length;
  console.log(`Category: ${category}\nElements: ${numberElements}`);
});

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
