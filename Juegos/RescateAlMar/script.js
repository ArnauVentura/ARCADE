// Variables y constantes globales
const imagen = document.getElementById('red'); // La red del jugador
const contenedorObjetos = document.getElementById('objetos'); // Contenedor donde caen los objetos
let posicionXPersonaje = 8; // Posición inicial del jugador
const velocidad = 27; // Velocidad de movimiento
let moviendoDerecha = false;
let moviendoIzquierda = false;
let puntuacionJugador = 0; // Puntuación inicial
let tiempoRestante = 60; // Tiempo restante en segundos
let vidasRestantes = 3; // Número inicial de vidas
let intervaloCreacionObjetos; // Variable para manejar el intervalo de creación de objetos
let velocidadCaida = 3; // Velocidad inicial de caída
let intervaloVelocidad; // Intervalo para aumentar la velocidad de caída

// Tipos de objetos que pueden caer
const tiposObjetos = [
    { nombre: 'neumatico', puntuacion: 5, imagen: 'img/neumatico.png', ancho: 120, alto: 120 },
    { nombre: 'bolsa', puntuacion: 10, imagen: 'img/bolsa.png', ancho: 85, alto: 85 },
    { nombre: 'botella', puntuacion: 15, imagen: 'img/botella.png', ancho: 75, alto: 75 },
    { nombre: 'lata', puntuacion: 20, imagen: 'img/lata.png', ancho: 60, alto: 60 }
];

// Crear y añadir los elementos dinámicos de puntuación y tiempo
const puntuacionElemento = document.createElement('p');
puntuacionElemento.id = 'puntos';
puntuacionElemento.textContent = 'Puntos: 0';
document.querySelector('.puntuacion').appendChild(puntuacionElemento);

const tiempoElemento = document.createElement('p');
tiempoElemento.textContent = '00:01:00';
document.getElementById('tiempo').appendChild(tiempoElemento);

const contenedorCorazones = document.getElementById('corazones');

// Función para inicializar vidas
function inicializarVidas() {
    contenedorCorazones.innerHTML = '';
    for (let i = 0; i < vidasRestantes; i++) {
        const corazon = document.createElement('img');
        corazon.src = 'img/corazonBlanco.png';
        corazon.alt = 'Corazón Blanco';
        corazon.classList.add('corazon');
        contenedorCorazones.appendChild(corazon);
    }
}

// Función para actualizar vidas
function actualizarVidas() {
    if (vidasRestantes > 0) {
        vidasRestantes--;
        const corazones = contenedorCorazones.querySelectorAll('.corazon');
        if (corazones.length > 0) {
            corazones[corazones.length - 1].remove();
        }
        if (vidasRestantes === 0) {
            finDelJuego();
        }
    }
}

// Inicializar las vidas
inicializarVidas();

// Función para actualizar la posición de la red
function actualizarPosicion() {
    if (moviendoDerecha) {
        posicionXPersonaje += velocidad;
    }
    if (moviendoIzquierda) {
        posicionXPersonaje -= velocidad;
    }

    if (posicionXPersonaje < 0) {
        posicionXPersonaje = 0;
    } else if (posicionXPersonaje + 150 > window.innerWidth) {
        posicionXPersonaje = window.innerWidth - 150;
    }

    imagen.style.left = posicionXPersonaje + 'px';
    requestAnimationFrame(actualizarPosicion);
}

// Escuchar eventos de teclado para mover la red
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        moviendoDerecha = true;
    } else if (event.key === 'ArrowLeft') {
        moviendoIzquierda = true;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowRight') {
        moviendoDerecha = false;
    } else if (event.key === 'ArrowLeft') {
        moviendoIzquierda = false;
    }
});

// Función para crear un objeto
function crearObjeto() {
    const objeto = document.createElement('div');
    objeto.classList.add('objeto');

    const tipoSeleccionado = tiposObjetos[Math.floor(Math.random() * tiposObjetos.length)];
    objeto.dataset.puntuacion = tipoSeleccionado.puntuacion;

    const imagenObjeto = document.createElement('img');
    imagenObjeto.src = tipoSeleccionado.imagen;
    imagenObjeto.alt = tipoSeleccionado.nombre;
    imagenObjeto.style.width = `${tipoSeleccionado.ancho}px`;
    imagenObjeto.style.height = `${tipoSeleccionado.alto}px`;

    objeto.appendChild(imagenObjeto);

    const posX = Math.random() * (window.innerWidth - tipoSeleccionado.ancho);
    objeto.style.left = `${posX}px`;
    objeto.style.top = '200px';

    contenedorObjetos.appendChild(objeto);
    caer(objeto);
}

