<?php
include_once './php/bd.php';
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anna y el misterio de las 3 fuentes</title>
    <link rel="stylesheet" href="./css/Style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Handlee&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Inter" rel='stylesheet'>
</head>
<body class="bg-Img img-escuela">
    <header class="encabezado-pg-principal">
        <ul class="menu-idiomas">
            <li>
                <img src="media/img_idiomas/esp.png" alt="Seleccionar idioma" id="bandera-seleccionada" class="img-header" onclick="alternarMenu()">
                <ul>
                    <li onclick="seleccionarIdioma('eng')">
                        <div class="opcion-idioma">
                            <img src="media/img_idiomas/eng.png" alt="Inglés" class="img-header" >
                            <span class="texto-imagen">ENG</span>
                        </div>
                    </li>
                    <li onclick="seleccionarIdioma('esp')">
                        <div class="opcion-idioma">
                            <img src="media/img_idiomas/esp.png" alt="Español" class="img-header">
                            <span class="texto-imagen">ESP</span>
                        </div>
                    </li>
                    <li onclick="seleccionarIdioma('cat')">
                        <div class="opcion-idioma">
                            <img src="media/img_idiomas/cat.png" alt="Catalán" class="img-header">
                            <span class="texto-imagen">CAT</span>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </header>
    <main class="main-pg-principal">
        <div class="elementos-centrados div-titulos div-titulo-anna">
            <h1 class="estilo-titulo" id="tituloAnna">ANNA</h1>
            <h2 class="estilo-titulo" id="subtituloAnna">Y EL MISTERIO DE LAS 3 FUENTES</h2>
        </div>
        <form method="POST" action="./php/login.php">
            <div class="elementos-centrados">
                <input type="text" name="nombre" class="txt-input boton-pequeño estilos-generales" id="nombreUsuario" placeholder="Nombre de usuario">
                <input type="password" name="contrasenya" class="txt-input boton-pequeño estilos-generales" id="contrasenya" placeholder="Contraseña">
            </div>
            <div class="elementos-centrados div-form-boton">
                <input type="submit" class="boton-pequeño animacion-boton estilos-generales" id="iniciarSesion" value="INICIAR SESIÓN">
                <button type="button" class="boton-pequeño animacion-boton estilos-generales" id="registrarse" onclick="openPopup()">
                    REGISTRARSE
                </button>
            </div>
        </form>
        <hr id="hr-pg-principal">
        <div class="div-form-boton">
            <a href="./html/jugar.html" class="boton-pequeño animacion-boton estilos-generales" id="jugarSinRegistro">
                JUGAR SIN REGISTRO
            </a>
            <a href="./html/quienesSomos.php" class="boton-pequeño animacion-boton estilos-generales" id="conocenos">
                CONÓCENOS
            </a>
        </div>
        <div class="popup-overlay" id="popupOverlay">
            <div class="popup-content elementos-centrados">
                <button class="close-btn" onclick="closePopup()">X</button>
                <h3 class="styleTitulo" id="popupTitulo">REGISTRO</h3>
                <form action="./php/controllers.php" method="POST">
                    <div>
                        <label for="nombre" id="popupNombre">Nombre</label>
                        <div>
                            <input type="text" id="nombre" name="nombre" class="txt-input boton-pequeño estilos-generales" placeholder="Nombre" required>
                        </div>
                    </div>
                    <div>
                        <label for="contrasenya" id="popupContrasenya">Contraseña</label>
                        <div>
                            <input type="password" id="contrasenya" name="contrasenya" class="txt-input boton-pequeño estilos-generales" placeholder="Contraseña" required>
                        </div>
                    </div>
                    <div>
                    <button type="submit" name="insert" class="boton-pequeño estilos-generales" id="popupAceptar">
                        ACEPTAR
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </main>
<script src="./js/idiomas.js"></script>
<script src="./js/traducciones.js"></script>
<script src="./js/popup.js"></script>
</body>
</html>