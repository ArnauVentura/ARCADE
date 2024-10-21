
function toggleMenu() {
    const menu = document.getElementById('language-menu');
    menu.classList.toggle('show'); // Alternar la clase 'show'
}

// Función para cambiar el idioma seleccionado
function selectLanguage(language) {
    // Cambiar la bandera principal según el idioma seleccionado
    const mainFlag = document.getElementById('main-flag');
    mainFlag.src = `media/img_idiomas/${language}.png`;

    // Ocultar el menú después de seleccionar
    toggleMenu();
}
  