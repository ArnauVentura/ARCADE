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
    <h2>Modificar Usuario</h2>

    <form action="controllers.php" method="POST">
        <input type="hidden" name="idUsuario" value="<?php echo htmlspecialchars($user['idUSUARIO']); ?>">

        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre" name="nombre" value="<?php echo htmlspecialchars($user['nombre']); ?>" required>
        </div>

        <div class="mb-3">
            <label for="contrasenya" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="contrasenya" name="contrasenya" value="<?php echo htmlspecialchars($user['contrasenya']); ?>" required>
        </div>

        <div class="mb-3">
            <label for="rol_idRol" class="form-label">Rol</label>
            <select class="form-select" id="rol_idRol" name="rol_idRol" required>
                <?php foreach ($roles as $role): ?>
                    <option value="<?php echo $role['idRol']; ?>" <?php echo ($role['idRol'] == $user['rol_idRol']) ? 'selected' : ''; ?>>
                        <?php echo htmlspecialchars($role['tipo']); ?>
                    </option>
                <?php endforeach; ?>
            </select>
        </div>

        <button type="submit" name="UPDATE" class="btn btn-primary">Actualizar Usuario</button>
    </form>
</div>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
</body>
</html>
