<?php
session_start();
include_once 'bd.php'; 


if (isset($_POST['puntuacion']) && isset($_SESSION['idUsuario'])) {
    $puntuacion = $_POST['puntuacion'];
    $idUsuario = $_SESSION['idUsuario']; 


    insertarPuntuacionRanking($idUsuario, 1, $puntuacion);

    echo json_encode(['mensaje' => 'Puntuación guardada con éxito']);
} else {
    echo json_encode(['mensaje' => 'Error al guardar la puntuación']);
}
?>