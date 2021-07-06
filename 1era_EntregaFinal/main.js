// Creo clase compra
class Carrito {
    constructor (articulo, costo, cantidad, subtotal) {
        this.articulo = articulo;
        this.costo = parseInt(costo);
        this.cantidad = Number(cantidad);
        this.subtotal = subtotal;
    }

    // Nombre del producto
    producto_articulo(){
        return this.articulo = this.articulo;
    }

    // Costo * cantidad
    costo_x_cant(){
        return this.subtotal = " $" + this.costo * this.cantidad;
    }
}



function productos() {
    // Seleccione que bebida desea llevar
    const articulo = prompt("Que bebida desea levar? \n1)Vodka Smirnoff 750ml + 2jugos naranja Bagio 1L \n2)Vodka New Style x 1L caja de 6u \n3)Vodka Smirnoff diferentes sabores \n4)Vodka Absolut sabor Mandrin 750ml");

    // Si elige la opcion 1, su costo es 500
    switch (articulo) {
        case "1":
        costo = 500;
        bebida_nombre = "Vodka Smirnoff 750ml + 2jugos naranja Bagio 1L";
        break;
        case "2":
        costo = 1150;
        bebida_nombre = "Vodka New Style x 1L caja de 6u";
        break;
        case "3":
        costo = 350;
        bebida_nombre = "Vodka Smirnoff diferentes saboresL";
        break;
        case "4":
        costo = 1640;
        bebida_nombre = "Vodka Absolut sabor Mandrin 750ml";
        break;

        default:
        bebida_nombre = "Error al ingresar el numero";
        console.log();("ERROR al ingresar el numero");
        break;
    }

    // // Que cantidad de lo elegido llevara?
    const cantidad = Number(prompt("Cuantas unidades desea llevar?"));

    // Lo que seleccione se guardara en nombre y ahi lo llamare con la clase
    let nombre = bebida_nombre;

    // Objetos --> productos de la seccion Vodkas. 
    const producto1 = new Carrito (nombre, costo ,cantidad);

    // Ejecuto objetos
    console.log(producto1.producto_articulo() + producto1.costo_x_cant());
}

// Cliente compra 3 productos distintos
for (let i = 0; i <= 2; i++) {
    productos();
}