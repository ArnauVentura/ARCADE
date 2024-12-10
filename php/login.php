<?php
session_start();
include_once './bd.php';

if (!empty($_POST['nombre']) && !empty($_POST['contrasenya'])) {
    $conexion = openDB();

    // Buscar el usuario por nombre
    $stmt = $conexion->prepare('SELECT * FROM usuario WHERE nombre = :nombre');
    $stmt->bindParam(':nombre', $_POST['nombre'], PDO::PARAM_STR);
    $stmt->execute();

    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($usuario) {
        if (password_verify($_POST['contrasenya'], $usuario['contrasenya'])) {
            // Iniciar sesión
            $_SESSION['idUsuario'] = $usuario['idUsuario'];
            $_SESSION['nombre'] = $usuario['nombre'];
            $_SESSION['rol_idRol'] = $usuario['rol_idRol'];
    
            // Redirigir según el rol
            if ($usuario['rol_idRol'] == 2 || $usuario['rol_idRol'] == 3) {
                header('Location: ../html/administracion.php');
            } else {
                header('Location: ../html/jugarRanking.php');
            }
            exit();
        } else {
            echo "Usuario o contraseña incorrectos.";
        }
    }
    

    $conexion = closeDB();
} else {
    echo "Por favor, completa todos los campos.";
}
?>
