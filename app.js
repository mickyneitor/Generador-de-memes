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

const colorLetra = document.getElementById('color-letra');
const fondoLetra = document.getElementById('fondo-letra');
const fondoTransparente = document.getElementById('fondo-transparente');

const sinContorno = document.getElementById('sin-contorno');
const contornoClaro = document.getElementById('contorno-claro');
const contornoOscuro = document.getElementById('contorno-oscuro');

const espaciadoEnLetra = document.getElementById('espaciado-en-letra');

const interlineadoValor = document.getElementById('interlineado-valor');

// URL de la imagen asociada a la sección del meme
inputURL.onkeyup = (event) => {
    
    event.preventDefault();

    const inputUrlValue = inputURL.value;
    imagenDelMeme.src=inputUrlValue;

}

// ---- FONDO-----
const inputColor = document.getElementById("color-fondo")
const estiloDeFondo = document.getElementById("select-background")
const imagenMeme = document.getElementById("meme-img")


inputColor.oninput = () => {
    //inputColor.value.innerHTML = inputColor
    imagenMeme.style.backgroundColor = inputColor.value
}

estiloDeFondo.onchange = () => {
    imagenMeme.style.backgroundBlendMode = estiloDeFondo.value
       
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
   contrast(${contrastInput.value}%)
   blur(${blurInput.value}px)
   grayscale(${grayScaleInput.value}%)
   sepia(${sepiaInput.value}%)
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

// Restablecer filtros
const restablecerFiltros = document.getElementById("limpiar-filtros");

restablecerFiltros.addEventListener("click", () =>{
    divMemeImg.style.filter = brightnessInput.value = "1";
                              opacityInput.value = "1";
                              contrastInput.value = "100";
                              blurInput.value = "1";
                              grayScaleInput.value = "0";
                              sepiaInput.value = "0";
                              hueRotationInput.value = "0";
                              saturateInput.value = "100";
                              invertInput.value = "0";
                              hacerFuncionarFiltros();  
});

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


//Botones de alineacion de texto 
const textoIzquierda = document.getElementById("texto-izquierda")
const textoCentrado = document.getElementById("texto-centrado")
const textoDerecha = document.getElementById("texto-derecha")

textoIzquierda.addEventListener('click', () => {
    //textoSuperiorMeme y textoInferiorMeme estan declarados en la línea 10 y 11
    textoSuperiorMeme.style.justifyContent = "flex-start"; 
    console.log(textoIzquierda)
    textoInferiorMeme.style.justifyContent = "flex-start";
});

textoCentrado.addEventListener('click', () => {
    textoSuperiorMeme.style.justifyContent = "center";
    textoInferiorMeme.style.justifyContent = "center";
});

textoDerecha.addEventListener('click', () => {
    textoSuperiorMeme.style.justifyContent = "flex-end";
    textoInferiorMeme.style.justifyContent = "flex-end";
})

//Color de letra

colorLetra.addEventListener('input', ()=>{
    const valorColor = colorLetra.value;
    textoSuperiorMeme.style.color = valorColor;
    textoInferiorMeme.style.color = valorColor;
});

//Color del fondo del texto
fondoLetra.addEventListener('input', ()=>{
    const colorValor = fondoLetra.value;
    textoSuperiorMeme.style.backgroundColor = colorValor;
    textoInferiorMeme.style.backgroundColor = colorValor;
});

//Fondo transparente
fondoTransparente.addEventListener('change', () => {
    if(fondoTransparente.checked){
        textoSuperiorMeme.style.backgroundColor = 'transparent';
        textoInferiorMeme.style.backgroundColor = 'transparent';
    }else{
        textoSuperiorMeme.style.backgroundColor = `${fondoLetra.value}`;
        textoInferiorMeme.style.backgroundColor = `${fondoLetra.value}`;
    }

});

//Contorno de la letra
sinContorno.addEventListener('click', ()=>{
    textoSuperiorMeme.style.textShadow = 'none';
    textoInferiorMeme.style.textShadow = 'none';
});

contornoClaro.addEventListener('click', ()=>{
    textoSuperiorMeme.style.textShadow = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
    textoInferiorMeme.style.textShadow = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
});

contornoOscuro.addEventListener('click', ()=>{
    textoSuperiorMeme.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
    textoInferiorMeme.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
});

//Espaciado

espaciadoEnLetra.addEventListener('change', () => {
    const espaciado = espaciadoEnLetra.value;
    textoSuperiorMeme.style.padding = `${espaciado}px 50px`;
    textoInferiorMeme.style.padding = `${espaciado}px 50px`;
});

//Interlineado 

interlineadoValor.addEventListener("change", () => {
    textoSuperiorMeme.style.lineHeight = `${interlineadoValor[interlineadoValor.selectedIndex].value}`;
    textoInferiorMeme.style.lineHeight = `${interlineadoValor[interlineadoValor.selectedIndex].value}`;
})