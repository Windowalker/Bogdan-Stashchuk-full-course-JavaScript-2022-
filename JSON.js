// JSON - JAVA SCRIPT OBJECT NOTATION формат данных, созданный для обмена информацией между клиентом и сервером. Он основан на синтаксисе объектов в JavaScript, прост для использования в JS.

// Сериализация (Превращение объекта javascript в Jason)
const пользователь = {
  имя: "Алексей",
  возраст: 30,
  женат: true,
  дети: ["Маша", "Петя"],
  адрес: {
    город: "Москва",
    улица: "Тверская",
    номер: 10,
  },
};
const jsonСтрока = JSON.stringify(пользователь); // JSON.stringify() метод который переделывает JS формат в JSON
console.log(jsonСтрока);

//Превращение JSON в объект Javascript (Десериализация)
const jsonСтрока2 =
  '{"имя":"Алексей","возраст":30,"женат":true,"дети":["Маша","Петя"],"адрес":{"город":"Москва","улица":"Тверская","номер":10}}';
const пользователь2 = JSON.parse(jsonСтрока2); // JSON.parse() метод, который преобразует код в привычный JS
console.log(пользователь2.имя);

const user = {
  userId: 1,
  id: 1,
  title: "Test title",
  status: {
    completed: false,
  },
};
const jsonСтрока3 = JSON.stringify(user); // stringify
console.log(jsonСтрока3);
