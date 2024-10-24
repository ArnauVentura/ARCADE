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
  mostrarMensaje('Texto para la fuente amarilla'); //Texto introductorio de cada juego
});

fuenteRoja.addEventListener('click', function() {
  mostrarMensaje('Texto para la fuente roja'); //Texto introductorio de cada juego
});

fuenteAzul.addEventListener('click', function() {
  mostrarMensaje('Texto para la fuente azul'); //Texto introductorio de cada juego
});

fuenteVerde.addEventListener('click', function() {
  mostrarMensaje('Texto para la fuente verde'); //Texto introductorio de cada juego
});

//EventosDobleClick


fuenteAmarilla.addEventListener('dblclick', function() {
  navegarA('fuente_amarilla.html'); //La url de cada juego
});

fuenteRoja.addEventListener('dblclick', function() {
  navegarA('fuente_roja.html'); //La url de cada juego
});

fuenteAzul.addEventListener('dblclick', function() {
  navegarA('fuente_azul.html'); //La url de cada juego
});

fuenteVerde.addEventListener('dblclick', function() {
  navegarA('fuente_verde.html'); //La url de cada juego
});