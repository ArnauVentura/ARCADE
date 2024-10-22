<?php
function openDB(){

$servername = "localhost";
$username = "root";
$password = "";


$conexion = new PDO("mysql:host=$servername;dbname=Anna_y_les_4_fonts", $username, $password);
$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$conexion->exec("set names utf8");

return $conexion;
}

function closeDB($conexion)
{
    $conexion = null;
}

function getUsuario(){
    
    $conexion = openDB();
    $stmt = $conexion->query('SELECT * FROM Anna_y_les_4_fonts.usuario');
    $stmt = execute();

    $group = $stmt->fetchAll(PDO::FETCH_ASSOC);

    closeDB($conexion);
    return $group;
}

