//Жизненный цикл переменных
let a; // undefined
let b; // undefined

function myFn() {
  // вызывается функция
  let b; // объявление "b" в зоне видимости функции. Каждый раз когда вызывается одна и та же функция, создаются новые области видимости.
  a = true; // объявлена в зоне видимости функции(НЕТ),объявлена во внешней оласти видимости(ДА)
  b = 10; //объявлена ли "b" в рамках функции? ДА. Присвоение этой переменной "b" значения 10
  console.log(b); //10
}
// "b" имеет значение 10 в области видимости функции
myFn(); // вызов myFn !!! без вызова функции она не работает, то есть ранее для нее создается только шаблон.

console.log(a);
console.log(b); //все так же имееи значение undefined в глобальной области
// приоритет всегда за ЛОКАЛЬНОЙ ОБЛАСТЬЮ ВИДИМОСТИ
