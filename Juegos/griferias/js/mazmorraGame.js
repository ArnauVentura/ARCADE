/* GENERAR MAPA */
let arrayDistribucion_Mapa = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,1,
    1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,2,2,2,2,2,0,1,
    1,2,2,2,2,2,4,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,4,1,0,2,2,2,2,2,0,1,
    1,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,0,0,0,2,2,0,0,1,
    1,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,1,1,1,2,2,1,1,1,
    1,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,4,2,2,2,2,2,2,2,1,
    1,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,
    1,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,
    1,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,
    1,2,2,2,2,1,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,
    1,2,2,2,2,1,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,
    1,2,2,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,
    1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,0,0,0,0,0,0,0,0,0,0,0,1,
    1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1,
    1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1,
    1,0,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,
    1,0,0,2,2,2,2,2,1,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
];

function distribuirBloques(array){

    for (let index = 0; index < array.length; index++) {
        establecerImg(array[index],index);
    }
}    
function establecerImg(numero,index){
    let img = document.createElement('img');
    img.className = "enviroment";

    let div = document.createElement('div');
    div.id = "div"+index;

    switch (numero) {
        case 2:
            div.style.backgroundImage = "url('./media/floor.png')";
            div.className = "Caminable";
            break;
        case 1:
            div.style.backgroundImage = "url('./media/muroAzul.png')"
            break;
        case 0:
            div.style.backgroundImage = "url('./media/aguaClara.png')";
            break;
                
        case 3:
            /* div.style.backgroundImage = "url('./media/floor.png')"; */
            div.className = "mainCharacter";
            break;
        case 4:
            /* div.style.backgroundImage = "url('./media/floor.png')"; */
            div.className = "EnemigoHorizontal";
            break;
        case 5:
            div.className = "EnemigoVertical";
            break;
                }

    const contenedor = document.getElementById("contenedorBG_Mapa");
    div.appendChild(img);
    contenedor.appendChild(div);
}

distribuirBloques(arrayDistribucion_Mapa);

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        moverMainCharacter(-40,"mainCharacter");
    }
    if (event.key === 'ArrowDown') {
        moverMainCharacter(+40,"mainCharacter");
    }
    if (event.key === 'ArrowRight') {
        moverMainCharacter(+1,"mainCharacter");
    }
    if (event.key === 'ArrowLeft') {
        moverMainCharacter(-1,"mainCharacter");
    }
});
/* Movimientos Enemigo */

/* MOVIMIENTO PERSONAJE*/
function moverMainCharacter(desplazamiento, clasePersonaje) {
    // Obtener el contenedor padre
    let contenedor = document.getElementById('contenedorBG_Mapa');

    // Encontrar el elemento con la clase especificada
    let personaje = Array.from(contenedor.getElementsByClassName(clasePersonaje))[0];

    // Obtener la lista de todos los divs en el contenedor
    let elementos = Array.from(contenedor.children);
    let personajeIndex = elementos.findIndex(el => el.classList.contains(clasePersonaje));

    // Calcular el nuevo índice tras el desplazamiento
    let newIndex = personajeIndex + desplazamiento;

    // Comprobar que la nueva posición es válida (no se sale del rango)
    if (newIndex >= 0 && newIndex < elementos.length) {
        let elementoDestino = elementos[newIndex];

        // Comprobar si el elementoDestino es "Caminable"
        if (elementoDestino.classList.contains("Caminable")) {
            // Intercambiar las posiciones de los elementos
            let personajeClone = personaje.cloneNode(true);
            let destinoClone = elementoDestino.cloneNode(true);

            // Reemplazar en el DOM
            contenedor.replaceChild(personajeClone, elementoDestino);
            contenedor.replaceChild(destinoClone, personaje);
        }
    }

}
