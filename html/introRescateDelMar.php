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
                En el Delta del Llobregat, varios barcos han soltado mucha basura y el mar 
                se ha ensuciado. Anna, con su traje de submarinista, se ha lanzado al agua 
                para recoger toda esa basura para dejar el mar limpio y bonito otra vez. 
                La basura va cayendo poco a poco hacia el fondo, y si no la atrapas a tiempo, 
                ¡pierdes una vida! Al principio cae despacio, pero cada vez irá más rápido. 
                Anna tiene 3 vidas para completar su misión ¡Necesita tu ayuda!
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