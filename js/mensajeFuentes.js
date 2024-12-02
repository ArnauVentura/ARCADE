// Selección del párrafo donde cambia el texto
const mensaje = document.getElementById("p-mensaje");

// Función para cambiar el texto del párrafo
function cambiarMensaje(nuevoMensaje) {
    mensaje.textContent = nuevoMensaje;
}

// Event listeners para cada fuente
document.getElementById("fuenteAmarilla").addEventListener("mouseover", () => {
    cambiarMensaje("La fuente amarilla brilla intensamente. ¡Un desafío emocionante te espera!");
});
document.getElementById("fuenteRoja").addEventListener("mouseover", () => {
    cambiarMensaje("La fuente roja parece caliente y peligrosa. ¿Te atreves a intentarlo?");
});
document.getElementById("fuenteAzul").addEventListener("mouseover", () => {
    cambiarMensaje("La fuente azul fluye tranquila. Pero cuidado, podría ser engañosa.");
});

// Restaurar el texto original al quitar el cursor
document.getElementById("fuenteAmarilla").addEventListener("mouseout", () => {
    cambiarMensaje("Elige una fuente para comenzar tu aventura.");
});
document.getElementById("fuenteRoja").addEventListener("mouseout", () => {
    cambiarMensaje("Elige una fuente para comenzar tu aventura.");
});
document.getElementById("fuenteAzul").addEventListener("mouseout", () => {
    cambiarMensaje("Elige una fuente para comenzar tu aventura.");
});
