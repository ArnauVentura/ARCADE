document.addEventListener("DOMContentLoaded", () => {
    const area = document.getElementById('gameArea');
    const message = document.getElementById('message');
    let foundCount = 0;
    const totalObjects = 9;

    //Crear los objetos.
    for (let i = 0; i < totalObjects; i++) {
        const object = document.createElement('div');
        object.classList.add('hiddenObject');
        object.style.position = 'absolute';
        object.style.width = '30px';
        object.style.height = '30px';
        object.style.backgroundColor = 'blue';
        object.style.cursor = 'pointer';

        // Posicion aleatoria dentro del area
        object.style.top = `${Math.random() * 90}%`;
        object.style.left = `${Math.random() * 90}%`;

        object.addEventListener('click', () => {
            if (!object.classList.contains('found')) { 
                foundCount++;
                object.classList.add('found'); 
                object.style.backgroundColor = 'gray';
                message.textContent = `Objetos encontrados: ${foundCount}/${totalObjects}`;

                
                if (foundCount === totalObjects) {
                    alert("¡Felicidades! Encontraste todos los objetos.");
                }
            }
        });

        // Agregar el objeto al área de juego
        area.appendChild(object);
    }
});
