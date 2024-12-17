<?php
session_start();
include_once('../../php/bd.php');

// Obtener datos de la sesión
$usuario = isset($_SESSION['nombre']) ? $_SESSION['nombre'] : null;
$usuarioId = isset($_SESSION['idUsuario']) ? $_SESSION['idUsuario'] : null;

// Manejar cierre de sesión
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['cerrar-sesion'])) {
    session_unset();
    session_destroy();
    header('Location: ../index.php');
    exit();
}

// Obtener datos del juego
$idJuego = 1;
$juego = getJuegoPorId($idJuego);
?>

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Juego de Objetos Ocultos</title>
    <link rel="stylesheet" href="llaves.css" />
    <link rel="stylesheet" href="../../css/Style.css" />
  </head>
  <body 
    data-authenticated="<?php echo isset($_SESSION['idUsuario']) ? 'true' : 'false'; ?>"
    data-game-id="<?php echo $idJuego; ?>"
    data-user-id="<?php echo isset($_SESSION['idUsuario']) ? $_SESSION['idUsuario'] : ''; ?>">


    <!-- Navbar -->
    <header class="encabezado-general encabezado_juego">
      <nav class="estilos-generales header-juegos-intro">
        <a class="atras" href="javascript:history.back()">
          <img src="../../media/flecha.png" alt="Volver" class="img-header" />
        </a>
        <div class="conjunto_header">
          <div id="tiempo">00:00</div>
          <div id="textoJuego" class="styleTitulo">
            Selecciona una sala para buscar las llaves
          </div>
          <div id="contadorLlaves">0/3</div>
        </div>
      </nav>
    </header>

   
    <!-- Área principal -->
    <div id="gameArea">
      <div id="buttonsArea">
        <button
          class="navButton boton-pequeño estilos-generales animacion-boton"
          data-room="sala_mantenimiento"
          id="salaMantenimiento"
        >
          Ir a la sala de mantenimiento
        </button>
        <button
          class="navButton boton-pequeño estilos-generales animacion-boton"
          data-room="sala_inundada"
          id="salaInundada"
        >
          Ir a la sala inundada
        </button>
        <button
          class="navButton boton-pequeño estilos-generales animacion-boton"
          data-room="sala_ruinas"
          id="salaRuinas"
        >
          Ir a la sala en ruinas
        </button>
      </div>

      <div id="hiddenObjectsArea"></div>
          <!-- Modal de Victoria -->
      <div id="ventanaVictoria" class="ventanaVictoria" style="display: none;">
        <div class="v-contenido">
          <h1 class="v-titulo" id="puzzle">¡Juego Completado!</h1>
          <p id="mensajeTiempo"></p>
        <div class="v-botones">
        <button id="btnReiniciar" class="volverJugar">Volver a Jugar</button>
        <button id="btnRanking" class="irRanking">Ir al Ranking</button>
        <button id="btnFuentes" class="volverFuentes">Volver a las Fuentes</button>
    </div>
  </div>
</div>
    </div>


    

    <script src="llaves.js"></script>
    <script src="../../js/idiomas.js"></script>
    <script src="../../js/traducciones.js"></script>
  </body>
</html>
