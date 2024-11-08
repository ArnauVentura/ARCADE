const imagen = document.getElementById('miRectangulo');
let posicionXPersonaje = 8; // Posición inicial en X del personaje
const velocidad = 15; // Velocidad de movimiento en píxeles por frame

let moviendoDerecha = false;
let moviendoIzquierda = false;
let puntuacionJugador = 0; // Puntuación inicial
let tiempoRestante = 60; // Tiempo total en segundos

// Obtener el elemento de puntuación y el tiempo
const puntuacionElemento = document.getElementById('puntos');
const tiempoElemento = document.getElementById('time').querySelector('p'); // Cambia a tu estructura HTML

const tiposObjetos = [
    { nombre: 'neumatico', puntuacion: 5, color: 'red' },
    { nombre: 'bolsa', puntuacion: 10, color: 'blue' },
    { nombre: 'botella', puntuacion: 15, color: 'green' },
    { nombre: 'lata', puntuacion: 20, color: 'yellow' }
];

// Función para actualizar la posición de la imagen
function actualizarPosicion() {
    if (moviendoDerecha) {
        posicionXPersonaje += velocidad; // Mover a la derecha
    }
    if (moviendoIzquierda) {
        posicionXPersonaje -= velocidad; // Mover a la izquierda
    }

    // Limitar el movimiento para que no salga de la pantalla
    if (posicionXPersonaje < 0) {
        posicionXPersonaje = 0;
    } else if (posicionXPersonaje + 100 > window.innerWidth) { // 100 es el ancho del rectángulo
        posicionXPersonaje = window.innerWidth - 100;
    }

    // Aplicar la nueva posición
    imagen.style.left = posicionXPersonaje + 'px';

    // Volver a llamar a esta función en el siguiente frame
    requestAnimationFrame(actualizarPosicion);
}

// Escuchar eventos de teclado para iniciar y detener el movimiento
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

// Inicializar la posición de la imagen
actualizarPosicion();

// Función para actualizar el tiempo restante
function actualizarTiempo() {
    if (tiempoRestante > 0) {
        tiempoRestante--; // Reduce el tiempo restante en 1 segundo
        tiempoElemento.textContent = `00:00:${String(tiempoRestante).padStart(2, '0')}`; // Actualiza el texto del tiempo
    } else {
        finDelJuego(); // Llama a la función de fin del juego cuando el tiempo se agota
    }
}

// Función para finalizar el juego
function finDelJuego() {
    alert(`¡El juego ha terminado! Puntuación final: ${puntuacionJugador}`);
    // Detener la creación de nuevos objetos
    clearInterval(intervaloCreacionObjetos);
    // También podrías limpiar todos los objetos que están en el contenedor
    const objetos = document.querySelectorAll('.objeto');
    objetos.forEach(objeto => objeto.remove());
}

// Obtener el contenedor de los objetos
const contenedorObjetos = document.getElementById('objetos');

// Verifica si el contenedor existe antes de proceder
if (contenedorObjetos) {
    let intervaloCreacionObjetos = setInterval(crearObjeto, 1500); // Crear un objeto cada 2 segundos

    // Función para crear un objeto en una posición aleatoria
    function crearObjeto() {
        const objeto = document.createElement('div');
        
        // Seleccionar un tipo de objeto aleatoriamente
        const tipoSeleccionado = tiposObjetos[Math.floor(Math.random() * tiposObjetos.length)];
        
        objeto.classList.add('objeto');
        objeto.style.backgroundColor = tipoSeleccionado.color; // Asigna un color basado en el tipo
        objeto.dataset.puntuacion = tipoSeleccionado.puntuacion; // Guarda la puntuación en un atributo

        // Posición inicial en el ancho de la ventana
        const posX = Math.random() * (window.innerWidth - 40); 
        objeto.style.left = `${posX}px`;
        objeto.style.top = '200px'; // Posición inicial en 200px de altura

        // Añadir el objeto al contenedor
        contenedorObjetos.appendChild(objeto);

        // Iniciar la caída del objeto
        caer(objeto);
    }

    // Función para hacer caer el objeto
    function caer(objeto) {
        let posY = 200; // Empieza desde 200px

        // Animación de caída
        function animarCaida() {
            posY += 3; // Velocidad de caída
            objeto.style.top = `${posY}px`;

            // Verificar si hay colisión
            if (detectaColision(imagen, objeto)) {
                puntuacionJugador += parseInt(objeto.dataset.puntuacion); // Actualiza la puntuación
                objeto.remove(); // Eliminar el objeto si colisiona con el rectángulo
                puntuacionElemento.textContent = `Puntos: ${puntuacionJugador}`; // Actualiza la puntuación en el DOM
                return; // Termina la animación de caída
            }

            // Si el objeto sale de la pantalla, eliminarlo
            if (posY > window.innerHeight) {
                objeto.remove();
            } else {
                requestAnimationFrame(animarCaida);
            }
        }

        // Inicia la animación de caída
        requestAnimationFrame(animarCaida);
    }

    // Función para detectar la colisión entre el rectángulo y el objeto
    function detectaColision(rect, obj) {
        const rectBounds = rect.getBoundingClientRect();
        const objBounds = obj.getBoundingClientRect();

        return !(
            rectBounds.top > objBounds.bottom ||   // Rectángulo está por debajo del objeto
            rectBounds.bottom < objBounds.top ||   // Rectángulo está por encima del objeto
            rectBounds.right < objBounds.left ||   // Rectángulo está a la izquierda del objeto
            rectBounds.left > objBounds.right      // Rectángulo está a la derecha del objeto
        );
    }

    // Iniciar el temporizador
    setInterval(actualizarTiempo, 1000); // Actualiza el tiempo cada segundo
} else {
    console.error('Error: el contenedor de objetos (#objetos) no se encuentra en el DOM');
}
