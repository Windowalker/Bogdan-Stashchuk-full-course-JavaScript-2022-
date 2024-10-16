// Как избежать мутаций
// Иногда нужно создать копию объекта и изменять копию, не меняя ориг объект
// (assign) Вариант первый, как это можно сделать
const person = {
  name: "Bob",
  age: 25,
};
const person2 = Object.assign({}, person); //объект является частью глобального объекта
//доступен в веббаузер и в среде разработки
// Object-тип и класс. С заглавной PascalCase (типы данных и классы, иногда константы)
//Является прототипом для всех объектов в JS
// Один из методов Object.assign(с помощью него можно создавать новые объекты)
//С помощью синтаксиса Object.assign({}-пустой объект,person-объект который хочу скопировать)

person2.age = 26; //новая ссылка, на новый объект
console.log(person2.age);
console.log(person.age);
// Если у объекта есть вложенные объекты, то на них ссылки сохраяются.Смогу избежать мутирования только корневых св-в объекта.
