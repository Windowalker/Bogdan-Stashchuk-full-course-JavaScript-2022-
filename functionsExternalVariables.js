// Внешние переменные
// У функции есть доступ к внешним переменным, например:
let userName = "Вася";
function showMessage() {
  userName = "Петя"; // изменяю значение внешней переменной
  let message = "Привет," + userName;
  console.log(message);
}
console.log(userName); //перед вызовом функции
showMessage();
console.log(userName); // Петя, значение внешней переменной было изменено функцией
