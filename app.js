// Seleccionar los elementos del DOM

const boton = document.querySelector('button');
const texto = document.getElementById('color');

function colorHex() {
    let digitos = '0123456789ABCDEF';
    let simbolo = '#';

    for (let i=0; i<6; i++) {
        let indideAletorio = Math.floor((Math.random() * 16));
        simbolo += digitos[indideAletorio];
    }

    return simbolo;
}

function CambioDeColor() {
    let colorfinal = colorHex();
    color.textContent = colorfinal;
    document.body.style.backgroundColor = colorfinal
}


boton.addEventListener('click', CambioDeColor)