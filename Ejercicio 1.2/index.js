"use strict";

//^^^^^^^^^^^^^EJERCICIO 1.2^^^^^^^^^^^^^^^
//================NIVEL 1 =================

// -------------Ejercicio 1-----------------

function potConduir(age) {
  if (typeof age !== "number" || isNaN(age)) {
    console.log("Error: el valor debe ser un número");
    return;
  }
  age >= 18 ? console.log("Pots conduir") : console.log("No pots conduir");
}

potConduir(23);

// -------------Ejercicio 2-----------------

function numeroMayor(num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    console.log("Error: los valores deben ser un números");
    return;
  }

  num1 > num2
    ? console.log("El primer número es más grande")
    : num2 > num1
    ? console.log("El segundo número es más grande")
    : console.log("Son iguales");
}

numeroMayor(14, 23);

//================NIVEL 2 =================

// -------------Ejercicio 3-----------------

function numeroPositivoONegativo(num) {
  if (typeof num !== "number" || isNaN(num)) {
    console.log("Error: el valor debe ser un número");
    return;
  }

  num > 0
    ? console.log("El número es positivo")
    : num < 0
    ? console.log("El número es negativo")
    : console.log("El número es cero");
}

numeroPositivoONegativo(34);

function trobarMaxim(a, b, c) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number" ||
    isNaN(a) ||
    isNaN(b) ||
    isNaN(c)
  ) {
    console.log("Error: los valores deben ser números");
    return;
  }

  let numeroMayor = 0;

  a > b && a > c || a == b && a > c || a == c && a > b
    ? (numeroMayor = a)
    : b > a && b > c || b == c && b > a
    ? (numeroMayor = b)
    : c > a && c > b
    ? (numeroMayor = c)
    : (numeroMayor = `Los número son iguales`);

  if (numeroMayor == a || numeroMayor == b || numeroMayor == c) {
    console.log(`El número mayor es ${numeroMayor}`);
  } else {
    console.log(numeroMayor);
  }
}

trobarMaxim(2, 0, 2);

//================NIVEL 3 =================

// -------------Ejercicio 4-----------------

function parOImpar(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 == 0
      ? console.log(`El número ${arr[i]} es par`)
      : console.log(`El número ${arr[i]} es impar`);
  }
}

const newArr = [1, 2, 3, 4, 56, 776, 8, 9, 54];

parOImpar(newArr);
