// Función para manejar el cambio de color y la selección única
const botones = document.querySelectorAll('.boton-largo'); // Seleccionamos todos los botones
const colorBase = '#C77E5F';
const colorBaseBorde = '#a56c43'


// Colores a los que cambiarán los botones al hacer clic
const colores = {
  'boton-llaves': '#FFD700', // Cambia a amarillo
  'boton-rescate': '#D64D3B', // Cambia a rojo
  'boton-puzzle': '#437CA5', // Cambia a azul
  'boton-total': '#a56c43'  // Cambia a marrón
};


// Función para manejar el clic
botones.forEach(button => {
    button.addEventListener('click', function() {
      // Primero, restauramos el color original de todos los botones
      botones.forEach(b => b.style.backgroundColor = colorBase);
      botones.forEach(b => b.style.borderColor = colorBaseBorde);
      // Luego, cambiamos el color de fondo del botón clickeado
      this.style.backgroundColor = colores[this.id]; // Cambia el color al especificado
      this.style.borderColor = colores[this.id]
    });
  });
