<?php
session_start();

include_once './bd.php';

$conexion = openDB();

$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$contrasenya = isset($_POST['contrasenya']) ? $_POST['contrasenya'] : '';

// Verificar si los datos llegan correctamente
if (empty($nombre) || empty($contrasenya)) {
    die("Faltan datos de inicio de sesión");
}

// Prepara la consulta para obtener el usuario
$stmt = $conexion->prepare('SELECT * FROM usuario WHERE nombre = ?');
$stmt->execute([$nombre]);
$datos = $stmt->fetch(PDO::FETCH_OBJ);

if ($datos === FALSE) {
    header('Location: ../index.php');
} elseif ($stmt->rowCount() == 1) {
    

if ($datos && password_verify($contrasenya, $datos->contrasenya)) {
    // Contraseña válida
    $_SESSION['nombre'] = $datos->nombre;
    $_SESSION['rol_idRol'] = $datos->rol_idRol;

    if ($datos->rol_idRol == 2 || $datos->rol_idRol == 3) {
        header('Location: ./administracion.php');
        exit;
    } else {
        header('Location: ../html/jugarRanking.php');
        exit;
    }
} else {
    // Contraseña o usuario incorrectos
    header('Location: ../index.php');
    exit;
}
$conexion = null;
?>
