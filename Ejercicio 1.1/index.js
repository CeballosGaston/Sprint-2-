"use strict";


//^^^^^^^^^^^^^EJERCICIO 1.1^^^^^^^^^^^^^^^
//================NIVEL 1 =================

// -------------Ejercicio 1--------------

function add(a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;

console.log(add(4, 5));
const newResult = addArrow(4, 5);

console.log(newResult);

// -------------Ejercicio 2----------------

const randomNumber = () => Math.round(Math.random() * 100);
console.log(randomNumber());


// -------------Ejercicio 3----------------

class Person {
  constructor(name) {
    this.name = name;
  }

  greet = () => {
    return `Hola, ${this.name}`;
  };
}

const person1 = new Person("Chet Baker");

console.log(person1.greet());


//================NIVEL 2 =================

// -------------Ejercicio 4----------------

const printNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

const newArrey = [1, 2, 3, 4, 5, 6, 7, 8, 9];

printNumbers(newArrey);

//================NIVEL 3 =================

// -------------Ejercicio 5----------------

setTimeout(() => console.log("He esperado 3 segundos"), 3000);




