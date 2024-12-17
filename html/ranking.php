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
    <button class="boton-pequeño estilos-generales boton-largo" id="boton-llaves" data-juego="1">
        EN BUSCA DE LAS LLAVES
    </button>
    <button class="boton-pequeño estilos-generales boton-largo" id="boton-rescate" data-juego="2">
        RESCATE DEL MAR
    </button>
    <button class="boton-pequeño estilos-generales boton-largo" id="boton-puzzle" data-juego="3">
        AL RIO TRONCOS
    </button>
    <button class="boton-pequeño estilos-generales boton-largo animacion-boton" id="boton-total" data-juego="0">
        RANKING TOTAL
    </button>
</div>

            <table id="ranking" class="ranking">
                <!-- <tr class="div-jugador">
                    <th id="posicion">POSICIÓN</th>
                    <th id="jugador">JUGADOR</th>
                    <th id="puntuacion">PUNTUACIÓN</th>
                </tr> -->
                <!-- <?php foreach ($ranking as $index => $fila): ?>
                    <tr class="div-jugador">
                        <td><?php echo $index + 1; ?></td>
                        <td><?php echo htmlspecialchars($fila['nombre']); ?></td>
                        <td><?php echo $fila['puntuacion']; ?></td>
                    </tr>
                <?php endforeach; ?> -->
            </table>
        </div>
    </main>
    <script src="../js/ranking.js"></script>
    <script src="../js/botones.js"></script>
</body>
</html>