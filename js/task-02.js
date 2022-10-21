" use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// 1)=================================================
// const listEl = document.querySelector("#ingredients");

// const arrayItemEl = [];
// ingredients.forEach((ingredient) => {
//   const ingredientEl = ingredient;
//   const itemEl = document.createElement("li");
//   itemEl.classList.add("item");
//   itemEl.textContent = ingredientEl;
//   arrayItemEl.push(itemEl);
// });
// console.log(arrayItemEl);

// listEl.append(...arrayItemEl);
// console.log(listEl);
// ==================================================

// 2)===============================================

// const listEl = document.querySelector("#ingredients");
// const arrayItemEl = ingredients.map((ingredient) => {
//   const itemEl = document.createElement("li");
//   itemEl.classList.add("item");
//   itemEl.textContent = ingredient;
//   return itemEl;
// });
// listEl.append(...arrayItemEl);
// console.log(listEl);

// 3)===================================================

const listEl = document.querySelector("#ingredients");
const createList = (parametrs) => {
  return parametrs.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = ingredient;
    return itemEl;
  });
};

const arrayItemEl = createList(ingredients);
listEl.append(...arrayItemEl);
console.log(listEl);
