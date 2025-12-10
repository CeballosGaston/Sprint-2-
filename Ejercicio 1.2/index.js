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


//================NIVEL 2 =================

// -------------Ejercicio 3-----------------

function numeroPositivoONegativo(num) {
  num > 0
    ? console.log("El número es positivo")
    : num < 0
    ? console.log("El número es negativo")
    : console.log("El número es cero");
}

function trobarMaxim(a, b, c) {
  a > b && a > c
    ? console.log(`El número ${a} es el mayor`)
    : b > a && b > c
    ? console.log(`El número ${b} es el mayor`)
    : c > a && c > b
    ? console.log(`El número ${c} es el mayor`)
    : console.log(`Los número son iguales`);
}
