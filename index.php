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
    <link href="https://fonts.googleapis.com/css?family=Inter" rel='stylesheet'>
</head>

<?php
include_once './php/bd.php';
?>

<body class="bg_Img imgEscuela" id="body_MainMenu">
    
    <header class="encabezado-pg-principal">
        <ul class="menu-idiomas">
            <li>
                <img src="media/img_idiomas/esp.png" alt="Seleccionar idioma" id="bandera-seleccionada" class="bandera-idioma" onclick="toggleMenu()">
                <ul>
                    <li onclick="selectLanguage('eng')">
                        <div class="opcion-idioma">
                            <img src="media/img_idiomas/eng.png" alt="Inglés" class="bandera-idioma" >
                            <span class="texto-imagen">ENG</span>
                        </div>
                    </li>
                    <li onclick="selectLanguage('esp')">
                        <div class="opcion-idioma">
                            <img src="media/img_idiomas/esp.png" alt="Español" class="bandera-idioma">
                            <span class="texto-imagen">ESP</span>
                        </div>
                    </li>
                    <li onclick="selectLanguage('cat')">
                        <div class="opcion-idioma">
                            <img src="media/img_idiomas/cat.png" alt="Catalán" class="bandera-idioma">
                            <span class="texto-imagen">CAT</span>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </header>

    <main id="main_mainMenu">
        <div class="elementosCentrados whiteBG div_SizeTitular">
            <h1 class="styleTitulo">ANNA</h1>
            <h2 class="styleTitulo">Y EL MISTERIO DE LAS 3 FUENTES</h2>
        </div>
        <form method="POST" action="./php/login.php">
            <div class="elementosCentrados">
                <input type="text" name="nombre" class="txt_Inputs short_style_a_button" placeholder="Nombre de usuario">
                <input type="password" name="contrasenya" class="txt_Inputs short_style_a_button" placeholder="Contraseña">
            </div>

            <div class="elementosCentrados divButtons_Formulario" id="">
                <input type="submit" class="short_style_a_button animacion_boton" value="INICIAR SESIÓN"></input>
                <button type="button" class="short_style_a_button animacion_boton" onclick="openPopup()">REGISTRARSE</button>
            </div>
        </form>
            <hr id="hr_mainMenu">
            <div class="divButtons_Formulario">
                <a href="./html/jugar.html" class="short_style_a_button animacion_boton">JUGAR SIN REGISTRO</a>

                <a href="./html/quienesSomos.php" class="short_style_a_button animacion_boton">CONÓCENOS</a>
            </div>
        </div>
        <div class="popup-overlay" id="popupOverlay">
            <div class="popup-content elementosCentrados">
                <button class="close-btn" onclick="closePopup()">X</button>
                <h3 class="styleTitulo">REGISTRO</h3>
                <form action="./php/controllers.php" method="POST">
                    <div>
                        <label for="nombre">Nombre</label>
                        <div>
                            <input type="text" id="nombre" name="nombre" class="txt_Inputs short_style_a_button" placeholder="Nombre" required>
                        </div>
                    </div>
                    <div>
                        <label for="contrasenya">Contraseña</label>
                        <div>
                            <input type="password" id="contrasenya" name="contrasenya" class="txt_Inputs short_style_a_button" placeholder="Contraseña" required>
                        </div>
                    </div>
                    <div>
                        <button type="submit" name="insert" class="short_style_a_button">ACEPTAR</button>
                    </div>
                </form>
            </div>
        </div>
    </main>


<script src="./js/idiomas.js"></script>
<script src="./js/popup.js"></script>
</body>
</html>