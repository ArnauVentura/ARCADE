// Array con las carpetas de imágenes
const carpetasImagenes = [
    "../puzzle/img/3x3/set1/",
    "../puzzle/img/3x3/set2/",
    "../puzzle/img/3x3/set3/"
];

const imagenesPistas = [
    "../puzzle/img/pistas/set1_pista.jpg",
    "../puzzle/img/pistas/set2_pista.jpg",
    "../puzzle/img/pistas/set3_pista.jpg"
];

// Elegir un índice random
const indiceAleatorio = Math.floor(Math.random() * carpetasImagenes.length);
// Carpeta seleccionada para las piezas del puzzle
const carpetaSeleccionada = carpetasImagenes[indiceAleatorio];
// Imagen de la pista correspondiente
const imagenPistaSeleccionada = imagenesPistas[indiceAleatorio];

// Función para asignar imágenes según el valor
function obtenerImagen(valor) {
    if (valor === 0) {
        return ""; //para el espacio vacío
    }
    return `${carpetaSeleccionada}${valor}.jpg`;
}

// Cambiar la imagen de la pista
document.getElementById("pistaPopup").innerHTML = `<img src="${imagenPistaSeleccionada}" alt="Pista del Puzzle">`;

// Función para contar inversiones en una configuración
function contarInversiones(numeros) {
    let inversiones = 0;
    for (let i = 0; i < numeros.length; i++) {
        for (let j = i + 1; j < numeros.length; j++) {
            if (numeros[i] > numeros[j] && numeros[i] !== 0 && numeros[j] !== 0) {
                inversiones++;
            }
        }
    }
    return inversiones;
}

// Función para verificar si una configuración es solucionable
function esSolucionable(matriz) {
    const numeros = matriz.flat(); // Convierte la matriz en una lista plana
    const inversions = contarInversiones(numeros);

    if (inversions % 2 === 0) { // Solucionable si las inversiones son pares
        console.log("Es solucionable");
        return true; // Retorna true para indicar que es solucionable
    } else {
        console.log("No es solucionable");
        return false; // Retorna false para indicar que no es solucionable
    }
}

// Inicializa una matriz 3x3 de forma aleatoria con números del 0 al 8.
function inicializarMatrizAleatoria() {
    let matriz;
    do {
        let numeros = Array.from({ length: 9 }, (_, i) => i);
        numeros = numeros.sort(() => Math.random() - 0.5); // Mezcla aleatoriamente
        matriz = [
            [numeros[0], numeros[1], numeros[2]],
            [numeros[3], numeros[4], numeros[5]],
            [numeros[6], numeros[7], numeros[8]]
        ];
    } while (!esSolucionable(matriz)); // Repetir hasta obtener una configuración solucionable

    return matriz;
}

// Matriz bidimensional de las id's del HTML.
var ids = [
    ["id1", "id2", "id3"],
    ["id4", "id5", "id6"],
    ["id7", "id8", "id9"]
];
// Contador global de clics
let contadorClicks = 0;
// Función para actualizar el contador en el HTML
function actualizarContadorClicks() {
    const elementoClicks = document.querySelector(".clicks");
    if (elementoClicks) {
        elementoClicks.textContent = contadorClicks;
    } else {
        console.error("Elemento con clase 'clicks' no encontrado.");
    }
}

// Ejecuta el juego al cargar la página cuando todos los recursos están cargados
window.onload = function () {
    matriz = inicializarMatrizAleatoria();
    cargar();
    actualizarVista();
    actualizarContadorClicks();
    pistaBombilla();
};

//PopUp de la imagen completa de la solución
function pistaBombilla() {
    const pista = document.getElementById("pista");
    const pistaPopup = document.getElementById("pistaPopup");
    
    if (!pista || !pistaPopup) {
        console.error("Elementos 'pista' o 'pistaPopup' no encontrados.");
        return;
    }

    // Mostrar el popup al pasar el mouse
    pista.addEventListener("mouseenter", () => {
        console.log("Dentro");
        pistaPopup.style.display = "block";
    });

    // Ocultar el popup al salir el mouse
    pista.addEventListener("mouseleave", () => {
        console.log("Fuera");
        pistaPopup.style.display = "none";
    });
    
};

// Asocia cada elemento del HTML al evento de clic para mover las celdas
function cargar() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let celda = document.getElementById(ids[i][j]);
            celda.setAttribute("data-fila", i); // Asigna fila como atributo de datos
            celda.setAttribute("data-col", j); // Asigna columna como atributo de datos
            celda.addEventListener("click", intercambiar); // Agrega el evento de clic
        }
    }
}

// Actualiza visualmente cada celda de la cuadrícula con imágenes
function actualizarVista() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let celda = document.getElementById(ids[i][j]);
            let valor = matriz[i][j];

            // Elimina el contenido previo de la celda
            celda.innerHTML = "";

            // Si el valor no es 0, asigna una imagen
            if (valor !== 0) {
                let img = document.createElement("img");
                img.src = obtenerImagen(valor);
                celda.appendChild(img);
            }
        }
    }
}

// Maneja el clic en una celda para intercambiarla con el espacio vacío si es posible
function intercambiar(event) {
    let fila = parseInt(this.getAttribute("data-fila"));
    let col = parseInt(this.getAttribute("data-col"));

    if (checkMover(fila, col)) {
        contadorClicks++;
        actualizarContadorClicks();
        actualizarVista();
        resuelto();
    }
}

// Revisar si se puede mover
function checkMover(fila, col) {
    if (col < 2 && matriz[fila][col + 1] === 0) { // Derecha
        swap(fila, col, fila, col + 1);
        return true;
    } else if (col > 0 && matriz[fila][col - 1] === 0) { // Izquierda
        swap(fila, col, fila, col - 1);
        return true;
    } else if (fila < 2 && matriz[fila + 1][col] === 0) { // Abajo
        swap(fila, col, fila + 1, col);
        return true;
    } else if (fila > 0 && matriz[fila - 1][col] === 0) { // Arriba
        swap(fila, col, fila - 1, col);
        return true;
    }
    return false;
}

// Intercambiar posiciones en la matriz
function swap(fila1, col1, fila2, col2) {
    [matriz[fila1][col1], matriz[fila2][col2]] = [matriz[fila2][col2], matriz[fila1][col1]];
}

// Verificar si el puzzle está resuelto
function resuelto() {
    let valor = 1;
    let totalAciertos = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // 0 en la posición final = correcto
            if (i === 2 && j === 2 && matriz[i][j] === 0) {
                totalAciertos++;
            } else if (matriz[i][j] === valor) {
                totalAciertos++;
            }
            valor++;
        }
    }

    if (totalAciertos === 9) {
        alert("¡Puzzle resuelto! Total clicks: " + contadorClicks);
    } else {
        console.log("Solo tienes " + totalAciertos + " aciertos");
    }
}

