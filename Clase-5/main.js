// Creo clase compra
class Buy {
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

// Objetos
const subtotalUno = new Buy ("Vodka Smirnoff saborizado", 1000 ,2);
const subtotalDos = new Buy ("Vino Termidor", 100 ,5);
const subtotalTres = new Buy ("Cerveza patagonia SIX pack", 600 ,3);
const subtotalCuatro = new Buy ("Vodka Smirnoff saborizado", 1000 ,2);

console.log(subtotalUno.producto_id() + subtotalUno.cost_x_cant());
console.log(subtotalDos.producto_id() + subtotalDos.cost_x_cant());
console.log(subtotalTres.producto_id() + subtotalTres.cost_x_cant());
console.log(subtotalCuatro.producto_id() + subtotalCuatro.cost_x_cant());



