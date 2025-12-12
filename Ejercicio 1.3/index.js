"use strict";

//^^^^^^^^^^^^^EJERCICIO 1.3^^^^^^^^^^^^^^^

//================NIVEL 1 =================

// -------------Ejercicio 1-----------------

function processar(num, callback) {
  callback(num);
}

const procesando = (num) => console.log(num);

processar(23, procesando);

// -------------Ejercicio 2-----------------

function calculadora(a, b, callback) {
  console.log(callback(a, b));
}

const sumar = (a, b) => a + b;

calculadora(23, 23, sumar);

//================NIVEL 2 =================

// -------------Ejercicio 3-----------------

function esperarSaludar(nom, callback) {
  setTimeout(() => {
    callback(nom);
  }, 2000);
}
//(La pongo a prueba)

function imprimir(n) {
  console.log(n);
}

esperarSaludar("Sauron", imprimir);

// -------------Ejercicio 4-----------------

function processarElements(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

//(La pongo a prueba)
function parOImpar(n) {
  n % 2 == 0
    ? console.log(`El número ${n} es par`)
    : console.log(`El número ${n} es impar`);
}

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15];

processarElements(newArr, parOImpar);

//================NIVEL 3=================

// -------------Ejercicio 5----------------

function processarCadena(str, callback) {
  (str = str.toUpperCase()), callback(str);
}

//(La pongo a prueba)

function imprimirStr(str) {
  console.log(str);
}

processarCadena("los enanos de blancanieves", imprimirStr);
