// //Ejemplo 1
// // Le pido un numero
let numero1 = parseInt(prompt("Ingresa un numero"));

// Que sume ese numero1 con 1 al 10
for (let i = 1; i <=10; i++) {
let suma = numero1 + i;
alert(numero1 + "+" + i + " = " + suma);
}


// Ejemplo 2
// le pido un texto
let ingresa = prompt("Ingresa tu nombre");

while (ingresa != "ESC"){
    console.log("Usted ingreso: " + ingresa);

    ingresa = prompt("Ingresa tu nombre");
}

// Ejemplo 3
// El numero ingresado quiero que me multicplique los hola
let nume = Number(prompt("Ingresa un numero"));

for(let i = 1; i<=nume;i++){
    console.log("Hola");
}
