function sayHello(name) {
  console.log(name + ", Привет!");
}
sayHello("Kirill");
sayHello("Sasha");


function executeCallback(callback) {
    console.log("Перед вызовом callback-функции.");
    callback();// function sayHello() {
    console.log("Привет!");// Здесь создаю функцию без переменной и вывожу "Привет!"
    console.log("После вызова callback-функции.");

    function printMyName() {
        console.log("Kirill");
      }
      console.log("Start");
      setTimeout(printMyName, 2000);