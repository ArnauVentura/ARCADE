document.addEventListener("DOMContentLoaded", () => {
    const area = document.getElementById('gameArea');
    const message = document.getElementById('message');
    let foundCount = 0;
    const totalObjects = 9;

    // Crear y agregar 9 objetos a gameArea
    for (let i = 0; i < totalObjects; i++) {
        const object = document.createElement('div');
        object.classList.add('hiddenObject');
        object.style.position = 'absolute';
        object.style.width = '30px';
        object.style.height = '30px';
        object.style.backgroundColor = 'blue';
        object.style.cursor = 'pointer';

        // Posicionar el objeto de manera aleatoria dentro del área de juego
        object.style.top = `${Math.random() * 90}%`;
        object.style.left = `${Math.random() * 90}%`;

        // Agregar evento de clic a cada objeto
        object.addEventListener('click', () => {
            if (!object.classList.contains('found')) { // Verificar que no esté ya deshabilitado
                foundCount++;
                object.classList.add('found'); // Marcar como encontrado
                object.style.backgroundColor = 'gray'; // Cambiar color para indicar que está deshabilitado
                message.textContent = `Objetos encontrados: ${foundCount}/${totalObjects}`;

                // Verificar si se encontraron todos los objetos
                if (foundCount === totalObjects) {
                    alert("¡Felicidades! Encontraste todos los objetos.");
                }
            }
        });

        // Agregar el objeto al área de juego
        area.appendChild(object);
    }
});
