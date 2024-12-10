// Función para mostrar/ocultar el menú de idiomas
function alternarMenu() {
    const menu = document.getElementById('menu-idiomas');
    menu.classList.toggle('show'); // Alternar la clase 'show'
}

// Función para cambiar el idioma seleccionado
function seleccionarIdioma(idioma) {
    // Cambiar la bandera principal según el idioma seleccionado
    const banderaPrincipal = document.getElementById('bandera-seleccionada');
    banderaPrincipal.src = `media/img_idiomas/${idioma}.png`;

    // Guardar el idioma en el localStorage
    localStorage.setItem('idioma', idioma);

    // Cambiar el idioma de la página
    cambiarIdioma(idioma);

    // Ocultar el menú después de seleccionar
    alternarMenu();
}

// Función para cambiar el idioma de la página
function cambiarIdioma(idioma) {
    // Si no se ha especificado un idioma, tratamos de obtenerlo del localStorage
    if (!idioma) {
        idioma = localStorage.getItem('idioma') || 'esp';  // 'esp' es el idioma por defecto
    }

    const textos = traducciones[idioma]; // Obtener las traducciones para el idioma seleccionado

    // Actualizar los textos de los elementos de la página
    for (let id in textos) {
        const elemento = document.getElementById(id);
        if (elemento) {
            // Para los inputs, actualizamos el placeholder
            if (elemento.tagName.toLowerCase() === 'input') {
                if (elemento.type === 'text' || elemento.type === 'password') {
                    elemento.setAttribute('placeholder', textos[id]); // Cambiar el placeholder
                }
                if (elemento.type === 'submit' || elemento.type === 'button') {
                    elemento.setAttribute('value', textos[id]); // Cambiar el valor del botón
                }
            } else {
                // Para otros elementos (como div, h1, etc.), actualizamos el texto
                elemento.textContent = textos[id];
            }
        }
    }
}

// Llamar a la función cuando la página se cargue para aplicar el idioma guardado
document.addEventListener("DOMContentLoaded", function () {
    cambiarIdioma(); // Aplica las traducciones cuando el DOM esté listo.
});

