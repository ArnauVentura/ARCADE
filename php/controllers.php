<?php
    include_once('./bd.php');

    if (isset($_POST['insert'])) {
        if (!empty($_POST['nombre']) && !empty($_POST['contrasenya'])) {
            registro($_POST['nombre'], $_POST['contrasenya']);
            header('Location: ../html/fuentes.html');
            exit();
        } else {
            echo "Faltan datos para el registro.";
        }
    }

    elseif (isset($_POST['update'])) {
        if (!empty($_POST['idUsuario']) && !empty($_POST['nombre']) && !empty($_POST['contrasenya']) && !empty($_POST['rol_idRol'])) {
            $idUsuario = $_POST['idUsuario'];
            $nombre = $_POST['nombre'];
            $contrasenya = $_POST['contrasenya'];
            $rol_idRol = $_POST['rol_idRol'];

            modificarUsuario($idUsuario, $nombre, $contrasenya, $rol_idRol);
            header('Location: ./administracion.php');
            exit();
        } else {
            echo "Faltan datos para la actualización.";
        }
    }

    elseif (isset($_POST['delete'])) {
        $idUsuario = $_POST['idUsuario'];
        borrarUsuario($idUsuario);
        header('Location: ./administracion.php');
        exit();
    }
?>
