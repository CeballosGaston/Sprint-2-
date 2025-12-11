"use strict";

//^^^^^^^^^^^^^EJERCICIO 1.7^^^^^^^^^^^^^^^

//================NIVEL 1 =================

// -------------Ejercicio 1-----------------

const promesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola Mon");
  }, 2000);
});

// -------------Ejercicio 2-----------------

promesa.then((mensaje) => console.log(mensaje));

// -------------Ejercicio 3-----------------

function verificar(input) {
  return new Promise((resolve, reject) => {
    if (input !== "Hola") {
      return reject("El input no es el correcto");
    }

    setTimeout(() => {
      resolve("Hola");
    }, 2000);
  });
}

verificar("Hola")
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

  
// -------------Ejercicio 4-----------------

async function imprimirPromesa() {
  const impresion = await promesa;
  console.log(impresion);
}

imprimirPromesa();


//================NIVEL 2 =================

// -------------Ejercicio 5-----------------

async function imprimirPromesa() {
  try {
    const impresion = await promesa;
    console.log(impresion);
  } catch (err) {
    console.log(err.message);
  }
}

imprimirPromesa();


//================NIVEL 3 =================

// -------------Ejercicio 6-----------------

const promesa2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Ella Fitzgerald");
  }, 2000);
});
const promesa3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Billie Holiday");
  }, 3000);
});

Promise.all([promesa2, promesa3]).then((resultados) => console.log(resultados));

// PRUEBA CON TODO JUNTO

async function gestionarPromesas() {
  try {
    const resultados = await Promise.all([promesa2, promesa3]);
    console.log("Resultados:", resultados);
  } catch (error) {
    console.log("Alguna promesa falló:", error.message);
  }
}

gestionarPromesas();
