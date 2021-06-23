console.log('Hola Mundo ya sabía programar en JavaScript');
const miTitulo = document.querySelector('h1');
miTitulo.textContent = 'Desarrollador Front End';
document.querySelector('.click-me').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}
let miHTML = document.querySelector('.click-me2');
miHTML.onclick = function(){
    alert('La alerta con variable');

};

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === './imagenes/MSkxfaPC_400x400.jpg') {
      miImage.setAttribute('src','./imagenes/48.jpg');
    } else {
      miImage.setAttribute('src', './imagenes/MSkxfaPC_400x400.jpg');
    }
}

let miBoton = document.querySelector('.cambiar-usuario');
let miUsuario = document.querySelector('.nombre-usuario');
// Este código no está optimizado

let estableceUsuario = function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    if(!miNombre) {
        alert('Ingrese un nombre de usuario');
        estableceNombreUsuario();
    }else{
        miUsuario.textContent = 'Mi usuario es ' + miNombre;
    }
}
miBoton.onclick = estableceUsuario;


if (localStorage.getItem('nombre')) {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miUsuario.textContent = 'Mi usuario es ' + nombreAlmacenado;
}
