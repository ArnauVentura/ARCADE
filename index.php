<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anna y el misterio de las 4 fuentes</title>
    <link rel="stylesheet" href="./css/Style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Handlee&display=swap" rel="stylesheet">
</head>

<?php
include_once './php/bd.php';
?>

<body class="bg_Img imgEscuela" id="body_MainMenu">
    
    <header>
        <div class="language-selector">
            <!-- Imagen de la bandera principal (idioma actual) -->
            <img src="media/img_idiomas/cat.png" alt="Seleccionar idioma" id="main-flag" class="flag" onclick="toggleMenu()">
    
            <!-- Menú desplegable de idiomas -->
            <div id="language-menu" class="menu">
                <div class="div_Bandera">
                    <img src="media/img_idiomas/eng.png" alt="Inglés" class="flag" onclick="selectLanguage('eng')">
                    <p>ENG</p>
                </div>
                <div class="div_Bandera">
                    <img src="media/img_idiomas/esp.png" alt="Español" class="flag" onclick="selectLanguage('esp')">
                    <p>ESP</p>
                </div>
                <div class="div_Bandera">
                    <img src="media/img_idiomas/cat.png" alt="Catalán" class="flag" onclick="selectLanguage('cat')">
                    <p>CAT</p>
                </div>
            </div>
        </div>
    </header>

    <main id="main_mainMenu">
        <div class="elementosCentrados whiteBG div_SizeTitular">
            <h1 class="styleTitulo">ANNA</h1>
            <h2 class="styleTitulo">Y EL MISTERIO DE LAS 4 FUENTES</h2>
        </div>
        <form method="POST" action="./php/login.php">
            <div class="elementosCentrados">
                <input type="text" name="nombre" class="txt_Inputs short_style_a_button" placeholder="Nombre de usuario">
                <input type="password" name="contrasenya" class="txt_Inputs short_style_a_button" placeholder="Contraseña">
            </div>

            <div class="elementosCentrados divButtons_Formulario" id="">
                <input type="submit" class="short_style_a_button" value="INICIAR SESIÓN"></input>
                <button class="short_style_a_button" href="#">REGISTRARSE</button>
            </div>
        </form>
            <hr id="hr_mainMenu">
            <div class="divButtons_Formulario">
                <a href="./html/fuentes.html" class="short_style_a_button">JUGAR SIN REGISTRO</a>
                <a href="./html/quienesSomos.html" class="short_style_a_button">CONÓCENOS</a>
            </div>
        </div>
    </main>


<script src="./js/idiomas.js"></script>
</body>
</html>