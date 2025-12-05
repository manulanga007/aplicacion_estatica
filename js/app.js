const imagen = document.getElementById("imagen");
const btnAumentar = document.getElementById("btnAgrandar");
const btnNormal = document.getElementById("btnNormal");


let escala = 1;

function aumentar() {
    escala += 0.2;
    actualizarEscala();
}

function normal() {
    escala = 1;
    actualizarEscala();
}

function reducir() {
    if (escala > 0.2) {  
        escala -= 0.2;
        actualizarEscala();
    }
}

function actualizarEscala() {
    const imagen = document.getElementById("imagen");
    imagen.style.transform = `scale(${escala})`;
}

