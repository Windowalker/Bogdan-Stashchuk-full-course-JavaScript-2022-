//локальные переменные (local variables)
function showMessage() {
  let message = "Привет, я JavaScript!"; // локальная переменная

  console.log(message);
}
showMessage(); // Привет, я JavaScript!

//console.log(message); // <-- будет ошибка, т.к. переменная видна только внутри функции

// my example
function dropMeGreet() {
  let message = "Привет,Пик!";
  console.log(message);
}
dropMeGreet();
