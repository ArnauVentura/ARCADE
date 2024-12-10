<?php
session_start();
include_once 'bd.php';  // Archivo donde tienes las funciones para conectar con la base de datos

// Verifica que la puntuación y el ID del jugador estén presentes
if (isset($_POST['puntuacion']) && isset($_SESSION['idUsuario'])) {
    $puntuacion = $_POST['puntuacion'];
    $idUsuario = $_SESSION['idUsuario'];  // Asegúrate de que el ID de usuario esté guardado en la sesión

    // Función para insertar la puntuación en la base de datos
    insertarPuntuacionRanking($idUsuario, 1, $puntuacion);  // El 1 es el ID del juego, cambia si es otro juego

    echo json_encode(['mensaje' => 'Puntuación guardada con éxito']);
} else {
    echo json_encode(['mensaje' => 'Error al guardar la puntuación']);
}
?>