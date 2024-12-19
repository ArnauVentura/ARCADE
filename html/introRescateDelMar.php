<?php
session_start();

if (isset($_SESSION['nombre'])) {
    $usuario = $_SESSION['nombre'];
} else {
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
    <link rel="stylesheet" href="../css/Style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
    <title>Intro Rescate del mar</title>
</head>
<body class="introduccion">
    <header class="encabezado-general">
        <div class="estilos-generales header-juegos-intro">
            <a class="atras" href="javascript:history.back()">
                <img src="../media/flecha.png" alt="Volver" class="img-header">
            </a>
            <div class="titulo-juego elementos-centrados">
                <h3 id="tituloJuegoDesi">RESCATE DEL MAR</h3>
            </div>
        </div>
    </header>
    <main>
        <div class="elementos-centrados div-intro-juegos">
            <p class="p-mensaje" id="txtIntroDesi"> 
                La basura va cayendo hacia el fondo, y si no la atrapas a tiempo, ¡pierdes una de las 3 vidas 
                que tienes! Usa las flechas del teclado para mover a Anna hacia la izquierda o hacia la 
                derecha y atrapa la basura antes de que sea tarde. Al principio caerá despacio, pero luego será 
                más rápido, así que prepárate. ¡Ayuda a Anna a dejar el mar limpio y bonito otra vez!
            </p>
            <div class="conjunto-img-intro">
                <div class="conjunto-img-basura">
                    <img class="img-basura" src="../media/img_intro/neumatico.png" alt="neumatico">
                    <img class="img-basura" src="../media/img_intro/bolsa.png" alt="bolsa">
                    <img class="img-basura" src="../media/img_intro/botella.png" alt="botella">
                    <img class="img-basura" src="../media/img_intro/lata.png" alt="lata">
                </div>
                <div class="imagen-instucciones">
                    <img class="img-basura" src="../media/img_intro/teclas.png" alt="instrucciones">
                </div>
            </div>
        </div>
        <a class="estilos-generales boton-pequeño animacion-boton jugar-button" id="botonJugar" href="../Juegos/RescateAlMar/rescateAlMar.php"> 
            JUGAR 
        </a> 
    </main>
    <script src="../js/idiomas.js"></script>
    <script src="../js/traducciones.js"></script>
</body>
</html>