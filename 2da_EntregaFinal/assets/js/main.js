// ----------------------------ENTIDADES---------------------------
// Quiero que me pushe cuando haga click en añadir a carrito. Quiero que me añada el nuevo objeto seleccionado
class Producto{
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
}


// ----------------------------VARIABLES---------------------------

const itemsCarrito = document.querySelector(".box_carrito"); // Accedo a la caja padre del carrito
const boton_aniadir = document.querySelectorAll(".boton_añadir"); //boton para añadir
const btn_carrito = document.querySelector(".btn_carrito"); // boton para que aparezca la opacidad
const cantidad_num = document.querySelectorAll(".cantidad_num");//accedo a input de cantidad a llevar
const llevar_mas = document.getElementById("mas"); //accedo a boton mas
const llevar_menos = document.getElementById("menos"); //accedo a boton menos
const cerrar = document.getElementById("cerrar");
const DOMtotal = document.getElementById('#total');
const padre_cervezas = document.getElementById("padre_cervezas");
let unidades = 1;
let total = 0;
// Array
const array_carrito = [];

const cerveza_uno = new Producto(1,"CERVEZA PATAGONIA AMBER LAGER 473ml X6", 950, "./img/patagonia_amber_lager.png");
const cerveza_dos = new Producto(2,"CERVEZA QUILMES STOUT NEGRA LATA 473 ml 6u", 590, "./img/quilmes_negra.png");
const cerveza_tres = new Producto(3,"SIX PACK SCHNEIDER RUBIA LAGER PROMO 6 LATAS 473ml", 200, "./img/pack-cerveza.png");
const cerveza_cuatro = new Producto(4,"CONSERVADORA CORONA + 10 CERVEZAS DE REGALO", 5000, "./img/cooler-10cervezas.png");

const base_de_datos = [cerveza_uno, cerveza_dos, cerveza_tres, cerveza_cuatro];



// ---------------------------FUNCIONES ----------------------------

function productos_pagina() {
    base_de_datos.map(item => {
        
        const card_cerveza = document.createElement("div");
        card_cerveza.setAttribute("class", "col-12 col-md-6 col-lg-3 cervezas-centrado");
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
                    h5.textContent = `$ ${item.precio}` //el precio de cada producto correspondiente
                    card_body.appendChild(h5);

                    const nombre_p = document.createElement("p");
                    nombre_p.setAttribute("class", "card-text cervezas-cajas__box1--promo-1");
                    nombre_p.textContent = item.nombre; //el nombre de cada producto correspondiente
                    card_body.appendChild(nombre_p);

                    const boton_violeta = document.createElement("a");
                    boton_violeta.setAttribute("class", "btn violeta rounded-pill boton_añadir");
                    boton_violeta.setAttribute("href", "#");
                    boton_violeta.setAttribute("marcador", item.id); //para que cada boton de cada producto tenga un ID
                    boton_violeta.textContent = "Añadir al carrito";
                    boton_violeta.addEventListener("click", añadir_al_array);
                    card_body.appendChild(boton_violeta);
                    
    });
    
}

function abrir_carrito () {
    // Vacio el carrito
    itemsCarrito.textContent = '';

    base_de_datos.forEach(items => {
        let producto_sumado = document.createElement("div");
        producto_sumado.setAttribute("class", "producto_sumado d-flex align-items-center my-2");
        itemsCarrito.appendChild(producto_sumado);
        
            // Creo el item imagen del carrito
            let img = document.createElement("img");
            img.setAttribute("class", "item_img");
            img.setAttribute("src", items.img);
            producto_sumado.appendChild(img);
    
            // Creo el item parrafo del carrito
            let parrafo = document.createElement("p");
            parrafo.setAttribute("class","descripcion");
            parrafo.textContent = items.nombre;
            producto_sumado.appendChild(parrafo);
    
                let entradas = document.createElement("div");
                entradas.setAttribute("class", "entradas");
                producto_sumado.appendChild(entradas);
    
                // Creo el item input del carrito ara poner manual lo que voy al llevar
                let input = document.createElement("input");
                input.setAttribute("class", "cantidad_num");
                entradas.appendChild(input);
    
                // Creo el item boton + del carrito
                let btn_mas = document.createElement("button");
                btn_mas.setAttribute("class", "mas");
                btn_mas.textContent = "+";
                entradas.appendChild(btn_mas);
    
                // Creo el item boton - del carrito
                let btn_menos = document.createElement("button");
                btn_menos.setAttribute("class", "menos");
                btn_menos.textContent = "-";
                entradas.appendChild(btn_menos);
    
            // Creo el item precio <p> del carrito
            let precio = document.createElement("p");
            precio.setAttribute("class","precio");
            precio.textContent = items.precio;
            producto_sumado.appendChild(precio);
    
            // Creo el item el tacho basura para eliminar del carrito
            let tacho = document.createElement("img");
            tacho.setAttribute("class", "tacho");
            tacho.setAttribute("src", "./img/garbage.png");
            tacho.setAttribute("tacho", items.id); //para que cada boton de cada producto tenga un ID
            producto_sumado.appendChild(tacho);

    })


}

