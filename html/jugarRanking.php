<?php
session_start();
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
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anna y el misterio de las 3 fuentes</title>
    <link rel="stylesheet" href="../css/Style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Handlee&display=swap" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
</head>
<body class="bg-Img img-escuela">
<header class="encabezado-general">
    <form method="POST" action="../php/controllers.php">
        <button type="submit" name="cerrar-sesion" class="boton-cerrar-sesion">
            <img src="../media/cerrar-sesion.png" alt="Cerrar Sesión" class="img-header">
        </button>
    </form>
</header>
<main class="main-pg-principal">
    <div class="elementos-centrados div-titulos div-titulo-anna">
        <h1 class="estilo-titulo" id="tituloAnna">ANNA</h1>
        <h2 class="estilo-titulo" id="subtituloAnna">Y EL MISTERIO DE LAS 3 FUENTES</h2>
    </div>
    <div class="elementos-centrados">
        <a href="./fuentes.php" id="botonJugar" class="boton-pequeño estilos-generales animacion-boton">JUGAR</a>
        <a href="./ranking.php" id="botonRanking" class="boton-pequeño estilos-generales animacion-boton">RANKING</a>
    </div>
    <div>
        <img src="../media/img_anna/anna.png" class="anna-img" alt="Anna" id="anna-fuente">
    </div>
</main>
<script src="./js/idiomas.js"></script>
<script src="./js/traducciones.js"></script>
</body>
</html>