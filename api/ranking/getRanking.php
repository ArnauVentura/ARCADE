<?php

require_once('../../php/bd.php');

header('Content-Type: application/json');


    $conexion = openDB();

    $sentenciaText = "SELECT * FROM ranking ORDER BY puntuacion DESC";
    $stmt = $conexion->prepare($sentenciaText);
    $stmt->execute(); 

    
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    
    echo json_encode($result);

?>
