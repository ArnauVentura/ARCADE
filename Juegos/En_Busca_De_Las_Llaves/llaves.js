document.addEventListener("DOMContentLoaded", () => {
    const gameArea = document.getElementById('gameArea');
    const title = document.getElementById('title');
    const buttonsArea = document.getElementById('buttonsArea');
    const hiddenObjectsArea = document.getElementById('hiddenObjectsArea');
    const backButton = document.getElementById('flecha');
    const linterna = document.createElement('div'); // Crear la linterna
    linterna.id = 'linterna';
    gameArea.appendChild(linterna); // Añadir la linterna al área del juego

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

    // Iniciar el temporizador al cargar la página
    startTimer();

    // Establecer el fondo inicial
    gameArea.style.backgroundImage = defaultBackground;

    // Cambiar de sala al hacer clic en los botones de navegación
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
        for (let i = 0; i < numObjects; i++) {
            const object = document.createElement('div');
            object.classList.add('hiddenObject');

            // Posición aleatoria dentro del área
            object.style.top = `${Math.random() * 80}%`;
            object.style.left = `${Math.random() * 80}%`;

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
        // Cambiar fondo al principal
        gameArea.style.backgroundImage = defaultBackground;
        title.textContent = "Selecciona una sala para buscar las llaves";
        hiddenObjectsArea.innerHTML = ""; // Limpiar objetos
        buttonsArea.style.display = 'block'; // Mostrar los botones nuevamente
        currentRoom = null; // Restablecer la sala actual
    }

    // Activar modo oscuro y linterna
    function enableDarkMode() {
        if (currentRoom === 'sala_mantenimiento' || currentRoom === 'sala_inundada' || currentRoom === 'sala_ruinas') {
            gameArea.classList.add('dark');
            linterna.style.display = 'block';
            gameArea.addEventListener('mousemove', moveLinterna);
        }
    }
    

    // Desactivar modo oscuro y linterna
    function disableDarkMode() {
        gameArea.classList.remove('dark');
        linterna.style.display = 'none';
        gameArea.removeEventListener('mousemove', moveLinterna);
    }

    // Mover la linterna según la posición del ratón
    function moveLinterna(event) {
        const rect = gameArea.getBoundingClientRect();
        const x = event.clientX - rect.left - linterna.offsetWidth / 2;
        const y = event.clientY - rect.top - linterna.offsetHeight / 2;
        linterna.style.transform = `translate(${x}px, ${y}px)`;
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
