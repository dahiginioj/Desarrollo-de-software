const obj_1 = {
    nombre: "img2",
    urlImagen: "../Fundamentos_html_css_javascript/assets/UnalMed.jpg"
}



const obj_2 = {
    nombre: "img3",
    urlImagen: "https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg"
}

const objetos = [obj_1, obj_2];

function cargarTarjetas() {
    let contenedor = document.getElementById('contenedor');
    //Iterar el arreglo
    objetos.forEach(element => {
        let tarjetas = "<div class='card' style='width: 18rem;'>"
        tarjetas += "<img id='imagen' src='" + element.urlImagen + "' class='card-img-top' alt='" + element.nombre + "'>"
        tarjetas += "<div class='card-body'>"
        tarjetas += "<h5 class='card-title'>" + element.nombre + "</h5>"
        tarjetas += "</div>"
        tarjetas += "</div>"
            //Añadir html al contenedor
        contenedor.innerHTML += tarjetas;
    });
}