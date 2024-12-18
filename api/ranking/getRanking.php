<?php

require_once('../../php/bd.php');

header('Content-Type: application/json');

try {
    $conexion = openDB();

    // Obtener el parámetro 'juego' desde la URL (si existe)
    $idJuego = isset($_GET['juego']) ? intval($_GET['juego']) : null;

    // Construir la consulta SQL con JOIN para incluir el nombre del usuario
    if ($idJuego) {
        $sentenciaText = "
            SELECT r.puntuacion, u.nombre AS usuario_nombre
            FROM ranking r
            JOIN usuario u ON r.usuario_idUsuario = u.idUsuario
            WHERE r.juegos_idJuego = :idJuego
            ORDER BY r.puntuacion DESC";
        $stmt = $conexion->prepare($sentenciaText);
        $stmt->bindParam(':idJuego', $idJuego, PDO::PARAM_INT);
    } else {
        // Si no hay parámetro 'juego', devuelve todos los rankings
        $sentenciaText = "
            SELECT r.puntuacion, u.nombre AS usuario_nombre
            FROM ranking r
            JOIN usuario u ON r.usuario_idUsuario = u.idUsuario
            ORDER BY r.puntuacion DESC";
        $stmt = $conexion->prepare($sentenciaText);
    }

    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Retornar los resultados como JSON
    echo json_encode($result);

} catch (PDOException $e) {
    http_response_code(500); // Error del servidor
    echo json_encode(["error" => "Error al obtener los rankings: " . $e->getMessage()]);
} finally {
    closeDB();
}

?>
