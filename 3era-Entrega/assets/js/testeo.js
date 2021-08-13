// ----------------------------ENTIDADES---------------------------
class Producto {
    constructor(id, nombre, precio, img, cantidad) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.img = img;
      this.cantidad = cantidad;
    }
  };

// ----------------------------VARIABLES---------------------------
const container = document.querySelector(".container_carrito");
const boton_aniadir = document.querySelectorAll(".boton_aniadir"); //boton para añadir
const DOMtotal = document.getElementById("total");
const padre_cervezas = document.getElementById("padre_cervezas");
const input_cantidad = document.getElementsByClassName("input_cantidad"); //accedo a input de cantidad a llevar
let unidades = 1;


// Array vacio
  // Forma abreviada para decirme si el local estaba vacio retorname un array vacio;
  const array_carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
  
// Creo mis productos
  const cerveza_uno = new Producto(0,"CERVEZA PATAGONIA AMBER LAGER 473ml X6",950,"./img/patagonia_amber_lager.png",unidades);
  const cerveza_dos = new Producto(1,"CERVEZA QUILMES STOUT NEGRA LATA 473 ml 6u",590,"./img/quilmes_negra.png",unidades);
  const cerveza_tres = new Producto(2,"SIX PACK SCHNEIDER RUBIA LAGER PROMO 6 LATAS 473ml",200,"./img/pack-cerveza.png",unidades);
  const cerveza_cuatro = new Producto(3,"CONSERVADORA CORONA + 10 CERVEZAS DE REGALO",5000,"./img/cooler-10cervezas.png",unidades);
  
  const base_de_datos = [cerveza_uno, cerveza_dos, cerveza_tres, cerveza_cuatro];


// ---------------------------FUNCIONES ---------------------------
function productos_pagina() {
    base_de_datos.map((item) => {
      const card_cerveza = document.createElement("div");
      card_cerveza.setAttribute(
        "class",
        "col-12 col-md-6 col-lg-3 cervezas-centrado"
      );
      padre_cervezas.appendChild(card_cerveza);
  
      const box = document.createElement("div");
      box.setAttribute("class", "card text-center cervezas-cajas__box1");
      card_cerveza.appendChild(box);
  
      const img_cerveza = document.createElement("img");
      img_cerveza.setAttribute("class", "card-img-top img1");
      img_cerveza.setAttribute("src", item.img); //quiero que me agregue su imagen correspondiente
      box.appendChild(img_cerveza);
  
      const card_body = document.createElement("div");
      card_body.setAttribute("class", "card-body");
      box.appendChild(card_body);
  
      const h5 = document.createElement("h5");
      h5.setAttribute("class", "card-title cervezas-cajas__box1--producto1C");
      h5.textContent = `$ ${item.precio}`; //el precio de cada producto correspondiente
      card_body.appendChild(h5);
  
      const nombre_p = document.createElement("p");
      nombre_p.setAttribute("class", "card-text cervezas-cajas__box1--promo-1");
      nombre_p.textContent = item.nombre; //el nombre de cada producto correspondiente
      card_body.appendChild(nombre_p);
  
      const boton_violeta = document.createElement("a");
      boton_violeta.setAttribute(
        "class",
        "btn violeta rounded-pill boton_aniadir"
      );
      boton_violeta.setAttribute("href", "#");
      boton_violeta.setAttribute("marcador", item.id); //para que cada boton de cada producto tenga un ID
      boton_violeta.textContent = "Añadir al carrito";
      boton_violeta.addEventListener("click", añadir_al_array);
      card_body.appendChild(boton_violeta);
    });
}

// Es para crear los productos de mi pagina y que cada uno contenga sus datos
function añadir_al_array(e) {
  let marcador = Number(e.target.getAttribute("marcador"));
  location.reload(); //para que recargue la pagina

  switch (marcador) {
    case 0:
      // Agrego al array la cerveza elegida
      array_carrito.push(cerveza_uno)
      // Lo guardo en el localStorage
      guardar_local();
    break;
    case 1:
      array_carrito.push(cerveza_dos)
      guardar_local();
    break;
    case 2:
      array_carrito.push(cerveza_tres)
      guardar_local();
    break;
    case 3:
      array_carrito.push(cerveza_cuatro)
      guardar_local();
    break;
  
    default:
      break;
  }
  // Si lo pongo se me pinta pero se me repplica, esto ya me ha pasado. El item se pinta xq ya estuvo en el local.
  // pintar_carrito()
}

// Pintar mi carrito
function pintar_carrito() {
  let traer_local = JSON.parse(localStorage.getItem('carrito'));

  if (traer_local == null) {
    console.log('el array esta vacio, no puedo traer nada');
  } else {
    traer_local.forEach(item => {
      $(container).append(`
      <div class="row shoppingCartItem">
      <div class="col-6">
          <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
              <img src=${item.img} class="shopping-cart-image" alt="cervezas.jpg">
              <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">
                  ${item.nombre}
              </h6>
          </div>
      </div>
      <div class="col-2">
          <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
              <p class="item-price mb-0">
              $ <span class="precio_producto">${item.precio}</span>
              </p>
          </div>
      </div>
      <div class="col-4">
          <div class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
              <input type="number" value=${item.cantidad} class="shopping-cart-quantity-input input_cantidad">
              <button type="button" class="btn btn-danger buttonDelete" onclick="eliminar_producto(${item.id})">x</button>
          </div>
      </div>
     </div>
     
      `);
      
    });
  
  }

  refresh_total();
  
}

// Guardar en Local
function guardar_local() {
  localStorage.setItem('carrito', JSON.stringify(array_carrito));
}

// Para eliminar producto, el onclick me va a traer el ID (numero) correspondiente al producto, eso debo compararlo con con el ID del localStorage
function eliminar_producto(id) {
let borrar = JSON.parse(localStorage.getItem('carrito'));
let actualizar = borrar.filter(item => item.id != id)
localStorage.setItem('carrito', JSON.stringify(actualizar));
location.reload();
}

// Cambiar cantidad de unidades
function cambiar_cantidad() {
  
}

// Para que el usuario no ponga numeros negativos en el input cantidad
function cambiarCantidad(e) {
  const input = e.target;
  if (input.value <= 0) {
    input.value = 1;
  }
  refresh_total()
}


// Hacer las cuentas del total
function refresh_total() {
  let total = 0;
  // Accedo a mi html donde estan todas mis cosas
  let items_del_carrito = document.querySelectorAll('.shoppingCartItem');
  
  items_del_carrito.forEach(item => {
    // Tomo el precio
    let precio = Number(item.querySelector('.precio_producto').textContent);
    // Tomo la cantidad
    let cantidad = Number(item.querySelector('.input_cantidad').value);
    
    total = total + cantidad * precio;
  });

  DOMtotal.textContent = `${total}`;
}

// ----------------------------LOGICA -----------------------------

productos_pagina();
// SI lo pongo aca NO se me pinta, pero si lo pongo en la funcion guardar se me duplica. en la anterior duda lo solucione pero ahora nose
pintar_carrito();

// ---------------------------EVENTOS -----------------------------

// Transformo mi HTMLcollection a array asi lo puedo recorrer
let inputs = Array.from(input_cantidad);
// Recorro todos los inputs del carrito
inputs.forEach(item => {
  item.addEventListener('change', cambiarCantidad)
});