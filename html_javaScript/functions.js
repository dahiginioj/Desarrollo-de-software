function saludar() {
    console.log("Hola Mundo");
    console.error("Hola mundo desde un error");
    console.warn("Hola Mundo desde un warning");
}

function obtNumeros() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    return { num1, num2 }
}

function limpiar() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
}

function sumar() {
    //Obtener un elemento html por id
    let n = obtNumeros();
    //Sumar
    let resultado = parseFloat(n.num1) + parseFloat(n.num2);
    console.log("La suma es: ", resultado);
    //alert("El resultado es: " + resultado);
    document.getElementById('resultado').innerHTML = "" + resultado;
    limpiar();
}

function restar() {
    //Obtener un elemento html por id
    let n = obtNumeros();
    //Restar
    let resultado = parseFloat(n.num1) - parseFloat(n.num2);
    console.log("La resta es: ", resultado);
    //alert("El resultado es: " + resultado);
    document.getElementById('resultado').innerHTML = "" + resultado;
    limpiar();
}

function multiplicar() {
    //Obtener un elemento html por id
    let n = obtNumeros();
    //Multiplicar
    let resultado = parseFloat(n.num1) * parseFloat(n.num2);
    console.log("La multiplicación es: ", resultado);
    //alert("El resultado es: " + resultado);
    document.getElementById('resultado').innerHTML = "" + resultado;
    limpiar();
}

function dividir() {
    //Obtener un elemento html por id
    let n = obtNumeros();
    //Dividir
    if (parseFloat(n.num2) != 0) {
        let resultado = parseFloat(n.num1) / parseFloat(n.num2);
        console.log("La división es: ", resultado);
        //alert("El resultado es: " + resultado);
        document.getElementById('resultado').innerHTML = "" + resultado;
        limpiar();
    } else {
        alert("No se puede dividir por cero");
    }


}

//Funciones de la tarjeta
function actualizarImagen() {
    console.log("Actualizar imagen");
    let imagen = document.getElementById('imagen');
    if (imagen.alt == 'img1') {
        imagen.src = "../Fundamentos_html_css_javascript/assets/UnalMed.jpg";
        imagen.alt = 'img2';
    } else {
        imagen.src = "../Fundamentos_html_css_javascript/assets/Firma DH.jpg"
        imagen.alt = 'img1';
    }
}