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
<script>
    const idUsuario = <?php echo json_encode($idUsuario); ?>;
</script>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rescate del mar</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../../css/Style.css">
    <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
</head>
<body>
    <header class="encabezado-general">
        <div class="estilos-generales header-juegos-intro">
            <a class="atras" href="javascript:history.back()">
                <img src="../../media/flecha.png" alt="Volver" class="img-header">
            </a>
            <div class="conjunto-header">
                <div class="puntuacion"></div>
                <div id="corazones"></div>
                <div id="tiempo"></div>
            </div>
        </div>
    </header>
    <main>
        <div>
            <img id="red" src="img/red.png" alt="Red">
        </div>
        <div id="objetos"></div>
    </main>
</body>
<script src="script.js"></script>
</html>

