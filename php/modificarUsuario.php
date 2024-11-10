<?php include_once('./bd.php') ?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar Usuario</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container mt-5">
<?php 
    $idUsuario = $_GET['idUsuario'];
    $usuario = getUsuarioPorId($idUsuario);
    $tipos = getRoles();
?>
    <form action="controllers.php" method="post">
        <input type="hidden" name="idUsuario" value="<?php echo ($usuario['idUsuario']); ?>">

        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre" name="nombre" value="<?php echo $usuario['nombre']; ?>" required>
        </div>

        <div class="mb-3">
            <label for="contrasenya" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="contrasenya" name="contrasenya" value="<?php echo $usuario['contrasenya']; ?>" required>
        </div>

        <div class="mb-3">
    <label class="form-label">Tipo:</label>
    <?php
    foreach ($tipos as $tipo) {
    ?>
        <div class="form-check form-check-inline">
            <input type="radio" name="rol_idRol" value="<?php echo $tipo["idRol"]; ?>" id="tipo<?php echo $tipo["idRol"]; ?>" <?php echo ($tipo["idRol"] == $usuario['rol_idRol']) ? 'checked' : ''; ?>>
            <label class="form-check-label" for="tipo<?php echo $tipo["idRol"]; ?>"><?php echo $tipo["tipo"]; ?></label>
        </div>
    <?php
    }
    ?>
</div>


        <button type="submit" name="update" class="btn btn-primary">Actualizar Usuario</button>
    </form>
</div>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
</body>
</html>
