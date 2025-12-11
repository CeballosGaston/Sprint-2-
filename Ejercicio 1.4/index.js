"use stric";

//^^^^^^^^^^^^^EJERCICIO 1.4^^^^^^^^^^^^^^^

//================NIVEL 1 =================

// -------------Ejercicio 1-----------------

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const array3 = [...array1, ...array2];

console.log(array3);

// -------------Ejercicio 2-----------------

function suma(...numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}

//PROBÁNDOLO

const array4 = [3, 4, 5, 6, 76, 45];
console.log(suma(1, 2, 3, 4, 5, 6));
console.log(suma(...array4));

//================NIVEL 2 =================

// -------------Ejercicio 3-----------------

const object1 = {
  name: "Jimi",
  lastName: "Hendrix",
  song: "Voodo Child",
};

const object2 = { ...object1, song: "Purple Haze" };

//COmprobación

console.log(object1);
console.log(object2);


// -------------Ejercicio 4-----------------

const array5 = [1, 2, 3, 4, 5];

const [primero, segundo, ...resto] = array5;

