//Declaración de imagenes
const fuenteAmarilla = document.getElementById('fuenteAmarilla');
const fuenteRoja = document.getElementById('fuenteRoja');
const fuenteAzul = document.getElementById('fuenteAmzul');
const fuenteVerde = document.getElementById('fuenteVerde');

const mensaje = document.getElementById('mensaje').innerText = mensaje;

//funcion para el mensaje

function mostrarMensaje(text) {
  mensaje.innerText = text;
}

//funcion que linckea la imagen a otro html

function navegarA(url) {
  window.location.href = url;
}

//Eventos click
fuenteAmarilla.addEventListener('click', function() {
  mostrarMensaje('Texto para la fuente amarilla');
});

fuenteRoja.addEventListener('click', function() {
  mostrarMensaje('Texto para la fuente roja');
});

fuenteAzul.addEventListener('click', function() {
  mostrarMensaje('Texto para la fuente azul');
});

fuenteVerde.addEventListener('click', function() {
  mostrarMensaje('Texto para la fuente verde');
});

//EventosDobleClick


fuenteAmarilla.addEventListener('dblclick', function() {
  navegarA('fuente_amarilla.html');
});

fuenteRoja.addEventListener('dblclick', function() {
  navegarA('fuente_roja.html');
});

fuenteAzul.addEventListener('dblclick', function() {
  navegarA('fuente_azul.html');
});

fuenteVerde.addEventListener('dblclick', function() {
  navegarA('fuente_verde.html');
});