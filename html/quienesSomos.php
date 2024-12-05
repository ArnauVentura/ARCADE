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
    <title>¿Quiénes somos?</title>
    <link rel="stylesheet" href="../css/Style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Handlee&display=swap" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
</head>
<body class="bg-Img" id="bodyQuienesSomos img-clase">
    <header class="encabezado-general">
        <a class="atras" href="javascript:history.back()">
            <img src="../media/flecha.png" alt="Volver" class="img-header">
        </a>
    </header>
    <main>
        <div class="elementos-centrados div-titulos">
            <h1 class="estilo-titulo">¿QUIÉNES SOMOS?</h1>
        </div>
        <div class="elementos-centrados" id="div-quienes-somos">
            <p>
            ¡Hola! Somos un grupo llamado Arcade, formado por Carla Cayero, Desirée Romero 
            y Arnau Ventura, estudiantes del Centre d'Estudis Politécnics, cursando el ciclo 
            de Desarrollo de Aplicaciones Web (DAW).
            Hemos estado trabajando en un proyecto, que consiste en la creación de juegos 
            interactivos que nos han solicitado los niños del IE Tres Fonts de Les Corts. 
            </p>
        </div>
        <section id="container-quienes-somos">
            <article class="div-miembro">
                <img src="../media/img_quienes_somos/carla.png" class="img-miembro" alt="imagen Carla">
                <h2>Carla Cayero</h2>
                <p class="txt-miembro">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt 
                    eu dolor non aliquam. Fusce sit amet dui odio. Cras lobortis, nunc vel 
                    tincidunt lobortis, diam massa eleifend felis, ut luctus risus elit at 
                    magna. 
                </p>
                <a href="#" target="_blank">
                    <img src="../media/img_quienes_somos/linkedln.png" alt="Linkedln" class="img-logo-linkedln">
                </a>
            </article>
            <article class="div-miembro ">
                <img src="../media/img_quienes_somos/desi.png" class="img-miembro" alt="imagen Carla">
                <h2>Desirée Romero</h2>
                <p class="txt-miembro">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt 
                    eu dolor non aliquam. Fusce sit amet dui odio. Cras lobortis, nunc vel 
                    tincidunt lobortis, diam massa eleifend felis, ut luctus risus elit at 
                    magna.
                </p>
                <a href="#" target="_blank">
                    <img src="../media/img_quienes_somos/linkedln.png" alt="Linkedln" class="img-logo-linkedln">
                </a>
            </article>
            <article class="div-miembro ">
                <img src="../media/img_quienes_somos/arnau.png" class="img-miembro" alt="imagen Carla">
                <h2>Arnau Ventura</h2>
                <p class="txt-miembro">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt 
                    eu dolor non aliquam. Fusce sit amet dui odio. Cras lobortis, nunc vel 
                    tincidunt lobortis, diam massa eleifend felis, ut luctus risus elit at 
                    magna.
                </p>
                <a href="#" target="_blank">
                    <img src="../media/img_quienes_somos/linkedln.png" alt="Linkedln" class="img-logo-linkedln">
                </a>
            </article>
        </section>
    </main>
    <footer id="footer-quienes-somos">
        <a href="https://politecnics.barcelona/" target="_blank">
            <img src="../media/img_quienes_somos/cep.png" class="img-logo" alt="imagen Politécnics">
        </a>        
        <a href="https://agora.xtec.cat/ietfc/" target="_blank">
            <img src="../media/img_quienes_somos/lesCorts.png" class="img-logo" alt="imagen Les Corts">
        </a>
    </footer>
</body>
</html>