const body = document.querySelector('body');
const btn_modo_oscuro = document.getElementById('modo_oscuro'); //acceso a boton modo oscuro
const btn_modo_light = document.getElementById('modo_light'); //acceso a boton modo oscuro
btn_modo_oscuro.addEventListener('click', cambiar_a_oscuro);
btn_modo_light.addEventListener('click', cambiar_a_light);

function cambiar_a_oscuro() {
    body.classList.add('oscuro');
    body.classList.remove('light');
    localStorage.setItem('fondo', 'oscuro');
}
function cambiar_a_light() {
    body.classList.remove('oscuro');
    body.classList.add('light');
    localStorage.setItem('fondo', 'light');
}

if (localStorage.getItem('fondo') == null) {
    body.className= 'light';
} else {
    body.className = localStorage.getItem('fondo');
};