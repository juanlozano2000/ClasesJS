// Creo clase compra
class Cart {
    constructor (id, cost, cantidad, subtotal) {
        this.id = id;
        this.cost = parseInt(cost);
        this.cantidad = cantidad;
        this.subtotal = subtotal;
    }

    // Nombre del producto
    producto_id(){
        return this.id = this.id + " $";
    }

    // Costo * cantidad
    cost_x_cant(){
        return this.subtotal = this.cost * this.cantidad;
    }
}

// Objetos --> productos de la seccion Vodkas
const producto1 = new Cart ("Vodka Smirnoff 750ml + 2jugos naranja Bagio 1L", 500 ,2);
const producto2 = new Cart ("Vodka New Style x 1L caja de 6u", 1150 ,5);
const producto3 = new Cart ("Vodka Smirnoff diferentes sabores", 350 ,3);
const producto4 = new Cart ("Vodka Absolut sabor Mandrin 750ml", 1640 ,2);

// Ejecuto objetos
console.log(producto1.producto_id() + producto1.cost_x_cant());
console.log(producto2.producto_id() + producto2.cost_x_cant());
console.log(producto3.producto_id() + producto3.cost_x_cant());
console.log(producto4.producto_id() + producto4.cost_x_cant());


// Array vacio para que carrito de compras
const carritoArray = [];

// Persona con click agrega al carrito. Solo los nombres
carritoArray.push(producto1.id);
carritoArray.push(producto2.id);
carritoArray.push(producto3.id);
carritoArray.push(producto4.id);

console.log(carritoArray);
