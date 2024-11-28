document.addEventListener("DOMContentLoaded", () => {
    const gameArea = document.getElementById('gameArea');
    const title = document.getElementById('title');
    const buttonsArea = document.getElementById('buttonsArea');
    const hiddenObjectsArea = document.getElementById('hiddenObjectsArea');
    const backButton = document.getElementById('flecha');

    let currentRoom = null; // Variable para almacenar la sala actual
    let objetosEncontrados = 0; // Contador de objetos encontrados en la sala actual
    let contadorSalasCompletadas = 0; // Contador global de salas completadas
    const objetosPorSala = 3; // Número de objetos requeridos para completar una sala
    const totalSalas = 3; // Número total de salas que se deben completar

    const defaultBackground = "url('./media/HUB.png')"; // Fondo inicial
    const roomBackgrounds = {
        sala_mantenimiento: "url('./media/Mantenimiento.png')",
        sala_inundada: "url('./media/Inundado.png')",
        sala_ruinas: "url('./media/Ruinas.png')"
    };

    // Variables del temporizador
    let timerInterval;
    let startTime = Date.now(); // Tiempo inicial
    startTimer();

    // Establecer el fondo inicial
    gameArea.style.backgroundImage = defaultBackground;

    // Cambiar de sala al hacer clic en los botones
    document.querySelectorAll('.navButton').forEach(button => {
        button.addEventListener('click', () => {
            const room = button.getAttribute('data-room');
            currentRoom = room; // Actualizar la sala actual
            objetosEncontrados = 0; // Reiniciar el contador de objetos encontrados
            gameArea.style.backgroundImage = roomBackgrounds[room];
            title.textContent = `Estás en la ${room.replace('_', ' ')}`;
            hiddenObjectsArea.innerHTML = ""; // Limpiar los objetos de la sala anterior
            buttonsArea.style.display = 'none'; // Ocultar los botones de selección de sala
            enableDarkMode(); // Activar modo oscuro y linterna
            generateObjects(objetosPorSala); // Generar objetos en la sala
        });
    });

    // Botón "atrás"
    backButton.addEventListener('click', () => {
        volverAlMenu();
        disableDarkMode(); // Desactivar modo oscuro y linterna
    });

    // Función para generar objetos ocultos
    function generateObjects(numObjects) {
        const minSpacing = 10; // Margen mínimo entre objetos (en porcentaje de la altura o ancho)
        const positions = []; // Para almacenar las posiciones de los objetos y evitar superposiciones

        for (let i = 0; i < numObjects; i++) {
            let validPosition = false;
            let top, left;

            // Buscar una posición válida que no se sobreponga con otras
            while (!validPosition) {
                // Generar una posición aleatoria para el objeto
                top = Math.random() * 80;
                left = Math.random() * 80;

                // Comprobar que el objeto no se superponga con otros (por un margen mínimo)
                validPosition = true;
                for (let j = 0; j < positions.length; j++) {
                    const [existingTop, existingLeft] = positions[j];

                    // Verificar la distancia mínima entre los objetos
                    if (Math.abs(top - existingTop) < minSpacing || Math.abs(left - existingLeft) < minSpacing) {
                        validPosition = false;
                        break; // Si la posición es demasiado cercana a otra, buscar otra posición
                    }
                }
            }

            // Almacenamos la nueva posición válida
            positions.push([top, left]);

            // Crear y agregar el objeto a la interfaz
            const object = document.createElement('div');
            object.classList.add('hiddenObject');
            object.style.top = `${top}%`;
            object.style.left = `${left}%`;

            // Evento de clic para encontrar el objeto
            object.addEventListener('click', () => {
                if (!object.classList.contains('found')) {
                    object.classList.add('found');
                    objetoEncontrado(); // Contar objeto encontrado
                }
            });

            hiddenObjectsArea.appendChild(object);
        }
    }

    // Lógica cuando se encuentra un objeto
    function objetoEncontrado() {
        objetosEncontrados++;
        if (objetosEncontrados === objetosPorSala) {
            // Sala completada
            contadorSalasCompletadas++;
            deshabilitarBotonSala(currentRoom); // Deshabilitar el botón de la sala completada
            volverAlMenu(); // Volver al menú principal
            disableDarkMode(); // Apagar linterna al salir de la sala

            // Verificar si se completaron todas las salas
            if (contadorSalasCompletadas === totalSalas) {
                detenerTimer(); // Detener el temporizador
            }
        }
    }

    // Deshabilitar el botón de una sala completada
    function deshabilitarBotonSala(room) {
        const button = document.querySelector(`.navButton[data-room="${room}"]`);
        if (button) {
            button.disabled = true;
            button.textContent += " (Completada)";
        }
    }

    // Función para volver al menú principal
    function volverAlMenu() {
        gameArea.style.backgroundImage = defaultBackground; // Restaurar fondo inicial
        title.textContent = "Selecciona una sala para buscar las llaves";
        hiddenObjectsArea.innerHTML = ""; // Limpiar objetos
        buttonsArea.style.display = 'block'; // Mostrar los botones nuevamente
        currentRoom = null; // Restablecer la sala actual
        disableDarkMode(); // Desactivar la linterna cuando regresamos al menú
    }

    // Activar modo oscuro y linterna
    function enableDarkMode() {
        gameArea.classList.add('dark'); // Aplicar clase de oscuridad solo en gameArea
        enableLinterna(); // Habilitar efecto de linterna
    }

    // Desactivar modo oscuro y linterna
    function disableDarkMode() {
        gameArea.classList.remove('dark'); // Eliminar clase de oscuridad
        disableLinterna(); // Deshabilitar efecto de linterna
    }

    // Habilitar el efecto de linterna
    function enableLinterna() {
        document.documentElement.style.setProperty('--cX', `40vw`);
        document.documentElement.style.setProperty('--cY', `40vh`);
        document.addEventListener('mousemove', moveLinterna); // Activar movimiento de la linterna
    }

    // Deshabilitar el efecto de linterna
    function disableLinterna() {
        document.documentElement.style.setProperty('--cX', `40vw`);
        document.documentElement.style.setProperty('--cY', `40vh`);
        document.removeEventListener('mousemove', moveLinterna); // Desactivar movimiento de la linterna
    }

    // Mover la linterna según la posición del ratón
    function moveLinterna(e) {
        const x = e.clientX / window.innerWidth * 100;
        const y = e.clientY / window.innerHeight * 100;
        document.documentElement.style.setProperty('--cX', `${x}vw`);
        document.documentElement.style.setProperty('--cY', `${y}vh`);
    }

    // Iniciar el temporizador
    function startTimer() {
        timerInterval = setInterval(() => {
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            title.textContent = `Tiempo transcurrido: ${formatTime(elapsedTime)}`;
        }, 1000);
    }

    // Detener el temporizador
    function detenerTimer() {
        clearInterval(timerInterval);
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        title.textContent = `¡Juego completado! Tiempo total: ${formatTime(elapsedTime)}`;
        buttonsArea.style.display = 'none'; // Ocultar botones después de completar el juego
    }

    // Formatear tiempo en minutos y segundos
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}m ${remainingSeconds}s`;
    }
});
