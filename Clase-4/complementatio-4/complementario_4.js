// Funcion 1 --> pido nombre para conocerlo
let nombre = prompt("Como es tu nombre?");
function tuNombre () {
    console.log(nombre);
    return
}
tuNombre();

// funcion 2 --> que numero queres calcularle el IVA nombre?
let ivaPreg = Number(prompt("Hola " + nombre + " que numero deseas averiguar su IVA?"));
function iva () {
    console.log(ivaPreg + " * 21% -->");
    return
}
iva();

// funcion 3 --> calculo propiamente dicho
const prod = (a) => a * 0.21;


// funcion 4 --> mostrar el resultado total
function total(){
    let resultado = alert("El 21% de " + ivaPreg + " es " + prod(ivaPreg));
}
total();