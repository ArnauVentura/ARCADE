<?php
session_start();
if (!isset($_SESSION['nombre'])) {
    header('Location: ../index.php'); 
    exit();
}
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
<body class="bodyPuzzle">
    <header class="encabezado_general">
        <div class="estilos-generales header-juegos-into ">
            <a class="atras" href="javascript:history.back()">
                <img src="../../media/flecha.png" alt="Volver" class="img-header">
            </a>
            <p class="tiempo">Tiempo: 0</p>
            <p class="clicks">Clicks: 0</p>
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
    </main>
    <script src="../puzzle/puzzle.js"></script>
</body>
</html>