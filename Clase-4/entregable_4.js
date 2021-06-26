// Cliente compra 1 vino y 1 cerveza con descuento + IVA incluido, calculo precio
// Declaro 1ero mi funcion
const sumar = (v,c) => v + c;
const restar = (v,c) => v - c;
const iva = (x) => x * 1.21;

// Declaro los valores del vino y cerveza
let vino = 200;
let vodka = 500;
let descuento = 30;

// Pongo una variable total asi luego lo imprimo con su nombre
let total = restar(iva(sumar(vino,vodka)),descuento);

console.log(total);