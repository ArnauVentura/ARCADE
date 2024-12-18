// Crear una celda en la tabla con texto y clase opcional
function createTd(tr, text, className = '') {
    const td = document.createElement('td');
    td.textContent = text;
    if (className) {
        td.classList.add(className);
    }
    tr.appendChild(td);
}

document.querySelectorAll('.boton-pequeño').forEach(boton => {
    boton.addEventListener('click', (e) => {
        const juegoSeleccionado = e.target.dataset.juego; // Obtener el ID del juego

        // Solicitar los rankings filtrados
        fetch(`/ARCADE/api/ranking/getRanking.php?juego=${juegoSeleccionado}`)
            .then(respuesta => respuesta.json())
            .then(rankings => {
                const tablaBody = document.querySelector('#ranking tbody');
                tablaBody.innerHTML = ''; // Limpiar la tabla

                if (rankings.length === 0) {
                    const tr = document.createElement('tr');
                    createTd(tr, 'No hay rankings disponibles.', 'no-data');
                    tr.colSpan = 3; // Unir las columnas
                    tablaBody.appendChild(tr);
                    return;
                }

                // Agregar filas al ranking
                rankings.forEach((ranking, index) => {
                    const tr = document.createElement('tr');
                    tr.classList.add('div-jugador'); // Añadir la clase a la fila

                    createTd(tr, index + 1, 'posicion'); // Posición
                    createTd(tr, ranking.usuario_nombre, 'jugador'); // Nombre del usuario
                    createTd(tr, ranking.puntuacion, 'puntuacion'); // Puntuación

                    tablaBody.appendChild(tr);
                });
            })
            .catch(error => {
                console.error("Error al obtener los rankings:", error);
            });
    });
});
