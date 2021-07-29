// ----------------------------ENTIDADES---------------------------


// ----------------------------VARIABLES---------------------------

const itemsCarrito = document.querySelector(".box_carrito"); // Accedo a la caja padre del carrito
const boton_añadir = document.querySelectorAll(".boton_añadir"); //boton para añadir
const btn_carrito = document.querySelector(".btn_carrito"); // boton para que aparezca la opacidad
const cantidad_num = document.querySelectorAll(".cantidad_num");//accedo a input de cantidad a llevar
const llevar_mas = document.getElementById("mas");
const llevar_menos = document.querySelectorAll(".menos");
let unidades = 0;

// ---------------------------FUNCIONES ----------------------------

function abrir_carrito () {
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
      input.setAttribute("class", "cantidad_num");
      input.setAttribute("value", unidades);
      itemsCarrito.appendChild(input);
  
      // Creo el item boton + del carrito
      let btn_mas = document.createElement("button");
      btn_mas.setAttribute("class", "mas");
      btn_mas.textContent = "+";
      itemsCarrito.appendChild(btn_mas);
  
      // Creo el item boton - del carrito
      let btn_menos = document.createElement("button");
      btn_menos.setAttribute("class", "menos");
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
}

function aparecer_todo() {
   document.getElementById("padre").classList.toggle("oculto");
}

// function sumar(e) {
//     e.preventDefault;

//     console.log(e.target);

//     let mas = e.target.classList.contains("mas");
//     if (mas) {
//         unidades++;
//         cantidad_num.setAttribute("value", unidades);
//     }
// }

function sumar() {
    unidades++;
    document.getElementById("mas").value = unidades;
}

// ---------------------------EVENTOS ----------------------------

// Osea para poder clickear todos los añadir carritos y que se sumen
boton_añadir.forEach(x => {
    x.addEventListener("click", abrir_carrito);
    console.log("HIzo click")
});

// boton_añadir.addEventListener("click", abrir_carrito);

btn_carrito.addEventListener("click", aparecer_todo);

llevar_mas.addEventListener("click", sumar);

// llevar_mas.addEventListener("click", sumar);

// ----------------------------LOGICA ---------------------------------





