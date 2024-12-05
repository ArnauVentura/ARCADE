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
    <title>Anna y el misterio de las 3 fuentes</title>
    <link rel="stylesheet" href="../css/Style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Handlee&display=swap" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
</head>

<body class="bg_Img imgEscuela">
    <header class="encabezado_general">
        <a class="atras" href="javascript:history.back()">
            <img src="../media/flecha.png" alt="Volver" class="img-header">
        </a>
    </header>
    <main id="main_mainMenu">
        <div class="elementosCentrados div-titulos div-titulo-anna">
            <h1 class="styleTitulo">ANNA</h1>
            <h2 class="styleTitulo">Y EL MISTERIO DE LAS 3 FUENTES</h2>
        </div>
        <div class="elementosCentrados">
            <a href="./fuentes.php" class="short_style_a_button estilos-generales animacion_boton">JUGAR</a>
            <a href="./ranking.php" class="short_style_a_button estilos-generales animacion_boton">RANKING</a>
        </div>
        <div>
            <img src="../media/img_anna/anna.png" class="anna-img" alt="Anna" id="annaFuente">
        </div>
       
    </main>
</body>

</html>