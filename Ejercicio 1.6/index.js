"use strict";

//^^^^^^^^^^^^^EJERCICIO 1.6^^^^^^^^^^^^^^^

//================NIVEL 1 =================

// -------------Ejercicio 1-----------------

const nombres = ["Anna", "Bernat", "Clara"];

nombres.forEach((n) => {
  console.log(n);
});

// -------------Ejercicio 2-----------------

for (const nom of nombres) {
  console.log(nom);
}

// -------------Ejercicio 3-----------------

const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter((x) => x % 2 == 0);
console.log(pares);

//================NIVEL 2 =================

// -------------Ejercicio 4-----------------

let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };

for (const key in obj) {
  console.log(key, obj[key]);
}
