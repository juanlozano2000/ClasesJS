// Aca debo poner lo que tiene el carrito
let array_vacio = [];
// Accedo al container del carrito futuro
const container = document.querySelector(".container_carrito");
// Boton añadir producto
const boton_aniadir = document.querySelectorAll(".boton_aniadir");
boton_aniadir.forEach(boton => {
    boton.addEventListener('click', agregar_al_carrito_click)});

function agregar_al_carrito_click(e) {
    const btn = e.target;
    // Que me agarre el elemento mas cercano y accedo a todos sus datos
    const caja_padre = btn.closest(".caja_padre");
    
    // Tomo la imagen, precio, descripcion, correspondiente
    const img = caja_padre.querySelector(".img1").src;
    const precio = caja_padre.querySelector(".precio").textContent;
    const descripcion = caja_padre.querySelector(".descripcion").textContent;

    agregar_al_carrito_item(img,precio,descripcion);
}

function agregar_al_carrito_item(img,precio,descripcion) {

    // Aca debo agregar para que no se repliquen

    // Creo las cosas que metere dentro del container_carrito
    const nuevo_row = document.createElement('div');
    nuevo_row.setAttribute('class', "row shoppingCartItem");

        const col_productos = document.createElement('div');
        col_productos.setAttribute('class', "col-6");
        nuevo_row.appendChild(col_productos);
        
            const img_y_descripcion = document.createElement('div');
            img_y_descripcion.setAttribute('class', "shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3");
            col_productos.appendChild(img_y_descripcion);
            
                const imagen_carrito = document.createElement('img');
                imagen_carrito.setAttribute('class', "shopping-cart-image");
                imagen_carrito.setAttribute('src', img);
                img_y_descripcion.appendChild(imagen_carrito);
                
                const descripcion_carrito = document.createElement('h6');
                descripcion_carrito.setAttribute('class', "shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0");
                descripcion_carrito.textContent = descripcion;
                img_y_descripcion.appendChild(descripcion_carrito);

        const col_precio = document.createElement('div');
        col_precio.setAttribute('class', "col-2");
        nuevo_row.appendChild(col_precio);

            const caja_precio = document.createElement('div');
            caja_precio.setAttribute('class', "shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3");
            col_precio.appendChild(caja_precio);
            
                const p_precio = document.createElement('p');
                p_precio.setAttribute('class', "item-price mb-0 shoppingCartItemPrice");
                p_precio.textContent = precio;
                caja_precio.appendChild(p_precio);


        const col_cantidad_y_botonX = document.createElement('div');
        col_cantidad_y_botonX.setAttribute('class', "col-4");
        nuevo_row.appendChild(col_cantidad_y_botonX);

            const caja_cantidad_y_boton = document.createElement('div');
            caja_cantidad_y_boton.setAttribute('class', "shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3");
            col_cantidad_y_botonX.appendChild(caja_cantidad_y_boton);
            
                const cantidad = document.createElement('input');
                cantidad.setAttribute('class', "shopping-cart-quantity-input shoppingCartItemQuantity");
                cantidad.setAttribute('type', "number");
                cantidad.setAttribute('value', "1");
                caja_cantidad_y_boton.appendChild(cantidad);

                const boton_x = document.createElement('button');
                boton_x.setAttribute('class', "btn btn-danger buttonDelete");
                boton_x.setAttribute('type', "button");
                boton_x.textContent = 'X';
                caja_cantidad_y_boton.appendChild(boton_x);

    container.appendChild(nuevo_row);

    nuevo_row.querySelector(".buttonDelete").addEventListener('click', eliminar_producto);

    nuevo_row.querySelector('.shoppingCartItemQuantity').addEventListener('change', cambiar_cantidad);

    // Actualizar el total
    actualizar_total();
};

function actualizar_total() {
    // el total siempre empezara en 0
    let total = 0;

    const total_num = document.querySelector(".total_num"); //accedo al numero total
    const shoppingCartItem = document.querySelectorAll(".shoppingCartItem"); //cada vez que clickeo se me forma un array de lo que clickeo.

        shoppingCartItem.forEach(item => {
           const elemento_producto = item.querySelector(".shoppingCartItemPrice");  
           const shoppingCartItemPrice = Number(elemento_producto.textContent.replace('$', '')); //para que solo me muestre el numero en si y que me cambie el $ por un espacio vacio asi pedo jugar bien con los numeros
           const elemento_cantidad = Number(item.querySelector(".shoppingCartItemQuantity").value); //accedo al atributo value del input

           total = total + shoppingCartItemPrice * elemento_cantidad; //el total va a ser igual a lo que ya tenia el total mas la multicplicacion de las unidades por el precio
            
            // No funciona como deberia
            array_vacio.push(item.textContent)
            console.log(array_vacio);
            localStorage.setItem('carrito', JSON.stringify(array_vacio));
        });

    
    total_num.textContent = `$ ${total}`;

};

function eliminar_producto(e) {
    const boton_clickeado = e.target;
    boton_clickeado.closest('.shoppingCartItem').remove(); // la carta mas cercana removela

    actualizar_total(); //sino mi total no se actualiza, se queda con el ultimo precio generado
}

function cambiar_cantidad(e) {
   const input = e.target;
    // Verifico enotnces que no pueda poner numeros negativos, y si los pone se pone automaticamente 1
   if (input.value <= 0) {
       input.value = 1;
   }

   actualizar_total();
}