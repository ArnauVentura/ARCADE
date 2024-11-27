// Variables y constantes globales
const imagen = document.getElementById('red'); // La red del jugador
const contenedorObjetos = document.getElementById('objetos'); // Contenedor donde caen los objetos
let posicionXPersonaje = 8; // Posición inicial del jugador
const velocidad = 15; // Velocidad de movimiento
let moviendoDerecha = false;
let moviendoIzquierda = false;
let puntuacionJugador = 0; // Puntuación inicial
let tiempoRestante = 60; // Tiempo restante en segundos
let vidasRestantes = 3; // Número inicial de vidas
let intervaloCreacionObjetos; // Variable para manejar el intervalo de creación de objetos

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
        posY += 3;
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
    const rectBounds = rect.getBoundingClientRect();
    const objBounds = obj.getBoundingClientRect();

    return !(
        rectBounds.top > objBounds.bottom ||
        rectBounds.bottom < objBounds.top ||
        rectBounds.right < objBounds.left ||
        rectBounds.left > objBounds.right
    );
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
    document.querySelectorAll('.objeto').forEach(obj => obj.remove());
}

// Inicializar la posición de la red
actualizarPosicion();

// Iniciar el temporizador y los objetos
setInterval(actualizarTiempo, 1000);
intervaloCreacionObjetos = setInterval(crearObjeto, 1500);