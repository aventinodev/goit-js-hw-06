// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onFormSubmit);

// =========1 варіант==========
// function onFormSubmit(event) {
//   event.preventDefault();
//   const userData = {
//     login: event.currentTarget.email.value,
//     password: event.currentTarget.password.value,
//   };
//   if (
//     event.currentTarget.email.value === "" ||
//     event.currentTarget.password.value === ""
//   ) {
//     const message = "Please, fill in all the fields";
//     return alert(message);
//   }
//   console.log(userData);
//   event.currentTarget.reset();
// }

// ============2 варіант===========

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const message = "Please, fill in all the fields";

  if (!email.value || !password.value) {
    return alert(message);
  }
  const obj = { email: email.value, password: password.value };
  console.log(obj);
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
