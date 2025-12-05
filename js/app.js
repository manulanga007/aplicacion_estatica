const imagen = document.getElementById("imagen");
const btnAumentar = document.getElementById("btnAgrandar");
const btnNormal = document.getElementById("btnNormal");


let escala = 1;
const incremento = 0.2;
const maxEscala = 3; // por ejemplo, no dejar crecer más de 3x

btnAumentar.addEventListener("click", () => {
    escala = Math.min(escala + incremento, maxEscala);
    imagen.style.transform = `scale(${escala})`;
});


// Vuelve al tamaño normal
btnNormal.addEventListener("click", () => {
    escala = 1;
    imagen.style.transform = "scale(1)";
});

