<?php
session_start();
include_once('../../php/bd.php');

// Obtener datos de la sesión
$usuario = isset($_SESSION['nombre']) ? $_SESSION['nombre'] : null;
$usuarioId = isset($_SESSION['idUsuario']) ? $_SESSION['idUsuario'] : null;

// Obtener datos del juego
$idJuego = 3;
$juego = getJuegoPorId($idJuego);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/Style.css">
    <link rel="stylesheet" href="../puzzle/puzzle.css">
    <title>Al río troncos</title>
</head>
<body class="bodyPuzzle" 
    data-authenticated="<?php echo isset($_SESSION['idUsuario']) ? 'true' : 'false'; ?>"
    data-game-id="<?php echo $idJuego; ?>"
    data-user-id="<?php echo isset($_SESSION['idUsuario']) ? $_SESSION['idUsuario'] : ''; ?>">
    
    <header class="encabezado-general">
        <div class="estilos-generales header-juegos-intro header-puzzle">
            <a class="atras" href="javascript:history.back()">
                <img src="../../media/flecha.png" alt="Volver" class="img-header">
            </a>
            <p class="tiempo" id="tiempo">Tiempo: 00:00</p>
            <p class="clicks" id="clicks">Clicks: 0</p>
        </div>
    </header>

    <main class="mainPuzzle">
        <div class="containerPuzzle">

            <div id="id1"></div><div id="id2"></div><div id="id3"></div>
            <div id="id4"></div><div id="id5"></div><div id="id6"></div>
            <div id="id7"></div><div id="id8"></div><div id="id9"></div>
        </div>

        <div class="bombilla">
            <div id="pista"></div>
            <div id="pistaPopup"></div>
        </div>

        <div id="ventanaVictoria" class="ventanaVictoria">
            <div class="v-contenido">
                <h1 class="v-titulo" id="puzzle">¡Puzzle Resuelto!</h1>
                <p id="mensajeTiempo"></p>
                <div class="v-botones">
                    <button id="btnReiniciar" class="volverJugar">Volver a Jugar</button>
                    <button id="btnRanking" class="irRanking">Ir al Ranking</button>
                    <button id="btnFuentes" class="volverFuentes">Volver a las Fuentes</button>
                </div>
            </div>
        </div>
    </main>
    <script src="../puzzle/puzzle.js"></script>
    <script src="../../js/idiomas.js"></script>
    <script src="../../js/traducciones.js"></script>
</body>
</html>