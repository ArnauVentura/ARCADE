document.addEventListener("DOMContentLoaded", () => {
    const gameArea = document.getElementById('gameArea');
    const buttonsArea = document.getElementById('buttonsArea');
    const hiddenObjectsArea = document.getElementById('hiddenObjectsArea');
    const backButton = document.getElementById('flecha');
    const textoJuego = document.getElementById('textoJuego'); // Contenedor para el texto dinámico

    let currentRoom = null;
    let objetosEncontrados = 0;
    let contadorSalasCompletadas = 0;
    const objetosPorSala = 3;
    const totalSalas = 3;

    const defaultBackground = "url('./media/HUB.png')";
    const roomBackgrounds = {
        sala_mantenimiento: "url('./media/Mantenimiento.png')",
        sala_inundada: "url('./media/Inundado.png')",
        sala_ruinas: "url('./media/Ruinas.png')"
    };

    let timerInterval;
    let startTime = Date.now();
    startTimer();

    // Cambiar el fondo inicial del body
    document.body.style.backgroundImage = defaultBackground;

    // Manejo de las salas
    document.querySelectorAll('.navButton').forEach(button => {
        button.addEventListener('click', () => {
            const room = button.getAttribute('data-room');
            currentRoom = room;
            objetosEncontrados = 0;
            document.body.style.backgroundImage = roomBackgrounds[room]; // Cambiar fondo en el body
            textoJuego.textContent = `Estás en la ${room.replace('_', ' ')}`; // Actualizar texto en el header
            hiddenObjectsArea.innerHTML = ""; // Limpiar los objetos previos
            buttonsArea.style.display = 'none'; // Ocultar botones
            enableDarkMode(); // Activar el modo oscuro y linterna
            generateObjects(objetosPorSala); // Generar los objetos
        });
    });

    backButton.addEventListener('click', () => {
        volverAlMenu();
        disableDarkMode(); // Desactivar modo oscuro
    });

    function generateObjects(numObjects) {
        hiddenObjectsArea.innerHTML = ""; // Limpiar objetos previos
    
        for (let i = 0; i < numObjects; i++) {
            const top = Math.random() * 80; // Genera una posición aleatoria entre 0% y 80% en la altura
            const left = Math.random() * 80; // Genera una posición aleatoria entre 0% y 80% en el ancho
    
            const object = document.createElement('div');
            object.classList.add('hiddenObject');
            object.style.top = `${top}%`;
            object.style.left = `${left}%`;
    
            object.addEventListener('click', () => {
                if (!object.classList.contains('found')) {
                    object.classList.add('found');
                    objetoEncontrado();
                }
            });
    
            hiddenObjectsArea.appendChild(object);
        }
    }
    
    

    function objetoEncontrado() {
        objetosEncontrados++;
        if (objetosEncontrados === objetosPorSala) {
            contadorSalasCompletadas++;
            deshabilitarBotonSala(currentRoom);
            volverAlMenu();
            disableDarkMode();

            if (contadorSalasCompletadas === totalSalas) {
                detenerTimer();
            }
        }
    }

    function deshabilitarBotonSala(room) {
        const button = document.querySelector(`.navButton[data-room="${room}"]`);
        if (button) {
            button.disabled = true;
            button.textContent += " (Completada)";
        }
    }

    function volverAlMenu() {
        document.body.style.backgroundImage = defaultBackground;
        textoJuego.textContent = "Selecciona una sala para buscar las llaves"; // Actualizar texto en el header
        hiddenObjectsArea.innerHTML = ""; // Limpiar los objetos
        buttonsArea.style.display = 'flex'; // Asegurarse de que los botones se muestren al regresar
        currentRoom = null;
        disableDarkMode();
    }
    
    

    // Activar modo oscuro y linterna
    function enableDarkMode() {
        document.body.classList.add('dark'); // Aplicar clase al body
        enableLinterna(); // Habilitar efecto de linterna
    }

    // Desactivar modo oscuro y linterna
    function disableDarkMode() {
        document.body.classList.remove('dark'); // Eliminar clase del body
        disableLinterna(); // Deshabilitar efecto de linterna
    }

    function enableLinterna() {
        document.documentElement.style.setProperty('--cX', `40vw`);
        document.documentElement.style.setProperty('--cY', `40vh`);
        document.addEventListener('mousemove', moveLinterna);
    }

    function disableLinterna() {
        document.removeEventListener('mousemove', moveLinterna);
    }

    function moveLinterna(e) {
        const x = (e.clientX / window.innerWidth) * 100; // Posición en porcentaje horizontal
        const y = (e.clientY / window.innerHeight) * 100; // Posición en porcentaje vertical

        // Actualizar las variables CSS
        document.documentElement.style.setProperty('--cX', `${x}vw`);
        document.documentElement.style.setProperty('--cY', `${y}vh`);
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            document.getElementById('tiempo').textContent = formatTime(elapsedTime);
        }, 1000);
    }

    function detenerTimer() {
        clearInterval(timerInterval);
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        document.getElementById('tiempo').textContent = `¡Juego completado! ${formatTime(elapsedTime)}`;
        textoJuego.textContent = "¡Juego completado!"; // Actualizar el mensaje en el header
    }

    function formatTime(seconds) {
        const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
        const remainingSeconds = String(seconds % 60).padStart(2, '0');
        return `${minutes}:${remainingSeconds}`;
    }
});
