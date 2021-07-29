class Pelicula {
    constructor(eidr, nombre, duracion, genero) {
        this.eidr = eidr;
        this.nombre = nombre;
        this.duracion = duracion;
        this.genero = genero;
    }
}

//  Evento para eliminar todo (Nuevo)
const botonRemoverPeliculas = document.getElementById("revoverPeliculas")
botonRemoverPeliculas.addEventListener("click", removerPeliculas);

//  Evento para dark mode
const botonDarkMode = document.getElementById("darkMode");
botonDarkMode.addEventListener("click", cambiarTema);

//  Evento para mostrar menu peliculas
const mostrarMenu = document.getElementById("mostrarMenu");
mostrarMenu.addEventListener("click", mostrarFormulario)

//  Evento para guardar formulario pelicula
const formulario = document.getElementById("formularioPeliculas");
formulario.addEventListener("submit", guardarPelicula);

//  Funcion para cambiar tema
function cambiarTema() {
    document.body.classList.toggle("darkMode");
}

//  Elimniamos todas las peliculas (Nuevo)
function removerPeliculas() {
    localStorage.clear();
    mostrarListado(cargarListado());
}

//  Funcion para cargar listado del localStorage o iniciarlo si no hay
function cargarListado() {
    const listadoPeliculas = JSON.parse(localStorage.getItem("listadoPeliculas"));
    if (listadoPeliculas == null) {
        return [];
    }
    return listadoPeliculas;
}

//  Funcion para guardar en localStorage
function guardarListado(listadoPeliculas) {
    localStorage.setItem("listadoPeliculas", JSON.stringify(listadoPeliculas));
    mostrarListado(listadoPeliculas);
}

//  Funcion para guardar pelicula (Nuevo)
function guardarPelicula(e) {
    e.preventDefault();
    const formulario = new FormData(e.target);
    const eidr = formulario.get("eidr");
    const nombre = formulario.get("nombre");
    const duracion = formulario.get("duracion");
    const genero = formulario.get("genero");

    const pelicula = new Pelicula(eidr, nombre, duracion, genero);

    if (validarformulario(pelicula)) {
        
        const listadoPeliculas = cargarListado();

        listadoPeliculas.push(pelicula);

        guardarListado(listadoPeliculas);

        document.getElementById('formularioPeliculas').reset();
    } else {
        mostrarError("Campos vacios, por favor ingrese todos los datos");
    }
}

//  Muestra un error (Nuevo)
function mostrarError(mensaje) {
    const div = document.createElement("div");
    div.classList.add("alert", "alert-danger", "m-3");
    div.textContent = mensaje;
    const menu = document.getElementById("menuAgregar");
    menu.appendChild(div);
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}

//  Valida que no tenga campos vacios (Nuevo)
function validarformulario(pelicula){
    let salida = true;
    const campos = Object.values(pelicula);
    campos.forEach(campo => {
        if (campo === "") {
            salida = false;
        }
    });
    return salida;
}

//  Funcion para mostrar menu peliculas
function mostrarFormulario() {
    document.getElementById("menuAgregar").classList.toggle("oculto");
}

//  Funcion para armar una tarjeta como en el AfterClass pasado (Nuevo)
function armarTarjeta(elemento) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta", "m-2");

    const btnEliminar = document.createElement("div");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn", "btn-danger", "float-end", "m-2");
    btnEliminar.setAttribute("id", elemento.eidr);
    btnEliminar.setAttribute("onclick", `eliminarPelicula(${elemento.eidr})`);
    tarjeta.appendChild(btnEliminar);

    const nombrePelicula = document.createElement("h3");
    nombrePelicula.textContent = elemento.nombre
    tarjeta.appendChild(nombrePelicula);

    const duracion = document.createElement("div");
    duracion.textContent = `Duracion: ${elemento.duracion}`;
    tarjeta.appendChild(duracion);

    const genero = document.createElement("div");
    genero.textContent = `Genero: ${elemento.genero}`;
    tarjeta.appendChild(genero);

    return tarjeta;
}

//  Eliminar pelicula especifica
function eliminarPelicula(eidr){
    let listadoPeliculas = cargarListado();
    listadoPeliculas = listadoPeliculas.filter(pelicula => pelicula.eidr != eidr);
    guardarListado(listadoPeliculas);
}

function mostrarListado(listadoPeliculas) {
    const listado = document.getElementById("listado");
    listado.textContent = "";
    listadoPeliculas.map(elemento => {
        listado.appendChild(armarTarjeta(elemento));
    });
}

mostrarListado(cargarListado());