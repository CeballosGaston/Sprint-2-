"use strict";

//^^^^^^^^^^^^^EJERCICIO 1.3^^^^^^^^^^^^^^^

//================NIVEL 1 =================

// -------------Ejercicio 1-----------------

function processar(num, callback) {
  console.log(callback(num));
}

// -------------Ejercicio 2-----------------

function calculadora(a, b, callback) {
  console.log(callback(a, b));
}

const sumar = (a, b) => a + b;

calculadora(23, 23, sumar);
