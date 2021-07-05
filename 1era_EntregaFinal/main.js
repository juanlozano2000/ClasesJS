// Creo clase compra
class Cart {
    constructor (id, cost, cantidad, subtotal) {
        this.id = id;
        this.cost = parseInt(cost);
        this.cantidad = Number(cantidad);
        this.subtotal = subtotal;
    }

    // Nombre del producto
    producto_id(){
        return this.id = this.id;
    }

    // Costo * cantidad
    cost_x_cant(){
        return this.subtotal = " $" + this.cost * this.cantidad;
    }
}


// Seleccione que bebida desea llevar
const id = prompt("Que bebida desea levar? \n1)Vodka Smirnoff 750ml + 2jugos naranja Bagio 1L \n2)Vodka New Style x 1L caja de 6u \n3)Vodka Smirnoff diferentes sabores \n4)Vodka Absolut sabor Mandrin 750ml");

// // Si elige la opcion 1, su costo es 500

switch (id) {
    case "1":
      cost = 500;
      bebida_nombre = "Vodka Smirnoff 750ml + 2jugos naranja Bagio 1L";
      break;
    case "2":
      cost = 1150;
      bebida_nombre = "Vodka New Style x 1L caja de 6u";
      break;
    case "3":
      cost = 350;
      bebida_nombre = "Vodka Smirnoff diferentes saboresL";
      break;
    case "4":
    cost = 1640;
    bebida_nombre = "Vodka Absolut sabor Mandrin 750ml";
    break;

    default:
    console.log();("ERROR al ingresar el numero");
    break;
  }

// // Que cantidad de lo elegido llevara?
const cantidad = Number(prompt("Cuantas unidades desea llevar?"));
let nombre = bebida_nombre;

// Objetos --> productos de la seccion Vodkas. 
const producto1 = new Cart (nombre, cost ,cantidad);


// Ejecuto objetos
console.log(producto1.producto_id() + producto1.cost_x_cant());

