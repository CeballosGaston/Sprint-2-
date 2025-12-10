"use strict";

//^^^^^^^^^^^^^EJERCICIO 1.2^^^^^^^^^^^^^^^
//================NIVEL 1 =================

// -------------Ejercicio 1-----------------

function potConduir(age) {
  return age > 18
    ? console.log("Pots conduir")
    : console.log("No pots conduir");
}

potConduir(44);


// -------------Ejercicio 2-----------------

function numeroMayor(num1, num2) {
  num1 > num2
    ? console.log("El primer número es más grande")
    : num2 > num1
    ? console.log("El segundo número es más grande")
    : console.log("Son iguales");
}
