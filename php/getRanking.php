<?php

session_start();

require_once('./bd.php');

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

function selectRanking(){
        $conexion = openDB();

        $sentenciaText = "SELECT * from ranking order by puntuacion";
        $stmt = $conexion->prepare($sentenciaText);

        $result = $stmt->fetchAll();

        return $result;
    
}

?>
