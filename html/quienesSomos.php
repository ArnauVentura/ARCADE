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
<body class="bg-Img" id="img-clase">
    <header class="encabezado-general">
        <a class="atras" href="javascript:history.back()">
            <img src="../media/flecha.png" alt="Volver" class="img-header">
        </a>
    </form>
    </header>
    <main>
        <div class="elementos-centrados div-titulos">
            <h1 class="estilo-titulo" id="tituloPrincipal">¿QUIÉNES SOMOS?</h1>
        </div>
        <div class="elementos-centrados" id="div-quienes-somos">
            <p id="descripcionProyecto">
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
                <h2 id="nombreCarla">Carla Cayero</h2>
                <p class="txt-miembro" id="descripcionCarla">
                    ¿Sabías que cuando era pequeña, me encantaba dibujar? Dibujaba monstruos, princesas y naves espaciales. Ahora, en lugar de dibujar, ¡creo mundos enteros en la web! Es como tener un lienzo mágico donde puedo hacer realidad todas mis ideas.
                </p>
                <a href="https://www.linkedin.com/in/carlacayerohernandez " target="_blank">
                    <img src="../media/img_quienes_somos/linkedln.png" alt="Linkedln" class="img-logo-linkedln">
                </a>
            </article>
            <article class="div-miembro ">
                <img src="../media/img_quienes_somos/desi.png" class="img-miembro" alt="imagen Desi">
                <h2 id="nombreDesi" >Desirée Romero</h2>
                <p class="txt-miembro" id="descripcionDesi">
                    Me especializo en front-end y disfruto creando interfaces atractivas y funcionales. Este proyecto me ha permitido diseñar un juego interactivo que emocione y divierta a los niños del IE Tres Fonts de Les Corts.
                </p>
                <a href="#" target="_blank">
                    <img src="../media/img_quienes_somos/linkedln.png" alt="Linkedln" class="img-logo-linkedln">
                </a>
            </article>
            <article class="div-miembro ">
                <img src="../media/img_quienes_somos/arnau.png" class="img-miembro" alt="imagen Arnau">
                <h2 id="nombreArnau">Arnau Ventura</h2>
                <p class="txt-miembro" id="descripcionArnau">
                Me especializo en back-end y disfruto desarrollando sistemas robustos y eficientes. Este proyecto me ha permitido crear la lógica y la estructura que dan vida a un juego interactivo pensado para emocionar y divertir a los niños del IE Tres Fonts de Les Corts.
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
    <script src="../js/idiomas.js"></script>
    <script src="../js/traducciones.js"></script>
</body>
</html>