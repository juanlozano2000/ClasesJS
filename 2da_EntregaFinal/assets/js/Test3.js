// ----------------------------ENTIDADES---------------------------
// Quiero que me pushe cuando haga click en añadir a carrito. Quiero que me añada el nuevo objeto seleccionado
class Producto {
    constructor(id, nombre, precio, img) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.img = img;
    }
  }
  
  // ----------------------------VARIABLES---------------------------------------------
  
  const itemsCarrito = document.querySelector(".box_carrito"); // Accedo a la caja padre del carrito
  const boton_aniadir = document.querySelectorAll(".boton_aniadir"); //boton para añadir
  const btn_carrito = document.querySelector(".btn_carrito"); // boton para que aparezca la opacidad
  const cantidad_num = document.querySelectorAll(".cantidad_num"); //accedo a input de cantidad a llevar
  const llevar_mas = document.getElementById("mas"); //accedo a boton mas
  const llevar_menos = document.getElementById("menos"); //accedo a boton menos
  const cerrar = document.getElementById("cerrar");
  const DOMtotal = document.getElementById("#total");
  const padre_cervezas = document.getElementById("padre_cervezas");
  let unidades = 1;
  let total = 0;
  
  // Array
  const array_carrito = [];
  
  const cerveza_uno = new Producto(
    0,
    "CERVEZA PATAGONIA AMBER LAGER 473ml X6",
    950,
    "./img/patagonia_amber_lager.png"
  );
  const cerveza_dos = new Producto(
    1,
    "CERVEZA QUILMES STOUT NEGRA LATA 473 ml 6u",
    590,
    "./img/quilmes_negra.png"
  );
  const cerveza_tres = new Producto(
    2,
    "SIX PACK SCHNEIDER RUBIA LAGER PROMO 6 LATAS 473ml",
    200,
    "./img/pack-cerveza.png"
  );
  const cerveza_cuatro = new Producto(
    3,
    "CONSERVADORA CORONA + 10 CERVEZAS DE REGALO",
    5000,
    "./img/cooler-10cervezas.png"
  );
  
  const base_de_datos = [cerveza_uno, cerveza_dos, cerveza_tres, cerveza_cuatro];

  
  // ---------------------------FUNCIONES --------------------------------------
function agregar_al_carrito(e) {
  const btn = e.target;

  // Btn se encarga de retornarme el su html, ahora muevo la funcion de mi btn al .cajapadre mas cercano. Entonces al logear caja_padre me devuelve la card_caja padre
  const caja_padre = btn.closest('.caja_padre');

  // Accedo a todos los datos
  const nombre = caja_padre.querySelector('.descripcion').textContent;
  const precio = Number(caja_padre.querySelector('.precio').textContent);
  const imagen = caja_padre.querySelector('.img1').src;
  const id = Number(caja_padre.querySelector('.id').textContent);


  // Creo mis nuevos objetos con lo que vaya clickeando
  const item_agregado = new Producto(id,nombre,precio,imagen)

  // Transformo en array lo que clickeo
  const campos = Object.values(item_agregado);
  console.log(campos);
  // Me quede en minuto 26.07


}


  
  // ---------------------------EVENTOS ----------------------------

  boton_aniadir.forEach(boton => {
    boton.addEventListener('click', agregar_al_carrito);
  })
  
  // ----------------------------LOGICA ---------------------------------
