// Imagen - Declaración de variables

const inputURL = document.getElementById("input-url");
const imagenDelMeme = document.querySelector("img");
const contenedorImgMeme = document.getElementById("contenedor-img-meme");

const textoSuperiorTextarea = document.getElementById("texto-superior-textarea");
const textoInferiorTextarea = document.getElementById("texto-inferior-textarea");
const textoSuperiorMeme = document.getElementById("texto-sup-meme");
const textoInferiorMeme = document.getElementById("texto-inf-meme");

const sinTextoSuperior = document.getElementById("sin-texto-superior");
const sinTextoInferior = document.getElementById("sin-texto-inferior");

const botonImagen = document.querySelector('#boton-imagen');
const botonTexto = document.querySelector('#boton-texto');
const panelImagen = document.getElementById('panel-imagen');
const panelTexto = document.getElementById('panel-texto');

// URL de la imagen asociada a la sección del meme
inputURL.onkeyup = (event) => {
    
    event.preventDefault();

    const inputUrlValue = inputURL.value;
    imagenDelMeme.src=inputUrlValue;

}

// Escribir texto en la parte superior del recuadro del meme

textoSuperiorTextarea.addEventListener('keyup' , () => {

    const valorTextareaSup = textoSuperiorTextarea.value;
    textoSuperiorMeme.innerText = valorTextareaSup;
});

// Escribir texto en la parte inferior del recuadro del meme

textoInferiorTextarea.addEventListener('keyup' , () => {

    const valorTextareaInf = textoInferiorTextarea.value;
    textoInferiorMeme.innerText = valorTextareaInf;
});

// Sin texto Superior

sinTextoSuperior.onchange = () => {

    if(sinTextoSuperior.checked){

        textoSuperiorMeme.classList.add('no-mostrar-texto');
    }
    else{
        textoSuperiorMeme.classList.remove('no-mostrar-texto');
    }
};

// Sin texto Inferior

sinTextoInferior.onchange = () => {

    if(sinTextoInferior.checked){

        textoInferiorMeme.classList.add('no-mostrar-texto');
    }
    else{
        textoInferiorMeme.classList.remove('no-mostrar-texto');
    }
};

// Funciones para que al hacer click en algún botón del header, me abra el aside correspondiente

botonImagen.onclick = () => {

    panelImagen.classList.remove('no-mostrar-panel');
    panelTexto.classList.add('no-mostrar-panel');
   
};

botonTexto.onclick = () => {

    panelImagen.classList.add('no-mostrar-panel');
    panelTexto.classList.remove('no-mostrar-panel');

};

// Función que me sirve para fijar el panel de imagen cuando se recarga la página

window.addEventListener('load' , () => {

    if(window.innerWidth > 480) {

        panelImagen.classList.remove('no-mostrar-panel');
        panelTexto.classList.add('no-mostrar-panel');
    }
})