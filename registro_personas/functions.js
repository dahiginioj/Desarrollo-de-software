async function cargarMunicioios() {
    //Generar petición http
    const peticion = await fetch('https://datos.gov.co/resource/xdk5-pm3f.json');
    //Capturar datos en formato json
    const data = await peticion.json();
    //console.log(data);
    //Ordenar arreglo

    /*let ordenarArreglo = [];
    data.forEach(element => {
        ordenarArreglo.push(element.municipio);
    });
    ordenarArreglo.sort(); //El método sort() ordena los elementos de un arreglo*/

    data.sort((a, b) => {
            if (a.municipio > b.municipio) {
                return 1;
            } else {
                return -1;
            }
        })
        //Ejercicio: Cargar los municipios en el selet
    let municipios = document.getElementById('municipios');
    //Iterar el arreglo
    data.forEach(element => {
        //Añadir html al contenedor
        municipios.innerHTML += "<option value ='" + element.municipio + "'>" + element.municipio + "</option>";
    })
}

function limpiarCampos() {
    let nombre = document.getElementById('nombre').value = '';
    let apellido = document.getElementById('apellido').value = '';
    let email = document.getElementById('email').value = '';
    let municipios = document.getElementById('municipios').value = '';
}

//Ejercicio: Listar las personas en la tabla
function listar() {
    //Obtener el tbody
    let lista = document.getElementById('lista');
    lista.innerHTML = '';
    let fila = 0;
    personas.forEach(element => {
        let id = "f" + fila;
        lista.innerHTML += `<tr>
        <td id=` + id + `c0>` +
            element.nombre + `</td>
        <td id=` + id + `c1>` +
            element.apellido + `</td>
        <td id=` + id + `c2>` +
            element.email + `</td>
        <td id=` + id + `c3>` +
            element.municipios + `</td>
        <td>
            <button type="button" class="btn btn-primary" onclick="editar('` + id + `')">Editar</button>
            <button type="button" class="btn btn-danger" onclick="eliminar('` + element.email + `')">Eliminar</button>

        </td>
    </tr>`
            ++fila;
    });
}

var personas = [];

function registrar() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let municipios = document.getElementById('municipios').value;

    let objPersonas = {
        nombre,
        apellido,
        email,
        municipios
    }

    personas.push(objPersonas)
    console.log(personas);

    listar()
    limpiarCampos()

    //Obtener el tbody
    /*let lista = document.getElementById('lista');
    lista.innerHTML += `<tr>
    <td>` +
        objPersonas.nombre + `</td>
    <td>` +
        objPersonas.apellido + `</td>
    <td>` +
        objPersonas.email + `</td>
    <td>` +
        objPersonas.municipios + `</td>
        
                <td>
                    <button type="button" class="btn btn-primary" onclick="editar()">Editar</button>
                    <button type="button" class="btn btn-danger">Eliminar</button>

                </td>
</tr>`*/




}

function editar(fila) {
    let elemento = document.getElementById(fila + 'c0');
    console.log(MediaElementAudioSourceNode.innerText);
    document.getElementById('nombre').value = elemento.innerText;
    elemento = document.getElementById(fila + 'c1');
    document.getElementById('apellido').value = elemento.innerText;
    elemento = document.getElementById(fila + 'c2');
    document.getElementById('email').value = elemento.innerText;
    elemento = document.getElementById(fila + 'c3');
    document.getElementById('municipios').value = elemento.innerText;
}

function actualizar() {
    //Capturar datos del formulario
    console.log("actualizar");
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let municipios = document.getElementById('municipios').value;
    let email = document.getElementById('email').value;
    //Buscar la persona por email
    personas.map(element => {
        if (element.email == email) {
            element.nombre = nombre;
            element.apellido = apellido;
            element.municipios = municipios;
        }
    });
    //Limpiar campos
    limpiarCampos()
        //Recargar la tabla
    listar()

}

function eliminar(email) {
    //Filtrar todas las personas que no tengan el email a eliminar
    let personasFiltro = personas.filter(element => element.email != email);
    //Sobre escribir el arreglo global
    personas = personasFiltro;
    //Recargar la tabla
    listar();
}





cargarMunicioios();



//Métodos del backend
//GET/POST/PUT-PATCH/DELETE
//Express es un framework (caja de herramientas) que me permite levantar un servidor