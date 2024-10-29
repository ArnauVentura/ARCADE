<?php

    include_once('./bd.php');

    if(isset($_POST['INSERT'])){
        registro($_POST['nombre'], $_POST['contrasenya']);
    };

    // elseif (isset($_POST['UPDATE'])) {
    //     $idUsuario = $_POST['id']
    // };
?>