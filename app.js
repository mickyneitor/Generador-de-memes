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
