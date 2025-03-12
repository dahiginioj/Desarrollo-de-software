//VARIABLES
let numero_1 = 1; //La variable let tiene un alcance local, recomendable let para crear variables.
var cadena = "Hola mundo"; //La vaviable var tiene un alcance global
const numero_2 = 2;
numero_1 = 3;
cadena = "hola mundo";

//MOSTRAR MENSAJES EN CONSOLA
console.log(cadena);
console.error("esto es un error");
console.table({ nombre: "David" });

//ESTRUCTURAS DE DECISION
console.log("--------ESTRUCTURAS DE DECISION--------");
if (numero_1 > numero_2) {
    console.log("Número 1 es mayor")
} else {
    console.log("Número 2 es mayor")
}

let numero_3 = 10;
let numero_4 = 5;

//AND
if (numero_1 > numero_2 && numero_3 > numero_4) {
    console.log("CUMPLE")
} else {
    console.log("No cumple")
}
//OR
if (numero_1 > numero_2 || numero_3 > numero_4) {
    console.log("CUMPLE")
} else {
    console.log("No cumple")
}

//CICLOS
console.log("--------CICLOS--------");
console.log("--------CICLO FOR--------");
//FOR
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//WHILE
console.log("--------CICLO WHILE--------");
let contador = 0
while (contador < 5) {
    console.log(contador);
    ++contador;
}

//Imprimir lo primeros 100 números
console.log("--------IMPRIMIR TODOS LOS NUMEROS PARES DEL 1 AL 100--------");
let contador1 = 1;
while (contador1 < 101) {
    if (contador1 % 2 == 0) {
        console.log(contador1);
    }
    ++contador1;
}


//ARREGLOS
console.log("--------ARREGLOS--------");
let numeros = [];
console.log("Numeros->", numeros);

//Añadir elementos
numeros.push(10);
numeros.push(20);
numeros.push(30);

console.log("Numeros->", numeros);

//Ejercicio: Quitar el elemento 20

let nuevoArreglo = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] != 20) {
        nuevoArreglo.push(numeros[i]);
    }
}
console.log(nuevoArreglo);

//Quitar elementos
numeros.pop();
console.log("Numeros->", numeros);

let frutas = ["manzana", "pera", "piña"];
console.log(frutas);