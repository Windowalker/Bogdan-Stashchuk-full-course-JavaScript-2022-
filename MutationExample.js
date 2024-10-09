const x = 5;
let y = x;
y = 10;
console.log(x);
console.log(y);

const car = {
  model: "Toyota",
  year: 2019,
};
const car1 = car;
let car2 = car1;
car2.year = 2020;
console.log(car1);
console.log(car2);
console.log(car);
