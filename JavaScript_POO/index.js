class MiClase {
    constructor() {
        this.saludo = "Hola Mundo!"; //Crear atributos a la clase, el this en programación orientado a objetos hace referencia a donde estoy ubicado
        console.log("Estoy en el método constructor");
    }

    sumar(num1, num2) {
        return num1 + num2;
    }
    saludar() {
        console.log(this.saludo);
    }
}

let objMiClase = new MiClase();

let resultado = objMiClase.sumar(5, 10);
console.log("El resultado: ", resultado);

objMiClase.saludar(); //Acceder al método
console.log("Acceso al atributo: ", objMiClase.saludo); //Acceder al atributo