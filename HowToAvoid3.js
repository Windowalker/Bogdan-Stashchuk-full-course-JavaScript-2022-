// Полностью избегаю мутацию
// parse и stringify методы объекта JSON.
const person = {
  name: "Bob",
  age: 25,
};
const person2 = JSON.parse(JSON.stringify(person)); //ссылки на вложенные объекты не сохраняются
// сначала конвертирую в строку JSON при помощи stringify,а после снова распарсиваю на JS
//получаю полностью новый объект

person2.name = "Alice";

console.log(person2.name);
console.log(person.name);
console.log(person2.age);
