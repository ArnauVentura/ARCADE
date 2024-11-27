const imagen = document.getElementById('red');
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
    { nombre: 'neumatico', puntuacion: 5, imagen: 'img/neumatico.png', ancho: 120, alto: 120 },
    { nombre: 'bolsa', puntuacion: 10, imagen: 'img/bolsa.png', ancho: 85, alto: 85 },
    { nombre: 'botella', puntuacion: 15, imagen: 'img/botella.png', ancho: 75, alto: 75 },
    { nombre: 'lata', puntuacion: 20, imagen: 'img/lata.png', ancho: 60, alto: 60 }
];
let vidasRestantes = 3; // Número inicial de vidas
const contenedorCorazones = document.getElementById('corazones'); // Contenedor para las imágenes
const vidasElemento = document.querySelector('.vidas'); // Contenedor de los corazones

function inicializarVidas() {
    contenedorCorazones.innerHTML = ''; // Limpia cualquier imagen existente
    for (let i = 0; i < vidasRestantes; i++) {
        const corazon = document.createElement('img');
        corazon.src = 'img/corazonBlanco.png'; // Ruta de la imagen del corazón
        corazon.alt = 'Corazón Blanco';
        corazon.classList.add('corazon'); // Agregamos una clase para estilos
        contenedorCorazones.appendChild(corazon);
    }
}
inicializarVidas();
function actualizarVidas() {
    if (vidasRestantes > 0) {
        vidasRestantes--;

        // Eliminar el último corazón del DOM
        const corazones = contenedorCorazones.querySelectorAll('.corazon');
        if (corazones.length > 0) {
            corazones[corazones.length - 1].remove();
        }

        // Verificar si se acabaron las vidas
        if (vidasRestantes === 0) {
            finDelJuego();
        }
    }
}

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
    } else if (posicionXPersonaje + 150 > window.innerWidth) { // 150 es el ancho de la red
        posicionXPersonaje = window.innerWidth - 150;
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
    clearInterval(intervaloCreacionObjetos); // Detener la creación de nuevos objetos

    // Detener cualquier animación activa
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
        objeto.classList.add('objeto');
    
        // Seleccionar un tipo de objeto aleatoriamente
        const tipoSeleccionado = tiposObjetos[Math.floor(Math.random() * tiposObjetos.length)];
        objeto.dataset.puntuacion = tipoSeleccionado.puntuacion; // Guarda la puntuación en un atributo
    
        // Crear la imagen del objeto
        const imagen = document.createElement('img');
        imagen.src = tipoSeleccionado.imagen; // Ruta de la imagen
        imagen.alt = tipoSeleccionado.nombre; // Texto alternativo
        imagen.style.width = `${tipoSeleccionado.ancho}px`; // Asigna el ancho del tipo
        imagen.style.height = `${tipoSeleccionado.alto}px`; // Asigna el alto del tipo
    
        // Añadir la imagen al objeto
        objeto.appendChild(imagen);
    
        // Posición inicial en el ancho de la ventana
        const posX = Math.random() * (window.innerWidth - tipoSeleccionado.ancho); // Ajustar posición para el ancho del objeto
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
    
        function animarCaida() {
            posY += 3; // Velocidad de caída
            objeto.style.top = `${posY}px`;
    
            // Verificar si hay colisión con el rectángulo
            if (detectaColision(imagen, objeto)) {
                puntuacionJugador += parseInt(objeto.dataset.puntuacion); // Actualiza la puntuación
                objeto.remove(); // Eliminar el objeto
                puntuacionElemento.textContent = `Puntos: ${puntuacionJugador}`; // Actualiza la puntuación en el DOM
                return; // Termina la animación de caída
            }
    
            // Si el objeto toca el suelo
            if (posY > window.innerHeight) {
                actualizarVidas(); // Reducir una vida
                objeto.remove(); // Eliminar el objeto del DOM
                return; // Termina la animación de caída
            }
        
            // Continuar la animación
            requestAnimationFrame(animarCaida);
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
