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
