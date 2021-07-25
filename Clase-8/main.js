// Accedo a la caja padre del carrito
const itemsCarrito = document.querySelector(".box_carrito");

    // Creo el item imagen del carrito
    let img = document.createElement("img");
    img.setAttribute("class", "item_img");
    itemsCarrito.appendChild(img);

    // Creo el item parrafo del carrito
    let parrafo = document.createElement("p");
    parrafo.setAttribute("class","item_textProducto");
    itemsCarrito.appendChild(parrafo);

    // Creo el item input del carrito ara poner manual lo que voy al llevar
    let input = document.createElement("input");
    input.setAttribute("class", "item_inputNum");
    itemsCarrito.appendChild(input);

    // Creo el item boton + del carrito
    let btn_mas = document.createElement("button");
    btn_mas.setAttribute("class", "item_btn");
    btn_mas.textContent = "+";
    itemsCarrito.appendChild(btn_mas);

    // Creo el item boton - del carrito
    let btn_menos = document.createElement("button");
    btn_menos.setAttribute("class", "item_btn");
    btn_menos.textContent = "-";
    itemsCarrito.appendChild(btn_menos);

    // Creo el item precio <p> del carrito
    let precio = document.createElement("p");
    precio.setAttribute("class","item_precio");
    itemsCarrito.appendChild(precio);

    // Creo el item el tacho basura para eliminar del carrito
    let tacho = document.createElement("img");
    tacho.setAttribute("class", "item_tacho");
    itemsCarrito.appendChild(tacho);