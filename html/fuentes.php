<?php
session_start(); // Inicia la sesión

// Comprueba si el usuario está logueado
if (isset($_SESSION['nombre'])) {
    // Opcional: configura variables de sesión o muestra información específica del usuario
    $usuario = $_SESSION['nombre'];
} else {
    // Si no hay sesión iniciada, no redirige. Solo se omite el contenido de usuario.
}

// Continúa con el contenido de la página, que puede ser público
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anna y el misterio de las 4 fuentes</title>
    <link rel="stylesheet" href="../css/Style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
    
</head>
<body class="bg_Img imgPatio">

    <header class="encabezado_general">
        <a class="atras" href="javascript:history.back()">
            <img src="../media/flecha.png" alt="Volver" class="img-header">
        </a>
    </header>
    
    <main>
        <!--Div de la fuente amarilla-->
        <div class="font-img">
            <a href="introEnBuscaDeLasLlaves.html">
                <img src="../media/img_fuentes/fuente_amarilla.png" alt="fuente_amarilla" class="fuente_amarilla" id="fuenteAmarilla">
            </a>
        </div>

        <!--Div de la fuente roja-->
        <div class="font-img">
            <a href="introRescateDelMar.html">
                <img src="../media/img_fuentes/fuente_roja.png" alt="fuente_roja" class="fuente_roja" id="fuenteRoja">
            </a>
        </div>

        <!--Div de la fuente azul-->
        <div class= "font-img">
            <a href="introAlRioTroncos.html">
                <img src="../media/img_fuentes/fuente_azul.png" alt="fuente_azul" class="fuente_azul" id="fuenteAzul">
            </a>
        </div>

        <!--Div de la imagen de Anna-->
        <div class="elementosCentrados div-texto-fuentes">
            <p id="p-mensaje">¡Que empiece la investigación!</p>
        </div>
        <div>
            <img src="../media/img_anna/annaFace.png" class="annaFace-img" alt="AnnaFace" id="annaFuente"> 
        </div>
    </main>

    <script src="../js/mensajeFuentes.js"></script>
</body>
</html>