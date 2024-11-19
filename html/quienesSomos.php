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
    <title>Document</title>
    <link rel="stylesheet" href="../css/Style.css">
</head>
<body class="bg_Img imgClase" id="bodyQuienesSomos">
    <header>
        <nav class="barraNavegadora">
            <a class="atras" href="../index.html">
                <img src="../media/flecha.png" alt="Volver" class="flecha-img">
            </a>
        </nav>
    </header>
    <main>
        <div class="whiteBG elementosCentrados" id="tituloQuienesSomos">
            <h1 class="styleTitulo">ARCADE</h1>
        </div>
        <p class="elementosCentrados whiteBG" id="p_resumenQuienesSomos">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec risus ligula, tempor eu varius ut, ultricies id nisl.
            Etiam id lacus vitae magna iaculis tristique in feugiat 
            sem. Mauris facilisis orci eu dolor fringilla, id rhoncus 
            est posuere. Proin cursus lorem in porta gravida.</p>

            <div class="divEquipo">
                <div class="divPersona elementosCentrados whiteBG">
                    <img src="../media/img_landing/gmail_Logo.png" alt="" class="img_foto_persona">
                    <h5>Nombre Apellido</h5>
                    <p class="p_textoPersona">Junior de CSS, Senior de la impaciencia. Espero que me apruebe el profesor porque apenas apruevo la vida</p>
                    <div class="div_LogoRedSocial">
                        <a href=""><img src="../media/img_landing/gmail_Logo.png" alt="Gmail" class="logoRedSocial"></a>
                        <a href=""><img src="../media/img_landing/gmail_Logo.png" alt="Instagram" class="logoRedSocial"></a>
                    </div>
                </div>
                <div class="divPersona elementosCentrados whiteBG">
                    <img src="../media/img_landing/gmail_Logo.png" alt="" class="img_foto_persona">
                    <h5>Nombre Apellido</h5>
                    <p class="p_textoPersona">Junior de CSS, Senior de la impaciencia. Espero que me apruebe el profesor porque apenas apruevo la vida</p>
                    <div class="div_LogoRedSocial">
                        <a href=""><img src="../media/img_landing/gmail_Logo.png" alt="Gmail" class="logoRedSocial"></a>
                        <a href=""><img src="../media/img_landing/gmail_Logo.png" alt="Instagram" class="logoRedSocial"></a>
                    </div>
                </div>
                <div class="divPersona elementosCentrados whiteBG">
                    <img src="../media/img_landing/gmail_Logo.png" alt="" class="img_foto_persona">
                    <h5>Nombre Apellido</h5>
                    <p class="p_textoPersona">Junior de CSS, Senior de la impaciencia. Espero que me apruebe el profesor porque apenas apruevo la vida</p>
                    <div class="div_LogoRedSocial">
                        <a href=""><img src="../media/img_landing/gmail_Logo.png" alt="Gmail" class="logoRedSocial"></a>
                        <a href=""><img src="../media/img_landing/gmail_Logo.png" alt="Instagram" class="logoRedSocial"></a>
                    </div>
                </div>
            </div>
    </main>
    <footer id="footer_QuienesSomos">
        <div id="footer_left">
            <img src="../media/img_landing/gmail_Logo.png" alt="">
        </div>
        <div id="footer_Right">
            <img src="../media/img_landing/gmail_Logo.png" alt="">
        </div>
    </footer>
    
    <script src="../css/Style.css"></script>
</body>
</html>