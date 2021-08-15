// Imagen - Declaración de variables

const inputURL = document.getElementById("input-url");
const imagenDelMeme = document.querySelector("img");
const contenedorImgMeme = document.getElementById("contenedor-img-meme");

const textoSuperiorTextarea = document.getElementById("texto-superior-textarea");
const textoInferiorTextarea = document.getElementById("texto-inferior-textarea");
const textoSuperiorMeme = document.getElementById("texto-sup-meme");
const textoInferiorMeme = document.getElementById("texto-inf-meme");

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