function abrir_carrito2 () {
    // Vacio el carrito
    itemsCarrito.textContent = '';

        let producto_sumado = document.createElement("div");
        producto_sumado.setAttribute("class", "producto_sumado d-flex align-items-center my-2");
        itemsCarrito.appendChild(producto_sumado);
        
            // Creo el item imagen del carrito
            let img = document.createElement("img");
            img.setAttribute("class", "item_img");
            img.setAttribute("src", items.img);
            producto_sumado.appendChild(img);
    
            // Creo el item parrafo del carrito
            let parrafo = document.createElement("p");
            parrafo.setAttribute("class","descripcion");
            parrafo.textContent = items.nombre;
            producto_sumado.appendChild(parrafo);
    
                let entradas = document.createElement("div");
                entradas.setAttribute("class", "entradas");
                producto_sumado.appendChild(entradas);
    
                // Creo el item input del carrito ara poner manual lo que voy al llevar
                let input = document.createElement("input");
                input.setAttribute("class", "cantidad_num");
                entradas.appendChild(input);
    
                // Creo el item boton + del carrito
                let btn_mas = document.createElement("button");
                btn_mas.setAttribute("class", "mas");
                btn_mas.textContent = "+";
                entradas.appendChild(btn_mas);
    
                // Creo el item boton - del carrito
                let btn_menos = document.createElement("button");
                btn_menos.setAttribute("class", "menos");
                btn_menos.textContent = "-";
                entradas.appendChild(btn_menos);
    
            // Creo el item precio <p> del carrito
            let precio = document.createElement("p");
            precio.setAttribute("class","precio");
            precio.textContent = items.precio;
            producto_sumado.appendChild(precio);
    
            // Creo el item el tacho basura para eliminar del carrito
            let tacho = document.createElement("img");
            tacho.setAttribute("class", "tacho");
            tacho.setAttribute("src", "./img/garbage.png");
            tacho.setAttribute("tacho", items.id); //para que cada boton de cada producto tenga un ID
            producto_sumado.appendChild(tacho);

    


}

function aparecer_todo() {
   document.getElementById("padre").classList.toggle("oculto");
}

function sumar() {
    unidades++;
    document.getElementById("mas").value = unidades;
}

function restar() {
    unidades--;
    document.getElementById("menos").value = unidades;
}

// Todavia no funciona porque lo quiero hacer con position y todo eso. En un futuro
function cerrar_carrito() {
    document.getElementById("padre").classList.toggle("oculto");
}

// Es para crear los productos de mi pagina y que cada uno contenga sus datos
function añadir_al_array(e) {
    array_carrito.push(e.target.getAttribute("marcador"));

    // console.log(array_carrito); ESTE me lo devuelve todo copiado, no me sirve

    // Para que no tenga replicas
    let resultado_array = array_carrito.filter((item, index) => {
       return array_carrito.indexOf(item) === index;
    })

    // console.log(resultado_array);

    abrir_carrito();
}

// Calcular el total a llevar
function calcular_total() {
    // Limpio el precio anterior
    total = 0;

    //recorro el array_carrito
    array_carrito.forEach(item => {
        // Filtro el id con su precio propio de la base de datos
        const miItem = base_de_datos.filter((items_bdd) => {
            return items_bdd.id === parseInt(item);
        });

        total = total + miItem[0].precio;
    });

    // Renderizamos el precio en el HTML
    DOMtotal.textContent = total.toFixed(2);
    
}

// ---------------------------EVENTOS ----------------------------

// Osea para poder clickear todos los añadir carritos y que se sumen. NI siquiera me funciona.
boton_aniadir.forEach(x => {
    x.addEventListener("click", abrir_carrito2);
});

// boton_añadir.addEventListener("click", abrir_carrito);




cerrar.addEventListener("click", cerrar_carrito);

btn_carrito.addEventListener("click", aparecer_todo);

llevar_mas.addEventListener("click", sumar);
llevar_menos.addEventListener("click", restar);

// padre_cervezas.addEventListener("click", ver); //para ver los datos que escribio js, boludeces



// ----------------------------LOGICA ---------------------------------
productos_pagina();
