<?php

    include_once('./bd.php');

    if(isset($_POST['INSERT'])){
        registro($_POST['nombre'], $_POST['contrasenya']);
        header('../html/fuentes.html');
    }

    elseif (isset($_POST['UPDATE'])) {
        $idUsuario = $_POST['idUsuario'];
        $nombre = $_POST['nombre'];
        $contrasenya = $_POST['contrasenya'];
        $rol_idROL = $_POST['rol_idROL'];

        modificarUsuario($idUsuario, $nombre, $contrasenya, $rol_idROL);
    }

    elseif(isset($_POST['DELETE'])){
        $idUsuario = $_POST['idUSUARIO'];
        borrarUsuario($idUsuario);

        header('./administracion.php');
    }
?>