<?php

session_start();

require_once('./bd.php');

header('Content-Type: application/json');

// Función para guardar el ranking
function guardarRanking($usuario_idUsuario, $juegos_idJuego, $puntuacion) {
    try {
        $conexion = openDB();

        $sentenciaText = "INSERT INTO ranking (usuario_idUsuario, juegos_idJuego, puntuacion) VALUES (:usuario_idUsuario, :juegos_idJuego, :puntuacion)";
        $stmt = $conexion->prepare($sentenciaText);

        $stmt->bindParam(':usuario_idUsuario', $usuario_idUsuario, PDO::PARAM_INT);
        $stmt->bindParam(':juegos_idJuego', $juegos_idJuego, PDO::PARAM_INT);
        $stmt->bindParam(':puntuacion', $puntuacion, PDO::PARAM_INT);

        $stmt->execute();

        closeDB();

        return true; 
    } catch (PDOException $e) {
        echo "Error al guardar el ranking: " . $e->getMessage();
        return false;
    }
}

// Función para seleccionar los rankings
function selectRanking($juego = null) {
    $conexion = openDB();

    // Si se ha pasado un ID de juego, filtra por ese juego
    if ($juego) {
        $sentenciaText = "SELECT r.*, u.nombre 
                          FROM ranking r
                          JOIN usuarios u ON r.usuario_idUsuario = u.idUsuario
                          WHERE r.juegos_idJuego = :juego
                          ORDER BY r.puntuacion DESC";
        $stmt = $conexion->prepare($sentenciaText);
        $stmt->bindParam(':juego', $juego, PDO::PARAM_INT);
    } else {
        // Si no se pasa un juego, trae todos los rankings
        $sentenciaText = "SELECT r.*, u.nombre 
                          FROM ranking r
                          JOIN usuarios u ON r.usuario_idUsuario = u.idUsuario
                          ORDER BY r.puntuacion DESC";
        $stmt = $conexion->prepare($sentenciaText);
    }

    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    closeDB();

    return $result;
}

// Recibir el parámetro del juego desde la URL (si existe)
$juegoSeleccionado = isset($_GET['juego']) ? $_GET['juego'] : null;

// Obtener los rankings filtrados por juego (si se seleccionó uno)
$rankings = selectRanking($juegoSeleccionado);

// Retornar los resultados como JSON
echo json_encode($rankings);

?>
