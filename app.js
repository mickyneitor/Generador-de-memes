
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

