const imagen = document.getElementById("imagen");
const btnAumentar = document.getElementById("btnAumentar");
const btnNormal = document.getElementById("btnNormal");

let escala = 1; // tamaño inicial

// Aumenta progresivamente
btnAumentar.addEventListener("click", () => {
    escala += 0.2; // aumenta 20% por clic
    imagen.style.transform = `scale(${escala})`;
});

// Vuelve al tamaño normal
btnNormal.addEventListener("click", () => {
    escala = 1;
    imagen.style.transform = "scale(1)";
});

