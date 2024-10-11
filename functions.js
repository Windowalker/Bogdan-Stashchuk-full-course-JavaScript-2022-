let a = 5;
let b = 3;

let c;
c = a + b; //
console.log(c); // одинаковые блоки кода

a = 8;
b = 12;
c = a + b; //
console.log(c); // одинаковые блоки кода
// могу упростить все функцией

let a1 = 5;
let b1 = 3;
function sum(a1, b1) {
  const c1 = a1 + b1;
  console.log(c1);
}
sum(a1, b1);

a1 = 8;
b1 = 12;

sum(a1, b1);
//функция- это объект
function myFn(a3, b3) {
  // имя, параметры {}-тело ф-ии
  let c3;
  a3 = a3 + 1;
  c3 = a3 + b3;
  return c3; // результат. после return функиция прекращает выполнение дальнейш интсрукций.
}
console.dir(myFn);
//вызов функции.
function myFn4(a4, b4) {
  // параметры,переменные которые будут вызываться только внутри функции
  let c4;
  a4 = a4 + 1;
  c4 = a4 + b4;
  return c4;
}
myFn4(10, 3); // 10, 3 - аргументы (значения этих переменных, которые я передаю в вызове функции)

//Передача значения по ссылке

const personOne = {
  //константа personOne
  name: "Bob", // свойство
  age: 21, // свойство
};
function increasePersonAge(person) {
  //называю ф-ию с новым объектом person
  person.age += 1; //у нового объекта прибавяю один к значению
  return person; // возвращаю person. //функция мутирует внешний о
}
increasePersonAge(personOne); //personOne - объект
console.log(personOne.age);
// не понятно, вернуться и пересмотреть заново откуда связь person и personOne
//Иногда имеет смысл присваивать значение по умолчанию для параметров не в объявлении ф-ии а позднем этапе.

function showMessage(text) {
  //...
  if (text === undefined) {
    // если параметр отсутствует
    text = "пустое сообщение";
  }
  alert(text);
}
showMessage();
