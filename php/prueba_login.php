<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>proba login</title>
</head>
<body>
    <div>
        <div>registro</div>
        <div>
            <form action="./controllers.php" method="POST">
                <div>
                    <label for="nombre">Nombre</label>
                    <div>
                        <input type="text" id="nombre" name="nombre" placeholder="Nombre">
                    </div>
                </div>
                <div>
                    <label for="nombre">Contrasenya</label>
                    <div>
                        <input type="text" id="contrasenya" name="contrasenya" placeholder="Contrasenya">
                    </div>
                </div>

                <div>
                    <button type="submit" name="insert">ACEPTAR</button>
                </div>
            </form>
        </div>
    </div>
</body>
</html>