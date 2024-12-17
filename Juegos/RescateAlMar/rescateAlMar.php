<?php
session_start();
include_once('../../php/bd.php');

// Obtener datos de la sesión
$usuario = isset($_SESSION['nombre']) ? $_SESSION['nombre'] : null;
$usuarioId = isset($_SESSION['idUsuario']) ? $_SESSION['idUsuario'] : null;

// Obtener datos del juego
$idJuego = 2;
$juego = getJuegoPorId($idJuego);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rescate del mar</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../../css/Style.css">
    <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
</head>
<body
    data-authenticated="<?php echo isset($_SESSION['idUsuario']) ? 'true' : 'false'; ?>"
    data-game-id="<?php echo $idJuego; ?>"
    data-user-id="<?php echo isset($_SESSION['idUsuario']) ? $_SESSION['idUsuario'] : ''; ?>">
    
    <header class="encabezado-general">
        <div class="estilos-generales header-juegos-intro">
            <a class="atras" href="javascript:history.back()">
                <img src="../../media/flecha.png" alt="Volver" class="img-header">
            </a>
            <div class="conjunto-header">
                <div class="puntuacion"></div>
                <div id="corazones"></div>
                <div id="tiempo"></div>
            </div>
        </div>
    </header>
    <main>
        <div>
            <img id="red" src="img/red.png" alt="Red">
        </div>
        <div id="objetos"></div>
        <div id="ventanaVictoria" class="ventanaVictoria" style="display: none;">
            <div class="v-contenido">
                <h1 class="v-titulo" id="puzzle">¡Juego Completado!</h1>
                <p id="mensajeTiempo">
                <div class="v-botones">
                    <button id="btnReiniciar" class="volverJugar">Volver a Jugar</button>
                    <button id="btnRanking" class="irRanking">Ir al Ranking</button>
                    <button id="btnFuentes" class="volverFuentes">Volver a las Fuentes</button>
                </div>
            </div>
        </div>
    </main>
</body>
<script src="script.js"></script>
</html>

