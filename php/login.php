<?php
session_start();

include_once './bd.php';

$conexion = openDB();

$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$contrasenya = isset($_POST['contrasenya']) ? $_POST['contrasenya'] : '';

// Prepara la consulta para obtener el usuario junto con su rol
$stmt = $conexion->prepare('SELECT * FROM usuario WHERE nombre = ? AND contrasenya = ?');
$stmt->execute([$nombre, $contrasenya]);
$datos = $stmt->fetch(PDO::FETCH_OBJ);

if ($datos === FALSE) {
    header('Location: ../index.php');
} elseif ($stmt->rowCount() == 1) {
    $_SESSION['nombre'] = $datos->nombre;
    $_SESSION['rol_idRol'] = $datos->rol_idRol;

    // Redirige según el tipo de rol
    if ($datos->rol_idRol == 2 || $datos->rol_idRol == 3) { // 1 = Admin, 2 = Superadmin
        header('Location: ./administracion.php');
    } else {
        header('Location: ../html/jugarRanking.php');
    }
}

$conexion = closeDB();
?>
