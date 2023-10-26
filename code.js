
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroAleatorio = gerarNumeroAleatorio(1, 3);

let modo;

if (numeroAleatorio == 1) {
    modo = 'snow-mode';
} else if (numeroAleatorio == 2) {
    modo = 'sand-mode';
} else if (numeroAleatorio == 3) {
    modo = 'cyber-mode';
}

console.log(modo);

let tag = document.getElementById('html')

tag.classList.add(modo)

console.log(tag)