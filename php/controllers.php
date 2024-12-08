<?php
    session_start();

    include_once('./bd.php');

    
    if (isset($_POST['insert'])) {
        if (!empty($_POST['nombre']) && !empty($_POST['contrasenya'])) {
            if (registro($_POST['nombre'], $_POST['contrasenya'])) {
                $_SESSION['usuario'] = $_POST['nombre'];
                header('Location: ../html/jugarRanking.php');
                exit();
            } else {
                echo "Error en el registro: El usuario ya existe.";
            } 
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
