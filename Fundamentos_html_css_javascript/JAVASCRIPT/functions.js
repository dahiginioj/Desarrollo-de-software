//FUNCIONES
function sumar(num_1, num_2) {
    let suma = num_1 + num_2;
    return suma
}

//Llamar función
sumar(5, 5);
let suma_1 = sumar(5, 5);

let suma_2 = suma_1 + 5;
console.log("Suma_1: ", suma_1, "\nSuma_2: ", suma_2);

raizCuadrada = Math.sqrt(suma_1);
console.log(raizCuadrada);

function elevarSuma(num_1, num_2) {
    suma = num_1 + num_2;
    elevado = Math.pow(suma, 2);
    console.log(elevado);
    return elevado

}

elevarSuma(5, 5);

//FUNCIONES FECHA
console.log("-----FUNCIOJNES FECHA-----");

const multiplicar = (num_1, num_2) => {
    return num_1 * num_2;
}

//console.log(multiplicar(2, 10));

function funcion_orden_superior(operacion) {
    let resultado = operacion(2, 10) + 20;
    console.log("Resultado en F. oden superior", resultado);
}

funcion_orden_superior(multiplicar);


function crear_operacion(operador) {
    let operacion;
    if (operador == '+') {
        operacion = (num_1, num_2) => {
            return num_1 + num_2;
        }
    } else if (operador == '-') {
        operacion = (num_1, num_2) => {
            return num_1 - num_2;
        }
    } else if (operador == '/') {
        operacion = (num_1, num_2) => {
            return num_1 / num_2;
        }
    } else if (operador == '*') {
        operacion = (num_1, num_2) => {
            return num_1 * num_2;
        }
    }
    return operacion;
}

let operacion = crear_operacion('*');
let resultado = operacion(2, 5);
console.log("Resultado de la operación: ", resultado);

let numeros = [];
for (let i = 0; i < 200; i++) {
    numeros.push(i);
}

numeros.forEach(element => {
    console.log(element);
});


//Transformar los datos del arreglo
numeros.map(element => element = element * 2);

//Búscar elemento
let filtro_numeros = numeros.filter(element => (element > 150));
console.log(filtro_numeros);

let frutas = ["Manzana", "Pera", "Sandia", "Piña", "Durazno"];
//Obtener todas las frutas que comienzan por la P
//variable_string.charAt(pos) -> obtener la letra de una posición en específico

let obtener_frutas_p = frutas.filter(
    element => (element.charAt(0) == "P")
)

console.log(obtener_frutas_p);