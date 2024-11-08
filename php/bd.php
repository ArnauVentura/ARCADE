<?php
function openDB(){

$servername = "localhost";
$username = "root";
$password = "";


$conexion = new PDO("mysql:host=$servername;dbname=anna", $username, $password);
$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$conexion->exec("set names utf8");

return $conexion;
}

function closeDB()
{
    $conexion = null;
}

function errorsMessage($e)
{
    if (!empty($e->errorInfo[1]))
        {
            switch ($e->errorInfo[1])
            {
                case 1062:
                    $mensaje = 'registro duplicado';
                    break;
                case 1062:
                    $mensaje = 'Registro con elementos relacionados';
                    break;
                default:
                    $mensaje = $e->errorInfo[1] . ' - ' . $e->errorInfo[2];
                    break;
            }
        }
        else{
            switch ($e->getCode()) 
            {
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

function getUsuario(){
    
    $conexion = openDB();
    $sentenciaText = "SELECT nombre, contrasenya, rol_idROL, tipo FROM anna.usuario INNER JOIN anna.rol ON anna.rol.idROL = anna.usuario.rol_idROL";

    $stmt = $conexion ->prepare($sentenciaText);
    $stmt->execute();

    $group = $stmt->fetchAll();

    $conexion = closeDB();
    return $group;
}

function getUsuarioByTipo($userId){
    
    $conexion = openDB();
    $sentenciaText = 'SELECT * FROM anna.usuario WHERE id = :idTipo';
    $stmt = $conexion->prepare($sentenciaText);
    $stmt->bindParam(':idTipo', $userId);
    $stmt = execute();

    $group = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $conexion = closeDB();
    return $group;
}
    


function registro($nombre, $contrasenya){

    $conexion = openDB();

    $sentenciaText = "INSERT INTO usuario (nombre, contrasenya, rol_idROL) VALUES (:nombre, :contrasenya, 1)";
    $stmt = $conexion->prepare($sentenciaText);
    $stmt->bindParam(':nombre', $nombre);
    $stmt->bindParam(':contrasenya', $contrasenya);

    $stmt->execute();

    $conexion = closeDB();
}

function modificarUsuario($idUsuario, $nombre, $contrasenya, $rol_idROL){

    $conexion = openDB();
    $sentenciaText = "UPDATE FROM anna.usuario SET nombre = :nombre, contrasenya = :contrasenya, rol_idROL = :rol_idROL WHERE idUSUARIO = :idUSUARIO";

    $stmt = $conexion->prepare($sentenciaText);
    $stmt->bindParam(':name', $nombre);
    $stmt->bindParam(':contrasenya', $contrasenya);
    $stmt->bindParam(':rol_idROL', $rol_idROL);

    $stmt->execute();

    $conexion = closeDB();
}

function borrarUsuario($idUsuario){

    $conexion = openDB();
    $sentenciaText = "DELETE FROM anna.usuario WHERE idUSUARIO = :idUSUARIO";

    $stmt = $conexion->prepare($sentenciaText);

    $stmt->execute();
    $stmt->bindParam(':idUSUARIO', $idUsuario);
    $conexion->commit();

    $conexion = closeDB();
    
}
