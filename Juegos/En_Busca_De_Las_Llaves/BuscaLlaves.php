<?php
session_start();
include_once('../../php/bd.php');

if (!isset($_SESSION['nombre'])) {
    header('Location: ../index.php'); 
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['cerrar-sesion'])) {
    session_unset();
    session_destroy();
    header('Location: ../index.php');
    exit();
}

$idJuego = 1;
$juego = getJuegoPorId($idJuego);

if (!$juego) {
    echo "<p>Juego no encontrado.</p>";
    exit;
}
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
  <body>
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


  <!-- form oculto para enviar puntuacion -->
    <form id="rankingForm" method="POST" action="../../php/controllers.php">
      <input type="hidden" name="usuario_idUsuario" value="<?php echo ($_SESSION['nombre']); ?>">
      <input type="hidden" name="juegos_idJuego" value="<?php echo ($idJuego); ?>">
      <input type="hidden" id="puntuacion" name="puntuacion">
    </form>
    <!-- Área principal -->
    <div id="gameArea">
      <div id="buttonsArea">
        <button
          class="navButton boton-pequeño estilos-generales animacion-boton"
          data-room="sala_mantenimiento"
        >
          Ir a la sala de mantenimiento
        </button>
        <button
          class="navButton boton-pequeño estilos-generales animacion-boton"
          data-room="sala_inundada"
        >
          Ir a la sala inundada
        </button>
        <button
          class="navButton boton-pequeño estilos-generales animacion-boton"
          data-room="sala_ruinas"
        >
          Ir a la sala en ruinas
        </button>
      </div>

      <div id="hiddenObjectsArea"></div>
    </div>

    <script src="llaves.js"></script>
  </body>
</html>