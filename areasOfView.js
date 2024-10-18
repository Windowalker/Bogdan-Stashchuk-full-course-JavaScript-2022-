// Цепочка областей видимости
const a = 5; // глобальная видимость

function myFn() {
  // myFn область видимости
  function innerFn() {
    // innerFn облсть видимости
    console.log(a); //
  }
  innerFn();
}
myFn();
//5
//undefined потому что myFn без инструкции с ключ словом return
