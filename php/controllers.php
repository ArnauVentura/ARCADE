<?php
    session_start();

    include_once('./bd.php');


    if (isset($_POST['cerrar-sesion'])) {
        session_unset(); 
        session_destroy();
        header('Location: ../index.php');
        exit();
    }

    elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (!empty($_POST['usuario_idUsuario']) && !empty($_POST['juegos_idJuego']) && !empty($_POST['puntuacion'])) {
            $usuario_idUsuario = intval($_POST['usuario_idUsuario']);
            $juegos_idJuego = intval($_POST['juegos_idJuego']);
            $puntuacion = intval($_POST['puntuacion']);
    
            // Guardar la puntuación en la base de datos
            if (guardarRanking($usuario_idUsuario, $juegos_idJuego, $puntuacion)) {
                $mensaje = "¡Puntuación guardada con éxito!";
            } else {
                $mensaje = "Error al guardar la puntuación.";
            }
        } else {
            $mensaje = "Datos incompletos.";
        }
    } else {
        $mensaje = "Método no permitido.";
    }
    
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
