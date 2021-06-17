// Ver si el numero ingresado es mayor a 1000
let numeroMil = parseInt(prompt("Ingrese un numero"));

if (numeroMil > 1000){
    alert("Su numero es mayor a 1000");
} else {
    alert("Error: su numero no es mayor a 1000");
}

// // Ver si Hola es ingresado
let saludo = prompt("Ingrese Hola");

if (saludo == "Hola"){
    console.log("Usted escribio Hola correctamente");
} else {
    console.log("No escribio Hola correctamente");
}

// // Ver si el numero ingresado enta entre 10 y 50.
let numeroIngresado = prompt("Ingrese algun numero");

if ((numeroIngresado >= 10) && (numeroIngresado <= 50)){
    alert("Su numero ingresado es " + numeroIngresado + " y esta entre 10 y 50");
} else {
    console.log("Error: su numero ingresado es " + numeroIngresado + " y NO esta entre 10 y 50");
}
