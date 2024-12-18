
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
    <title>Intro En busca de las llaves</title>
</head>
<body class="introduccion">
    <header class="encabezado-general">
        <div class="estilos-generales header-juegos-intro">
            <a class="atras" href="javascript:history.back()">
                <img src="../media/flecha.png" alt="Volver" class="img-header">
            </a>

            <div class="titulo-juego elementos-centrados" id="tituloJuegoArnau">
                <h3>EN BUSCA DE LAS LLAVES</h3>
            </div>
        </div>
    </header>
    <main> 
        <div class="elementos-centrados div-intro-juegos">
            <p class="p-mensaje" id="txtIntroArnau"> 
                Anna se dispone a entrar en el oscuro alcantarillado en busca de las llaves rotas para arreglar el flujo del agua.
                Ayudala ha encontrar todas en el menor tiempo possible haciendo uso de tu linterna!
                Usa el raton para seleccionar la sala en la que buscar y para mover la linterna, para encontrar las llaves 
                rotas hay que hacer clic encima de ellas.
                Mucha suerte!
            </p>
            <div class="conjunto-img-intro">
                <div class="conjunto-img-basura">
                    <img class="img-basura" src="../media/img_intro/linterna.png" alt="linterna" width="50px" height="50px">
                    <img class="img-basura" src="../media/img_intro/Puntero.png" alt="Puntero" width="50px" height="50px">
                </div>
            </div>
        </div>
        <a class="boton-pequeño estilos-generales animacion-boton jugar-button" id="botonJugar" href="../Juegos/En_Busca_De_Las_Llaves/BuscaLlaves.php"> 
            JUGAR 
        </a> 
    </main> 
    <script src="../js/idiomas.js"></script>
    <script src="../js/traducciones.js"></script>
</body>
</html>