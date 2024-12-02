// Selección del párrafo donde cambia el texto
const mensaje = document.getElementById("p-mensaje");

// Función para cambiar el texto del párrafo
function cambiarMensaje(nuevoMensaje) {
    mensaje.textContent = nuevoMensaje;
}

// Event listeners para cada fuente
document.getElementById("fuenteAmarilla").addEventListener("mouseover", () => {
    cambiarMensaje("Investiga el alcantarillado y encuentra las llaves ¡Pero cuidado! Llévate una linterna o no podrás ver nada.");
});
document.getElementById("fuenteRoja").addEventListener("mouseover", () => {
    cambiarMensaje("Nos han avisado de que hay un barco que está lanzando basura en el mar. ¡No podemos permitir que los peces naden entre bolsas de plástico!");
});
document.getElementById("fuenteAzul").addEventListener("mouseover", () => {
    cambiarMensaje("Los rios de nuestra querida ciudad están llenos de troncos y basura ¡Es urgente que el caudal del río esté controlado!");
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
