// 1. Напишіть функцію, яка буде перевіряти обʼєкт на пустоту
function isTheObjectEmpty(object) {
  if (Object.keys(object).length) {
    console.log(`Цей об'єкт не пустий`);
  } else {
    console.log(`Цей об'єкт пустий`);
  }
}

const user = {
  name: "Ihor",
  age: 25,
  gender: "male",
};

const user2 = {};

isTheObjectEmpty(user2);

// 2. Опишіть обʼєкт user з полями name, age та методом sayHello,
//   результатом виклику якого має бути повідомлення “Привіт, я name, мені age років”

const user3 = {
  name: "Sergio",
  age: 29,
  sayHello() {
    alert(`Привіт, я ${this.name} , мені ${this.age} років`);
  },
};

user3.sayHello();

// 3. Напишіть обʼєкт калькулятор. Він має містити метод ask, sum та mul.
//    При виклику методу ask обʼєкт має запросити 2 числа та зберегти їх, як свої властивості.
//    При виклику sum - вивести суму збережених чисел, при виклику mul - додаток чисел.

const calculator = {
  firstNumber: null,
  secondNumber: null,

  ask() {
    this.firstNumber = Number(prompt(`Введіть перше число`));
    this.secondNumber = Number(prompt(`Введіть друге число`));
  },

  sum() {
    alert(`Сума чисел: ${this.firstNumber + this.secondNumber}`);
  },

  mul() {
    alert(`Добуток чисел: ${this.firstNumber * this.secondNumber}`);
  },
};

calculator.ask();
calculator.sum();
calculator.mul();
