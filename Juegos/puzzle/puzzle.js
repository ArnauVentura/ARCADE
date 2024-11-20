// Función para asignar imágenes según el valor
function obtenerFuenteImagen(valor) {
    if (valor === 0) {
        return ""; // Retorna vacío para el espacio vacío
    }
    return `../puzzle/img/3x3/${valor}.jpg`; // Ruta a las imágenes (asegúrate de tener imágenes numeradas 1-8)
}

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

// Ejecuta el juego al cargar la página cuando todos los recursos están cargados
window.onload = function () {
    matriz = inicializarMatrizAleatoria();
    cargar();
    actualizarVista();
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
                img.src = obtenerFuenteImagen(valor);
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
        alert("¡Puzzle resuelto!");
    } else {
        console.log("Solo tienes " + totalAciertos + " aciertos");
    }
}
