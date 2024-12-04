<?php
function openDB()
{

    $servername = "hostingmysql335.nominalia.com";
    $username = "daw01";
    $pass = "Politecnics2024";

    try {
        $connection = new PDO("mysql:host=$servername;dbname=daw01", $username, $pass);
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $connection;
    } catch (PDOException $e) {
        die('Error: ' . $e->getMessage());
    }
}

function closeDB()
{
    $conexion = null;
}

function errorsMessage($e)
{
    if (!empty($e->errorInfo[1])) {
        switch ($e->errorInfo[1]) {
            case 1062:
                $mensaje = 'registro duplicado';
                break;
            case 1063:
                $mensaje = 'Registro con elementos relacionados';
                break;
            default:
                $mensaje = $e->errorInfo[1] . ' - ' . $e->errorInfo[2];
                break;
        }
    } else {
        switch ($e->getCode()) {
            case 1044:
                $mensaje = "Usuario y/o contraseña incorrectos";
                break;
            case 1049:
                $mensaje = "Base de datos desconocida";
                break;
            case 2002:
                $mensaje = 'No se encuentra el servidor';
                break;
            default:
                $mensaje = $e->getCode() . ' - ' . $e->getMessage();
                break;
        }
    }
    return $mensaje;
}

function getUsuario()
{

    $conexion = openDB();
    $sentenciaText = "SELECT idUsuario, nombre, contrasenya, rol_idRol, tipo FROM usuario INNER JOIN rol ON rol.idRol = usuario.rol_idRol";

    $stmt = $conexion->prepare($sentenciaText);
    $stmt->execute();

    $group = $stmt->fetchAll();

    $conexion = closeDB();
    return $group;
}

function getRoles()
{
    try {
        $conexion = openDB();
        $sentenciaText = "SELECT idRol, tipo FROM rol";

        $stmt = $conexion->prepare($sentenciaText);
        $stmt->execute();

        $roles = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $conexion = closeDB();
        return $roles;
    } catch (PDOException $e) {
        return errorsMessage($e);
    }
}

function getUsuarioPorId($id)
{
    try {
        $conexion = openDB();
        $sentenciaText = "SELECT idUsuario, nombre, contrasenya, rol_idRol FROM usuario WHERE idUsuario = :id";

        $stmt = $conexion->prepare($sentenciaText);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();

        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

        $conexion = closeDB();
        return $usuario;
    } catch (PDOException $e) {
        return errorsMessage($e);
    }
}

function getUsuarioByTipo($userId)
{
    try {
        $conexion = openDB();
        $sentenciaText = 'SELECT * FROM usuario WHERE id = :idTipo';
        $stmt = $conexion->prepare($sentenciaText);
        $stmt->bindParam(':idTipo', $userId, PDO::PARAM_INT);
        $stmt->execute();

        $group = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $conexion = closeDB();
        return $group;
    } catch (PDOException $e) {
        return errorsMessage($e);
    }
}

function registro($nombre, $contrasenya)
{
    try {
        $conexion = openDB();

        $stmt = $conexion->prepare("SELECT * FROM usuario WHERE nombre = :nombre");
        $stmt->bindParam(':nombre', $nombre);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            return false;
        }

        $sentenciaText = "INSERT INTO usuario (nombre, contrasenya, rol_idRol) VALUES (:nombre, :contrasenya, 1)";
        $stmt = $conexion->prepare($sentenciaText);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':contrasenya', $contrasenya);

        $stmt->execute();
        if (!$stmt->execute()) {
            print_r($stmt->errorInfo());
        }

        $conexion = closeDB();

        return true;
    } catch (PDOException $e) {
        return errorsMessage($e);
    }
}

function modificarUsuario($idUsuario, $nombre, $contrasenya, $rol_idRol)
{

    try {
        $conexion = openDB();
        $sentenciaText = "UPDATE usuario SET nombre = :nombre, contrasenya = :contrasenya, rol_idRol = :rol_idRol WHERE idUsuario = :idUsuario";

        $stmt = $conexion->prepare($sentenciaText);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':contrasenya', $contrasenya);
        $stmt->bindParam(':rol_idRol', $rol_idRol);
        $stmt->bindParam(':idUsuario', $idUsuario);

        $stmt->execute();

        closeDB();
    } catch (PDOException $e) {
        return errorsMessage($e);
    }
}


function borrarUsuario($idUsuario)
{

    try {
        $conexion = openDB();
        $sentenciaText = "DELETE FROM usuario WHERE idUsuario = :idUsuario";

        $stmt = $conexion->prepare($sentenciaText);
        $stmt->bindParam(':idUsuario', $idUsuario);
        $stmt->execute();

        $conexion = closeDB();
    } catch (PDOException $e) {
        return errorsMessage($e);
    }



}

function getRanking()
{
    try {
        $conexion = openDB();

        $sentenciaText = 'SELECT r.usuario_idUsuario, u.nombre AS usuario_nombre, r.juegos_idJuego, j.titulo AS juego_titulo, r.puntuacion
            FROM ranking r INNER JOIN  usuario u ON r.usuario_idUsuario = u.idUsuario 
            INNER JOIN juegos j ON r.juegos_idJuego = j.idJuego ORDER BY r.puntuacion DESC';

        $stmt = $conexion->prepare($sentenciaText);
        $stmt->execute();

        $ranking = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $conexion = closeDB();
        return $ranking;

    } catch (PDOException $e) {
        return errorsMessage($e);
    }
}


?>