function greetUser() {
  console.log("Привет, пользователь!"); // Функция, которая приветствует пользователя
}

function executeCallback(callback) {
  console.log("Начинаем выполнение callback-функции."); // Сообщение перед вызовом
  callback(); // Вызов переданной функции
  console.log("Завершили выполнение callback-функции."); // Сообщение после вызова
}

// Вызываем функцию executeCallback и передаём в неё функцию greetUser
executeCallback(greetUser);

function printMyName() {
  console.log("Kirill");
}
console.log("Start");
setTimeout(printMyName, 2000);
