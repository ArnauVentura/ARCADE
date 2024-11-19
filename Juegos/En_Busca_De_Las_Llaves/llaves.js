document.addEventListener("DOMContentLoaded", () => {
    const gameArea = document.getElementById('gameArea');
    const title = document.getElementById('title');
    const buttonsArea = document.getElementById('buttonsArea');
    const hiddenObjectsArea = document.getElementById('hiddenObjectsArea');
    const backButton = document.getElementById('flecha');

    let currentRoom = null; // Variable para almacenar la sala actual
    const defaultBackground = "url('./media/HUB.png')"; // Fondo inicial
    const roomBackgrounds = {
        sala_mantenimiento: "url('./media/Mantenimiento.png')",
        sala_inundada: "url('./media/Inundado.png')",
        sala_ruinas: "url('./media/Ruinas.png')"
    };

    // Establecer el fondo inicial
    gameArea.style.backgroundImage = defaultBackground;

    // Cambiar de sala al hacer clic en los botones de navegación
    document.querySelectorAll('.navButton').forEach(button => {
        button.addEventListener('click', () => {
            const room = button.getAttribute('data-room');
            currentRoom = room; // Actualizar la sala actual
            gameArea.style.backgroundImage = roomBackgrounds[room];
            title.textContent = `Estás en la ${room.replace('_', ' ')}`;
            hiddenObjectsArea.innerHTML = ""; // Limpiar los objetos de la sala anterior
            buttonsArea.style.display = 'none'; // Ocultar los botones de selección de sala
            generateObjects(3); // Generar 3 llaves en la sala
        });
    });

    // Botón "atrás"
    backButton.addEventListener('click', () => {
        if (currentRoom) {
            // Volver al fondo inicial
            gameArea.style.backgroundImage = defaultBackground;
            title.textContent = "Selecciona una sala para buscar las llaves";
            hiddenObjectsArea.innerHTML = ""; // Limpiar objetos
            buttonsArea.style.display = 'block'; // Mostrar nuevamente los botones de selección de sala
            currentRoom = null; // Restablecer la sala actual
        }
    });

    // Función para generar objetos ocultos
    function generateObjects(numObjects) {
        for (let i = 0; i < numObjects; i++) {
            const object = document.createElement('div');
            object.classList.add('hiddenObject');

            // Posición aleatoria dentro del área
            object.style.top = `${Math.random() * 80}%`; // Ajustar para no interferir con la navbar
            object.style.left = `${Math.random() * 100}%`;

            // Evento de clic para encontrar el objeto
            object.addEventListener('click', () => {
                if (!object.classList.contains('found')) {
                    object.classList.add('found');
                    // Lógica adicional para contar objetos, si es necesario
                }
            });

            hiddenObjectsArea.appendChild(object);
        }
    }
});
