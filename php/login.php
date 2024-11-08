<?php
        session_start();

        include_once './bd.php';

        $conexion = openDB();

        $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
        $contrasenya = isset($_POST['contrasenya']) ? $_POST['contrasenya'] : '';

        $stmt = $conexion->prepare('SELECT * FROM anna.usuario WHERE nombre = ? and contrasenya = ?');
    
        $stmt->execute([$nombre, $contrasenya]);
        $datos = $stmt->fetch(PDO::FETCH_OBJ);
    
        if ($datos === FALSE) {
            header('Location: ../index.php');
        }elseif ($stmt->rowCount() == 1) {
            $_SESSION['nombre'] = $datos->nombre;
            header('Location: ../html/jugarRanking.html');
        }


        $conexion = closeDB();
?>