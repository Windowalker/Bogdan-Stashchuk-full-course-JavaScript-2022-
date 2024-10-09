// Значения примитивных типов
const a = 10;
let b = a; // копирование значения (copy by value)(числа, строки, булевы значения)
b = 30;
console.log(a); // Значение не изменилось 10
console.log(b); // Значение 30

// Значения ссылочного типа
const person = {
  name: "Bob",
  age: 21,
};
person.age = 22; // Мутирую объект, изменяя его свойство
person.isAdult = true;

console.log(person.age); // 22
console.log(person.isAdult); //true
// это возможно не смотря на const потому что объект это ссылочный тип, сама переменная
//хранит только ссылку на объект.

//Мутирование копий

const person1 = {
  // person1 хранит только ссылку
  name: "Bob",
  age: 25,
};
const person2 = person1; // <----- копирую только ссылку person (cope by reference)
// после этого могу мутировать свойства объекта (объекты, массивы)

person2.age = 26;
person2.isAdult = true;

console.log(person.age);
console.log(person.isAdult);
// выходит, что несмотря на const я могу изменять его, через копирование и мутирование.
