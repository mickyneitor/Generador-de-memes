// Imagen - Declaración de variables

const inputURL = document.getElementById("input-url");
const imagenDelMeme = document.querySelector("img");
const contenedorImgMeme = document.getElementById("contenedor-img-meme");
// URL de la imagen asociada a la sección del meme
inputURL.onkeyup = (event) => {
    
    event.preventDefault();

    const inputUrlValue = inputURL.value;
    imagenDelMeme.src=inputUrlValue;

    // imagenDelMeme.style.width = "100%";
    // imagenDelMeme.style.height = "100%";
    

}