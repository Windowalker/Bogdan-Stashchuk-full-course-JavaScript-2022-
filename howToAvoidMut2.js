// Variant2
const person = {
  name: "Bob",
  age: 25,
};
const person2 = { ...person }; //...-Оператор spread(оператор разделения объекта на свойства)
// не полностью копирует, если есть свойства ссылающиеся на вложенные объекты, ссылки сохранятся
// в скопируемом объекте изменяя влож.св-ва, они будут меняться в оригинале
//этот вариант короче.
person2.name = "Alice";
person2.age = 27;
console.log(person2.name);
console.log(person.name);
console.log(person2.age);
console.log(person.age);
