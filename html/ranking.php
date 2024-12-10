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
<!-- FALTA EL PHP -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ranking</title>
    <link rel="stylesheet" href="../css/Style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Handlee&display=swap" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
</head>
<body class="bg-Img" id="img-ranking">
    <header class="encabezado-general">
        <a class="atras" href="javascript:history.back()">
            <img src="../media/flecha.png" alt="Volver" class="img-header">
        </a>
        <form method="POST" action="../php/controllers.php">
        <button type="submit" name="cerrar-sesion" class="boton-cerrar-sesion">
            <img src="../media/cerrar-sesion.png" alt="Cerrar Sesión" class="img-header">
        </button>
    </form>
    </header>
    <main>
        <div class="elementos-centrados div-titulos">
            <h1 class="estilo-titulo">RANKING</h1>
        </div>
        <div id="container-quienes-somos">
            <div class="botones_ranking">
                <button class="boton-pequeño estilos-generales boton-largo" id="boton-llaves" href="">
                    EN BUSCA DE LAS LLAVES
                </button>
                <button class="boton-pequeño estilos-generales boton-largo" id="boton-rescate" href="">
                    RESCATE DEL MAR
                </button>
                <button class="boton-pequeño estilos-generales boton-largo" id="boton-puzzle" href="">
                    AL RIO TRONCOS
                </button>
                <button class="boton-pequeño estilos-generales boton-largo animacion-boton" id="boton-total" href="">
                    RANKING TOTAL
                </button>
            </div>
            <div class="ranking">
                <div class="div-jugador">
                    <p>PUESTO </p>
                    <p>JUGADOR</p>
                    <p>PUNTOS</p>
                </div>
                <div class="div-jugador">
                    <p>1.</p>
                    <div class="jugador-puntos">
                        <p>jugador</p>
                        <p>puntos</p>
                    </div>

                    
                </div>
                <div class="div-jugador">
                    <p>2. </p>
                    <p>jugador</p>
                    <p>puntos</p>
                </div>
                <div class="div-jugador">
                    <p>3. </p>
                    <p>jugador</p>
                    <p>puntos</p>
                </div>
                <div class="div-jugador">
                    <p>4. </p>
                    <p>jugador</p>
                    <p>puntos</p>
                </div>
                <div class="div-jugador">
                    <p>5. </p>
                    <p>jugador</p>
                    <p>puntos</p>
                </div>
            </div>
        </div>
    </main>
    <script src="../js/botones.js"></script>
</body>
</html>