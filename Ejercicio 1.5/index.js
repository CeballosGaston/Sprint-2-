"use strict";

//^^^^^^^^^^^^^EJERCICIO 1.5^^^^^^^^^^^^^^^

//================NIVEL 1 =================

// -------------Ejercicio 1-----------------

const arrayNumeros = [1, 2, 3, 4];

const cuadrados = arrayNumeros.map((x) => x * x);
console.log(cuadrados);

// -------------Ejercicio 2-----------------

const pares = arrayNumeros.filter((x) => x % 2 == 0);
console.log(pares);


// -------------Ejercicio 3-----------------

const arrayNumeros2 = [1, 10, 8, 11];
const mayorADiez = arrayNumeros2.find((x) => x > 10);
console.log(mayorADiez);


// -------------Ejercicio 4-----------------

const arrayNumeros3 = [13, 7, 8, 21];
const sumaTotal = arrayNumeros3.reduce((acc, x) => acc + x, 0);
console.log(sumaTotal);

//================NIVEL 2 =================

// -------------Ejercicio 5-----------------

const arrayNumeros4 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const newArray = arrayNumeros4
  .filter((x) => x >= 10)
  .map((x) => x * 2)
  .reduce((acc, x) => x + acc, 0);

console.log(newArray);

//================NIVEL 2 =================

// -------------Ejercicio 5-----------------

const arrayNumeros5 = [11, 12, 13, 14];

const todos = arrayNumeros5.every((x) => x > 10);
const alguno = arrayNumeros5.some((x) => x > 10);
console.log(todos);
console.log(alguno);
