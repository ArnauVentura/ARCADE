<?php

    include_once('./bd.php');

    if(isset($_POST['insert'])){
        registro($_POST['nombre'], $_POST['contrasenya']);
    };

?>