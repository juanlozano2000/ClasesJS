class Datos {
    constructor(nombre, apellido, email, motivo, otro, id) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.motivo = motivo;
        this.otro = otro;
        this.id = id;
    };
};


// let btn_enviar = $('.btn_enviar');
let array_datos = [];
let abuelo_datos = document.querySelector('#abuelo_datos');

// Funcion tomar valores, guardarlos en un array y meterlos en el storage
$('.btn_enviar').click(function (e) { 
    e.preventDefault();
    
    // tomo los valores
    let nombre = $('.nombreInput').val();
    let apellido = $('.apellidoInput').val();
    let email = $('.emailInput').val();
    let motivo = Number ($('.motivoInput').val());
    let otro = $('.otroInput').val();

    // Dependiendo de la seleccion de motivo quiero que me pinte
    switch (motivo) {
        case 1:
            motivo = 'Economica'
            break;
        case 2:
            motivo = 'Logistica'
            break;
        case 3:
            motivo = 'Otra'
            break;

        case NaN:
            motivo = 'No se ingreso motivo'
            break;
    
        default:
            'No se ingreso motivo'
            break;
    }

    // Le digo que me traiga lo que tenga para dsp poder comprararlo con el if
    let storage = JSON.parse(localStorage.getItem('datos'));

    if (localStorage.getItem('datos') != null) {
        // Si el storage no esta vacio le hago id+1
        let id = storage.length;
        // Creo el nuevo objeto
        let datos = new Datos(nombre,apellido,email,motivo,otro, id);
        // Le pusheo este nuevo objeto a storage
        storage.push(datos);
        localStorage.setItem("datos", JSON.stringify(storage));
    } else {
        localStorage.clear();
        let id = 0;
        let datos = new Datos(nombre,apellido,email,motivo,otro,id);
        array_datos.push(datos);
        localStorage.setItem('datos', JSON.stringify(array_datos));
    }
});

// Funcion pintar, osea traer del local y pintarlo en el html
$('.btn_enviar').click(function () { 

    let traer_storage = JSON.parse(localStorage.getItem('datos'));

    if (traer_storage != null) {      
        traer_storage.forEach(item => {            
            
            $("#abuelo_datos").append(
        `
            <div class="row m-3 padre_datos">
            <div class="col-md-2 nombre">${item.nombre}</div>
            <div class="col-md-2 apellido">${item.apellido}</div>
            <div class="col-md-2 email">${item.email}</div>
            <div class="col-md-2 motivo">${item.motivo}</div>
            <div class="col-md-2 otro">${item.otro}</div>
            <div class="col-md-2">
                <button class="btn btn-danger eliminar" onclick="borrar_item(${item.id})">eliminar</button>
            </div>
        </div>
            `
        );
        });
            
    } else {
        console.log('array sin nada');
    }
});


// Funcion para eliminar el item. ACA ESTA TODO BIEN
function borrar_item(id) {
    let borrar = JSON.parse(localStorage.getItem('datos'));
    let actualizar = borrar.filter(item => item.id != id); //filtrame todo lo que sea distinto id, entonces me lo borra
    localStorage.setItem('datos', JSON.stringify(actualizar));
    // location.reload();
};



