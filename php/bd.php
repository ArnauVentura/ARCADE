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

function getUsuario(){
    
    $conexion = openDB();
    $sentenciaText = "SELECT * FROM anna.usuario";

    $stmt = $conexion ->prepare($sentenciaText);
    $stmt->execute();

    $group = $stmt->fetchAll();

    $conexion = closeDB();
    return $group;
}

function getUsuarioByTipo($userId){
    
    $conexion = openDB();
    $sentenciaText = 'SELECT * FROM `anna`.`usuario` WHERE `id` = :idTipo';
    $stmt = $conexion->prepare($sentenciaText);
    $stmt->bindParam(':idTipo', $userId);
    $stmt = execute();

    $group = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $conexion = closeDB();
    return $group;
}
    


function registro($nombre, $contrasenya){

    $conexion = openDB();

    $sentenciaText = "insert into usuario (nombre, contrasenya, rol_idROL) values (:nombre, :contrasenya, 1)";
    $stmt = $conexion->prepare($sentenciaText);
    $stmt->bindParam(':nombre', $nombre);
    $stmt->bindParam(':contrasenya', $contrasenya);

    $stmt->execute();

    $conexion = closeDB();
}

