//los objetos en js son similares a los diccionarios en python, clave: valor
let telefonosPersonas = {
    Tel1: "12345",
    Tel2: "6789"
}

let objPersona = {
    nombre: "David",
    apellido: "Higinio",
    email: "dahiginioj@unal.edu.co",
    telefono: telefonosPersonas,
    Edad: 30
}

let objPersona1 = {
    nombre: "Olga",
    apellido: "Jiménez",
    email: "olgahiginio@gmail.com",
    telefono: telefonosPersonas,
    Edad: 51
}

//console.log(objPersona);
//console.log(objPersona.nombre);
//console.log(objPersona.apellido);
//console.log(objPersona.email);

console.log(objPersona['email']);

let personas = [objPersona, objPersona1];

personas.forEach(element => {
    console.log(element.Edad);
    console.log(element);
});

//EJERCICIO:
//Escribir una función que reciba como parámetro un objeto,
//Validar que ningún atributo sea nulo y añadirlo al arreglo 'personas'

function validarAtributos(objeto) {
    if ((objeto.nombre != null) && (objeto.apellido != null) && (objeto.email = !null) && (objeto.telefono != null) && (objeto.Edad != null)) {
        personas.push(objeto);
    }
}

let objeto = {
    nombre: "Angel",
    apellido: "Jiménez",
    email: "angel@gmail.com",
    telefono: telefonosPersonas,
    Edad: 10
}

validarAtributos(objeto);
console.log(personas);

//EJERCICIO:
//Escriba una funció que recibe como parámetro:
//nombre, apellido, email, telefono y edad
//retorne un objeto con estos datos y posteriormente añadalo al arreglo 'personas'

function funcionObjeto(nombre, apellido, email, telefono, edad) {
    let objeto = {
        nombre,
        apellidopersona: apellido,
        emailpersona: email,
        telefonopersona: telefono,
        edad
    }
    return objeto;
}

let obj = funcionObjeto("Juan", "Higinio", "jusierrah@unal.edu.co", "322222222", 29);
personas.push(obj);
console.log(personas);