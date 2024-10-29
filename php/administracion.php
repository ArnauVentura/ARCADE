<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla de Usuarios</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bcrypt.js para encriptar la contraseña -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bcryptjs/2.4.3/bcrypt.min.js"></script>
</head>
<body>
    <?php  
    include_once('./bd.php');

    $usuarios = getUsuario();

    ?>
    <div class="container mt-5">
        <h2 class="mb-4">Tabla de Usuarios</h2>

        <!-- Tabla de usuarios -->
        <table class="table table-striped mt-4">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Contraseña</th>
                    <th>Tipo</th>
                </tr>
            </thead>
            <tbody id="userTable">
                <?php  foreach ($usuarios as $usuario) { ?>
                    <tr>
                        <td><?php echo $usuario['nombre'] ?></td>
                        <td><?php echo $usuario['contrasenya'] ?></td>
                        <td><?php echo $usuario['tipo'] ?></td>
                        <td>
                            <button>Modificar</button>
                            <button>Borrar</button>
                        </td>
                    </tr>
                <?php }?>


            </tbody>

        </table>
    </div>
</body>
</html>
