// Imagen - Declaración de variables

const inputURL = document.getElementById("input-url");
const imagenDelMeme = document.querySelector("img");
const contenedorImgMeme = document.getElementById("contenedor-img-meme");
const memeContainer = document.getElementById("meme-container");

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

const cierrePanelImagen = document.getElementById("cierre-panel-imagen");
const cierrePanelTexto = document.getElementById("cierre-panel-texto");


const fuenteSelect = document.getElementById('fuente-select');

const tamanioFuente = document.getElementById('tamanio-fuente');



// URL de la imagen asociada a la sección del meme
inputURL.onkeyup = (event) => {
    
    event.preventDefault();

    const inputUrlValue = inputURL.value;
    imagenDelMeme.src=inputUrlValue;

}

// ------- HACER FUNCIONAR FILTROS --------
const divMemeImg = document.querySelector(".divMeme")
const brightnessInput = document.getElementById('brightness')
const opacityInput = document.getElementById('opacity')
const contrastInput = document.getElementById('contrast')
const blurInput = document.getElementById('blur')
const grayScaleInput = document.getElementById('grayScale')
const sepiaInput = document.getElementById('sepia')
const hueRotationInput = document.getElementById("hue")
const saturateInput = document.getElementById("saturate")
const invertInput = document.getElementById("invert")

const hacerFuncionarFiltros = () => {
   divMemeImg.style.filter = `brightness(${brightnessInput.value}) 
   opacity(${opacityInput.value})
   contrast(${contrastInput.value})
   blur(${blurInput.value}px)
   grayScale(${grayScaleInput.value}%)
   sepia(${sepiaInput.value})
   hue-rotate(${hueRotationInput.value}deg)
   saturate(${saturateInput.value}%)
   invert(${invertInput.value})
   `;
}

brightnessInput.addEventListener('change', hacerFuncionarFiltros)
opacityInput.addEventListener('change', hacerFuncionarFiltros)
contrastInput.addEventListener('change', hacerFuncionarFiltros)
blurInput.addEventListener('change', hacerFuncionarFiltros)
grayScaleInput.addEventListener('change', hacerFuncionarFiltros)
sepiaInput.addEventListener('change', hacerFuncionarFiltros)
hueRotationInput.addEventListener('change', hacerFuncionarFiltros)
saturateInput.addEventListener('change', hacerFuncionarFiltros)
invertInput.addEventListener('change', hacerFuncionarFiltros)

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
});

// Botoncito de cierre de los paneles

cierrePanelImagen.addEventListener('click', () => {
    // console.log('cierra')
    panelImagen.classList.add('no-mostrar-panel');
});

cierrePanelTexto.addEventListener ('click', () => {

    panelTexto.classList.add('no-mostrar-panel');
});

// Seleccionar tipo de fuente

fuenteSelect.addEventListener('change', () => {

    const fontValue = fuenteSelect.value;
    textoInferiorMeme.style.fontFamily = `${fontValue}`;
    textoSuperiorMeme.style.fontFamily = `${fontValue}`;
});

// Tamaño de la fuente

tamanioFuente.addEventListener('input' , () => {

    const fontSizeValue = tamanioFuente.value;
    textoInferiorMeme.style.fontSize = `${fontSizeValue}px`;
    textoSuperiorMeme.style.fontSize = `${fontSizeValue}px`;
});

// Modo oscuro

const modoOscuro = document.querySelector(".modo-oscuro")
const modoClaro = document.querySelector(".modo-claro")
console.log(modoClaro)
console.log(modoOscuro)

const botonModos = document.getElementById("botonClaroNoMostrar")

botonModos.addEventListener("click", () => {modoOscuro.classList.toggle("modo-claro");
modoOscuro.classList.toggle("modo-oscuro");

if(botonModos.textContent == "Modo Claro"){
  botonModos.textContent = "Modo Oscuro"
}
else{
    botonModos.textContent = "Modo Claro"
}
})

// Botoncito de descarga meme 

const botonDescargar = document.getElementById("boton-descargar");

botonDescargar.onclick = () => {
domtoimage.toBlob(document.getElementById('meme-container'))
    .then(function (blob) {
        window.saveAs(blob, 'meme.png');
    });
}  
