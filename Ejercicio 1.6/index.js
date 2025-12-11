"use strict";

//^^^^^^^^^^^^^EJERCICIO 1.6^^^^^^^^^^^^^^^

//================NIVEL 1 =================

// -------------Ejercicio 1-----------------

const nombres = ["Anna", "Bernat", "Clara"];


try {

  nombres.forEach((n) => {
    if(!n) throw new Error("Nombre Vacío")
    console.log(n);
  });
}catch(error){
console.log("Ha ocurrido un error:", error.message);
}

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
try{
for (const key in obj) {
  if(obj[key] === undefined) throw new Error("Valor Indefinido")
    console.log(key, obj[key]);
  }
}catch(error){
  console.log("Nuevo error:", error.message );
}



// -------------Ejercicio 5-----------------

let numeros2 = [1, 2, 3, 4, 5, 6];

for (const n of numeros2) {
  if (n === 5) break;
  console.log(n);
}

//================NIVEL 3 =================

// -------------Ejercicio 6-----------------

let noms = ["Anna", "Bernat", "Clara"];

for (const n of noms) {
  console.log(noms.indexOf(n),  n);
}
