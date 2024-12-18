<?php
session_start();

if (isset($_SESSION['nombre'])) {
    // Opcional: configura variables de sesión o muestra información específica del usuario
    $usuario = $_SESSION['nombre'];
} else {
    // Si no hay sesión iniciada, no redirige. Solo se omite el contenido de usuario.
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
    <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
    
</head>
<body class="bg-Img" id="img-patio">
    <header class="encabezado-general">
        <a class="atras" href="./jugarRanking.php">
            <img src="../media/flecha.png" alt="Volver" class="img-header">
        </a>
    </header>
    <main>
        <!--Div de la fuente amarilla-->
        <div class="font-img">
            <a href="introEnBuscaDeLasLlaves.php">
                <img src="../media/img_fuentes/fuente_amarilla.png" alt="fuente_amarilla" class="fuente-amarilla" id="fuenteAmarilla">
            </a>
        </div>

        <!--Div de la fuente roja-->
        <div class="font-img">
            <a href="introRescateDelMar.php">
                <img src="../media/img_fuentes/fuente_roja.png" alt="fuente_roja" class="fuente-roja " id="fuenteRoja">
            </a>
        </div>

        <!--Div de la fuente azul-->
        <div class= "font-img">
            <a href="introAlRioTroncos.php">
                <img src="../media/img_fuentes/fuente_azul.png" alt="fuente_azul" class="fuente-azul" id="fuenteAzul">
            </a>
        </div>

        <!--Div de la imagen de Anna-->
        <div class="elementos-centrados div-texto-fuentes">
            <p id="p-mensaje">¡Que empiece la investigación!</p>
        </div>
        <div>
            <img src="../media/img_anna/annaFace.png" class="anna-face-img" alt="AnnaFace" id="anna-fuente"> 
        </div>

        <!--Div de la imagen de personaje -->
        <div class= "font-img">
            <img src="../media/img_landing/p1.png" alt="Manel" class="personaje1">
        </div>

        <!--Div de la imagen de personaje-->
        <div class= "font-img">
            <img src="../media/img_landing/p2.png" alt="Marcel·la" class="personaje2">
        </div>
    </main>

    <script src="../js/mensajeFuentes.js"></script>
</body>
</html>