// Función para hacer caer el objeto
function caer(objeto) {
    let posY = 200;

    function animarCaida() {
        posY += velocidadCaida;
        objeto.style.top = `${posY}px`;

        if (detectaColision(imagen, objeto)) {
            puntuacionJugador += parseInt(objeto.dataset.puntuacion);
            objeto.remove();
            puntuacionElemento.textContent = `Puntos: ${puntuacionJugador}`;
            return;
        }

        if (posY > window.innerHeight) {
            actualizarVidas();
            objeto.remove();
            return;
        }

        requestAnimationFrame(animarCaida);
    }

    requestAnimationFrame(animarCaida);
}

// Función para detectar colisión
function detectaColision(rect, obj) {
    const rectBounds = rect.getBoundingClientRect(); // Límites de la red
    const objBounds = obj.getBoundingClientRect();  // Límites del objeto

    // Verificar colisión solo si el objeto toca la parte superior de la red
    const colisionaPorArriba =
        objBounds.bottom >= rectBounds.top &&        // El borde inferior del objeto toca o pasa el borde superior de la red
        objBounds.bottom <= rectBounds.top + 10;    // Rango para evitar colisiones incorrectas

    const colisionaHorizontalmente =
        objBounds.right > rectBounds.left &&        // El lado derecho del objeto está dentro de la red
        objBounds.left < rectBounds.right;          // El lado izquierdo del objeto está dentro de la red

    return colisionaPorArriba && colisionaHorizontalmente;
}

// Función para actualizar el tiempo
function actualizarTiempo() {
    if (tiempoRestante > 0) {
        tiempoRestante--;
        tiempoElemento.textContent = `00:00:${String(tiempoRestante).padStart(2, '0')}`;
    } else {
        finDelJuego();
    }
}
// Función para finalizar el juego
function finDelJuego() {
    alert(`¡El juego ha terminado! Puntuación final: ${puntuacionJugador}`);
    clearInterval(intervaloCreacionObjetos);
    clearInterval(intervaloVelocidad);
    document.querySelectorAll('.objeto').forEach(obj => obj.remove());

    // Aquí agregamos el envío de la puntuación al servidor
    guardarPuntuacion();
}

// Inicializar la posición de la red
actualizarPosicion();

// Iniciar el temporizador y los objetos
setInterval(actualizarTiempo, 1000);
intervaloCreacionObjetos = setInterval(crearObjeto, 1500);

// Incrementar la velocidad de caída cada 10 segundos
intervaloVelocidad = setInterval(() => {
    velocidadCaida += 1; // Incrementar más agresivamente la velocidad de caída
}, 10000);

function guardarPuntuacion() {
    // Obtener el ID del usuario y el juego desde los datos del DOM
    const userId = document.body.getAttribute("data-user-id");
    const juegoId = document.body.getAttribute("data-game-id");

    // Enviar la puntuación al servidor (puedes obtener la puntuación de 'puntuacionJugador' o del tiempo)
    const puntuacion = puntuacionJugador;

    fetch("/api/ranking/insertRanking.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            usuario_idUsuario: userId,
            juegos_idJuego: juegoId,
            puntuacion: puntuacion, // Aquí estamos enviando la puntuación
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            console.log("Puntuación guardada con éxito");
        } else {
            console.error("Error al guardar la puntuación:", data.message);
        }
    })
    .catch((error) => {
        console.error("Error al guardar la puntuación:", error);
    });
}

function mostrarModalVictoria(tiempoFormateado) {
    const mensajeTiempo = document.getElementById("mensajeTiempo");
    mensajeTiempo.textContent = `Tu tiempo: ${tiempoFormateado}`;

    const modal = document.getElementById("ventanaVictoria");
    modal.style.display = "flex";
    
    const pepe =  document.getElementById("btnReiniciar");
    console.log(pepe);

    document.getElementById("btnReiniciar").addEventListener("click", () => {
        console.log("cliiiiiiiiiick");
        location.reload();
    });

    document.getElementById("btnRanking").addEventListener("click", () => {
        location.assign("../../html/ranking.php"); 
    });

    document.getElementById("btnFuentes").addEventListener("click", () => {
        location.assign("../../html/fuentes.php");
    });
}
