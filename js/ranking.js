window.addEventListener('load', () => {
    // Aquí manejamos la carga de los rankings. Primero cargamos todos los rankings.
    fetch('/ARCADE/api/ranking/getRanking.php')
        .then(respuesta => respuesta.json())
        .then(rankings => {
            // Verificamos si hay rankings
            if (rankings.length === 0) {
                console.log("No hay rankings disponibles.");
                return;
            }

            const tabla = document.querySelector('#ranking');

            // Limpiar la tabla antes de agregar nuevas filas
            tabla.innerHTML = '';

            // Crear las filas de la tabla con los rankings
            rankings.forEach((ranking, index) => {
                const tr = document.createElement('tr');

                // Crear celdas para cada columna de la tabla (posición, usuario, puntuación)
                createTd(tr, index + 1); // Posición
                createTd(tr, ranking.nombre); // Nombre del usuario
                createTd(tr, ranking.puntuacion); // Puntuación

                tabla.appendChild(tr);
            });
        })
        .catch(error => {
            console.error("Error al obtener los rankings:", error);
        });
});

// Función para crear una celda en la tabla
function createTd(tr, text) {
    const td = document.createElement('td');
    td.textContent = text;
    tr.appendChild(td);
}

// Función para manejar los clics de los botones
document.querySelectorAll('.boton-pequeño').forEach(boton => {
    boton.addEventListener('click', (e) => {
        // Obtener el ID del juego desde el ID del botón
        const juegoSeleccionado = e.target.id.replace('boton-', '');

        // Ahora hacemos la solicitud con el parámetro 'juego'
        fetch(`ARCADE/api/ranking/getRanking.php?juego=${juegoSeleccionado}`)
            .then(respuesta => respuesta.json())
            .then(rankings => {
                const tabla = document.querySelector('#ranking');
                tabla.innerHTML = ''; // Limpiar la tabla

                if (rankings.length === 0) {
                    console.log("No hay rankings para este juego.");
                    return;
                }

                // Agregar los rankings filtrados
                rankings.forEach((ranking, index) => {
                    const tr = document.createElement('tr');

                    // Crear celdas para cada columna de la tabla (posición, usuario, puntuación)
                    createTd(tr, index + 1); // Posición
                    createTd(tr, ranking.nombre); // Nombre del usuario
                    createTd(tr, ranking.puntuacion); // Puntuación

                    tabla.appendChild(tr);
                });
            })
            .catch(error => {
                console.error("Error al obtener los rankings del juego:", error);
            });
    });
});
