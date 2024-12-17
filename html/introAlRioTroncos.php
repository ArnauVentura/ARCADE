
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
    <title>Intro Al río troncos</title>
</head>
<body class="introduccion">
    <header class="encabezado-general">
        <div class="estilos-generales header-juegos-intro">
            <a class="atras" href="javascript:history.back()">
                <img src="../media/flecha.png" alt="Volver" class="img-header">
            </a>
            <div class="titulo-juego elementos-centrados">
                <h3 id="tituloJuegoCarla">AL RIO TRONCOS</h3>
            </div>
        </div>
    </header>
    <main>    
        <div class="elementos-centrados div-intro-juegos">
            <p class="p-mensaje" id="txtIntroCarla"> 
                Este es un juego de rompecabezas donde debes ordenar moviendo los cuadrados con las partes partidas de la imagen 
                hasta completarla en el orden correcto. Puedes mover un cuadrado si está junto el espacio vacío; al hacer clic en 
                él cambiará de lugar con el espacio. 
            </p>
            <img class= "elementos-centrados cursor-mano" src="../media/img_landing/cursor-mano.png">
        </div>
        <a class="boton-pequeño estilos-generales animacion-boton jugar-button" id="botonJugar" href="../Juegos/puzzle/puzzle.php">
             JUGAR 
        </a>   
    </main>
    <script src="../js/idiomas.js"></script>
    <script src="../js/traducciones.js"></script>
</body>
</html>