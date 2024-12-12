<?php
    session_start();

    include_once('./bd.php');


    if (isset($_POST['cerrar-sesion'])) {
        session_unset(); 
        session_destroy();
        header('Location: ../index.php');
        exit();
    }

    elseif ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['juegos_idJuego'], $_POST['puntuacion'])) {
        if (isset($_SESSION['usuario_id'])) { // Verifica que el ID del usuario esté en la sesión
            $usuario_idUsuario = intval($_SESSION['usuario_id']);
            $juegos_idJuego = intval($_POST['juegos_idJuego']);
            $puntuacion = intval($_POST['puntuacion']);
    
            // Guardar la puntuación en la base de datos
            if (guardarRanking($usuario_idUsuario, $juegos_idJuego, $puntuacion)) {
                echo json_encode([
                    "success" => true,
                    "message" => "¡Puntuación guardada con éxito!"
                ]);
            } else {
                echo json_encode([
                    "success" => false,
                    "message" => "Error al guardar la puntuación."
                ]);
            }
        } else {
            echo json_encode([
                "success" => false,
                "message" => "No se encontró un usuario autenticado."
            ]);
            http_response_code(401); // Código HTTP para "No autorizado"
        }
        exit();
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
        if (!empty($_POST['idUsuario']) && !empty($_POST['nombre']) && !empty($_POST['rol_idRol'])) {
            $idUsuario = $_POST['idUsuario'];
            $nombre = $_POST['nombre'];
            $rol_idRol = $_POST['rol_idRol'];
    
            if (!empty($_POST['contrasenya'])) {
                $contrasenya = password_hash($_POST['contrasenya'], PASSWORD_DEFAULT);
            } else {
                $usuario = getUsuarioPorId($idUsuario);
                $contrasenya = $usuario['contrasenya']; 
            }
    
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
