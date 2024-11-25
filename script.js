"use strict";

/* const num = new Number(3);
console.log(num); */

// Конструкторы необходимы для создания однотипных данных

function User(name, id) {
    this.name = name; // Присваиваем имя пользователя
    this.id = id; // Присваиваем идентификатор пользователя
    this.human = true; // Указываем, что это человек
    this.hello = function () {
        console.log(`Hello ${this.name}`); // Метод для приветствия
    };
}

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушел`); // Добавляем метод в прототип для выхода пользователя
};

const ivan = new User('Ivan', 28); // Создаем объект 'ivan' с заданными параметрами
const alex = new User('Alex', 20); // Создаем объект 'alex' с заданными параметрами

ivan.exit(); // Вызываем метод 'exit' для 'ivan'

ivan.hello(); // Вызываем метод 'hello' для 'ivan'
alex.hello(); // Вызываем метод 'hello' для 'alex'

console.log(ivan); // Выводим объект 'ivan' в консоль
console.log(alex); // Выводим объект 'alex' в консоль

