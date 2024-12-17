<?php

require_once('../../php/bd.php');

header('Content-Type: application/json');

try {
    // Abrir conexión a la base de datos
    $conexion = openDB();

    // Obtener datos de la solicitud POST
    $usuario_idUsuario = isset($_POST['usuario_idUsuario']) ? intval($_POST['usuario_idUsuario']) : null;
    $juegos_idJuego = isset($_POST['juegos_idJuego']) ? intval($_POST['juegos_idJuego']) : null;
    $puntuacion = isset($_POST['puntuacion']) ? ($_POST['puntuacion']) : null;

    // Validar que los datos estén completos
    if ($usuario_idUsuario === null || $juegos_idJuego === null || $puntuacion === null) {
        http_response_code(400); // Código HTTP 400: Solicitud incorrecta
        echo json_encode(["error" => "Faltan datos para guardar la puntuación."]);
        exit();
    }

    // Preparar y ejecutar la consulta SQL
    $sentenciaText = "INSERT INTO ranking (usuario_idUsuario, juegos_idJuego, puntuacion) VALUES (:usuario_idUsuario, :juegos_idJuego, :puntuacion)";
    $stmt = $conexion->prepare($sentenciaText);

    error_log("Datos recibidos para insertar: usuario_idUsuario = $usuario_idUsuario, juegos_idJuego = $juegos_idJuego, puntuacion = $puntuacion");

    // $stmt->bindValue(':usuario_idUsuario', 1, PDO::PARAM_INT);
    // $stmt->bindValue(':juegos_idJuego', 1, PDO::PARAM_INT);
    // $stmt->bindValue(':puntuacion', "00:30", PDO::PARAM_STR);
    
    $stmt->bindParam(':usuario_idUsuario', $usuario_idUsuario, PDO::PARAM_INT);
    $stmt->bindParam(':juegos_idJuego', $juegos_idJuego, PDO::PARAM_INT);
    $stmt->bindParam(':puntuacion', $puntuacion, PDO::PARAM_STR);

    // $stmt->bindValue(':usuario_idUsuario', $usuario_idUsuario, PDO::PARAM_INT);
    // $stmt->bindValue(':juegos_idJuego', $juegos_idJuego, PDO::PARAM_INT);
    // $stmt->bindValue(':puntuacion', $puntuacion, PDO::PARAM_STR);

    $stmt->execute();

    // Devolver respuesta de éxito
    http_response_code(200); // Código HTTP 200: Éxito
    echo json_encode(["success" => true, "message" => "Puntuación guardada correctamente."]);

} catch (PDOException $e) {
    error_log($e->getMessage());
    // Manejar errores
    http_response_code(500); // Código HTTP 500: Error interno del servidor
    echo json_encode(["error" => "Error al guardar la puntuación: " . $e->getMessage()]);
} finally {
    // Cerrar conexión a la base de datos si es necesario
    closeDB();
}

?>
