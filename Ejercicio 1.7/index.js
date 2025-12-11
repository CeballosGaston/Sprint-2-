"use strict";

//^^^^^^^^^^^^^EJERCICIO 1.7^^^^^^^^^^^^^^^

//================NIVEL 1 =================

// -------------Ejercicio 1-----------------

const promesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola Mon");
  }, 2000);
});

