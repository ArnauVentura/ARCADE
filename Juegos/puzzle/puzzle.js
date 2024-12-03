let contadorClicks = 0;
let tiempoInicio;
let intervaloCronometro;

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

const indiceAleatorio = Math.floor(Math.random() * carpetasImagenes.length);
const carpetaSeleccionada = carpetasImagenes[indiceAleatorio];
const imagenPistaSeleccionada = imagenesPistas[indiceAleatorio];

const ids = [
    ["id1", "id2", "id3"],
    ["id4", "id5", "id6"],
    ["id7", "id8", "id9"]
];

// Función para asignar imágenes según el valor
function obtenerImagen(valor) {
    return valor === 0 ? "" : `${carpetaSeleccionada}${valor}.jpg`;
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

// Función para iniciar el cronómetro
function iniciarCronometro() {
    tiempoInicio = Date.now();
    intervaloCronometro = setInterval(actualizarCronometro, 1000); //cada segundo
}

// Función para actualizar el cronómetro en el HTML
function actualizarCronometro() {
    const tiempoActual = Date.now();
    const segundosTranscurridos = Math.floor((tiempoActual - tiempoInicio) / 1000);

    // Calcula minutos y segundos
    const minutos = Math.floor(segundosTranscurridos / 60);
    const segundos = segundosTranscurridos % 60;
    const tiempoFormateado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

    // Actualiza el HTML
    const elementoTiempo = document.querySelector(".tiempo");
    if (elementoTiempo) {
        elementoTiempo.textContent = `Tiempo: ${tiempoFormateado}`;
    }
}

// Función para detener el cronómetro
function detenerCronometro() {
    clearInterval(intervaloCronometro); // Detenemos el intervalo
}

// Función para actualizar el contador en el HTML
function actualizarContadorClicks() {
    const elementoClicks = document.querySelector(".clicks");
    if (elementoClicks) {
        elementoClicks.textContent = "Clicks: " + contadorClicks;
    }
}

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
        pistaPopup.style.display = "block";
    });

    // Ocultar el popup al salir el mouse
    pista.addEventListener("mouseleave", () => {
        pistaPopup.style.display = "none";
    });
    
};

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

        if (resuelto()){
            detenerCronometro();
            const tiempoFinal = Math.floor((Date.now() - tiempoInicio) / 1000);
        }
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

// Función para mostrar la ventana de victoria
function mostrarModalVictoria(tiempoFormateado) {
    const mensajeTiempo = document.getElementById("mensajeTiempo");
    mensajeTiempo.textContent = `Tu tiempo: ${tiempoFormateado}`;

    const modal = document.getElementById("ventanaVictoria");
    modal.style.display = "flex";
    
    document.getElementById("btnReiniciar").addEventListener("click", () => {
        location.reload();
    });

    document.getElementById("btnRanking").addEventListener("click", () => {
        location.assign("../../html/ranking.php"); 
    });

    document.getElementById("btnFuentes").addEventListener("click", () => {
        location.assign("../../html/fuentes.php");
    });
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
        detenerCronometro(); // Detenemos el cronómetro
        const tiempoFinal = Math.floor((Date.now() - tiempoInicio) / 1000);

        // Calcula minutos y segundos para el formato mm:ss
        const minutos = Math.floor(tiempoFinal / 60);
        const segundos = tiempoFinal % 60;
        const tiempoFormateado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

        // Mostrar ventana modal
        mostrarModalVictoria(tiempoFormateado);

        return true; // Puzzle resuelto
    } else {
        console.log("Solo tienes " + totalAciertos + " aciertos");
        return false; // Puzzle no resuelto
    }
}



// Ejecuta el juego al cargar la página cuando todos los recursos están cargados
window.onload = function () {
    matriz = inicializarMatrizAleatoria();
    cargar();
    actualizarVista();
    actualizarContadorClicks();
    iniciarCronometro();
    pistaBombilla();

    // Cambiar la imagen de la pista
    document.getElementById("pistaPopup").innerHTML = `<img src="${imagenPistaSeleccionada}" alt="Pista del Puzzle">`;
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
