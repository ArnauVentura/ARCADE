<?php
session_start();
if (!isset($_SESSION['nombre'])) {
    header('Location: ../index.php'); // Redirige al inicio de sesión si no está autenticado
    exit();
}
?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fuentes</title>
    <link rel="stylesheet" href="../css/Style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Handlee&display=swap" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
   
</head>
<body class="bg_Img imgBaseball" id="body_ranking">
    <header class="encabezado_general">
            <a class="atras" href="./jugarRanking.html">
                <img src="../media/flecha.png" alt="Volver" class="flecha-img">
            </a>
    </header>
    <div id="mainDiv_Ranking">
        <div class="divSecundario elementosCentrados" id="divSecundarioLeft_Ranking">
            <button class="short_style_a_button large_style_a_button" id="buttonRankning_Juego2" href="">EN BUSCA DE LAS LLAVES</button>
            <button class="short_style_a_button large_style_a_button" id="buttonRankning_Juego3" href="">RESCATE DEL MAR</button>
            <button class="short_style_a_button large_style_a_button" id="buttonRankning_Juego4" href="">AL RIO TRONCOS</button>
            <button class="short_style_a_button large_style_a_button" id="buttonRankning_JuegoTotal" href="">RANKING TOTAL</button>
        </div>

        <div class="divSecundario" id="divSecundarioRight_Ranking">
            <div class="puntosPersonaje">
                <img src="../media/img_landing/gmail_Logo.png" alt="">
                <div class="whiteBG">
                    <p>MARC BOSCH</p>
                    <p> - </p>
                    <p>14:30</p>
                </div>
            </div>
            <div class="puntosPersonaje">
                <img src="../media/img_landing/gmail_Logo.png" alt="">
                <div class="whiteBG">
                    <p>MARC BOSCH</p>
                    <p> - </p>
                    <p>14:30</p>
                </div>
            </div>
            <div class="puntosPersonaje">
                <img src="../media/img_landing/gmail_Logo.png" alt="">
                <div class="whiteBG">
                    <p>MARC BOSCH</p>
                    <p> - </p>
                    <p>14:30</p>
                </div>
            </div>
            
        </div>
    </div>
    
    
</body>
</html>