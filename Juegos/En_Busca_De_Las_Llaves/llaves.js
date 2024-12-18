document.addEventListener("DOMContentLoaded", () => {
  const gameArea = document.getElementById("gameArea");
  const buttonsArea = document.getElementById("buttonsArea");
  const hiddenObjectsArea = document.getElementById("hiddenObjectsArea");
  const backButton = document.querySelector(".atras");
  const textoJuego = document.getElementById("textoJuego");
  const contadorLlaves = document.getElementById("contadorLlaves");

  let currentRoom = null;
  let objetosEncontrados = 0;
  let contadorLlavesCompletadas = 0;
  const objetosPorSala = 3;
  const totalLlaves = 3;

  const defaultBackground = "url('./media/HUB.png')";
  const roomBackgrounds = {
    sala_mantenimiento: "url('./media/Mantenimiento.png')",
    sala_inundada: "url('./media/Inundado.png')",
    sala_ruinas: "url('./media/Ruinas.png')",
  };

  let timerInterval;
  let startTime = Date.now();
  startTimer();

  document.body.style.backgroundImage = defaultBackground;

  document.querySelectorAll(".navButton").forEach((button) => {
    button.addEventListener("click", () => {
      const room = button.getAttribute("data-room");
      currentRoom = room;
      objetosEncontrados = 0;
      document.body.style.backgroundImage = roomBackgrounds[room];
      textoJuego.textContent = `Estás en la ${room.replace("_", " ")}`;
      hiddenObjectsArea.innerHTML = "";
      buttonsArea.style.display = "none";
      enableDarkMode();
      generateObjects(objetosPorSala);
    });
  });

  backButton.addEventListener("click", () => {
    volverAlMenu();
    disableDarkMode();
  });

  function generateObjects(numObjects) {
    hiddenObjectsArea.innerHTML = "";

    for (let i = 0; i < numObjects; i++) {
      const top = Math.random() * 90;
      const left = Math.random() * 90;

      const object = document.createElement("img");
      object.classList.add("hiddenObject");
      object.src = "./objetos/llave-dibujo.png";
      object.style.top = `${top}%`;
      object.style.left = `${left}%`;
      object.style.position = "absolute";

      object.addEventListener("click", () => {
        if (!object.classList.contains("found")) {
          object.classList.add("found");
          objetoEncontrado();
        }
      });

      hiddenObjectsArea.appendChild(object);
    }
  }

  function objetoEncontrado() {
    objetosEncontrados++;
    if (objetosEncontrados === objetosPorSala) {
      contadorLlavesCompletadas++;
      deshabilitarBotonSala(currentRoom);
      volverAlMenu();
      disableDarkMode();

      if (contadorLlavesCompletadas === totalLlaves) {
        detenerTimer();
      }

      actualizarContadorLlaves();
    }
  }

  function deshabilitarBotonSala(room) {
    const button = document.querySelector(`.navButton[data-room="${room}"]`);
    if (button) {
      button.disabled = true;
      button.textContent += " (Completada)";
    }
  }

  function volverAlMenu() {
    document.body.style.backgroundImage = defaultBackground;
    textoJuego.textContent = "Selecciona una sala para buscar las llaves";
    hiddenObjectsArea.innerHTML = "";
    buttonsArea.style.display = "flex";
    currentRoom = null;
    disableDarkMode();
  }

  function enableDarkMode() {
    document.body.classList.add("dark");
    enableLinterna();
  }

  function disableDarkMode() {
    document.body.classList.remove("dark");
    disableLinterna();
  }

  function enableLinterna() {
    document.documentElement.style.setProperty("--cX", `40vw`);
    document.documentElement.style.setProperty("--cY", `40vh`);
    document.addEventListener("mousemove", moveLinterna);
  }

  function disableLinterna() {
    document.removeEventListener("mousemove", moveLinterna);
  }

  function moveLinterna(e) {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    document.documentElement.style.setProperty("--cX", `${x}vw`);
    document.documentElement.style.setProperty("--cY", `${y}vh`);
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      document.getElementById("tiempo").textContent = formatTime(elapsedTime);
    }, 1000);
  }

  const isAuthenticated =
    document.body.getAttribute("data-authenticated") === "true";
  if (!isAuthenticated) {
    alert(
      `¡Juego completado! Tiempo: ${formatTime(
        elapsedTime
      )}.\nInicia sesión para guardar tu puntuación.`
    );
    return;
  }

  const juegoId = document.body.getAttribute("data-game-id");
  if (!juegoId) {
    console.error("Error: ID del juego no definido.");
    return;
  }

  function detenerTimer() {
    clearInterval(timerInterval);
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("tiempo").textContent = formatTime(elapsedTime);
    textoJuego.textContent = "¡Juego completado!";

    mostrarModalVictoria(formatTime(elapsedTime));

    // Obtener el ID de usuario y juego
    const userId = document.body.getAttribute("data-user-id");
    const juegoId = document.body.getAttribute("data-game-id");

    if (!userId || !juegoId) {
      console.error("No se ha encontrado el ID del usuario o el juego.");
      return;
    }

    // Llamamos a la función para guardar la puntuación
    guardarPuntuacion(userId, juegoId, formatTime(elapsedTime));
  }
  
  
  function formatTime(seconds) {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const remainingSeconds = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  }

  function actualizarContadorLlaves() {
    contadorLlaves.textContent = `${contadorLlavesCompletadas}/${totalLlaves}`;
  }

  function mostrarModalVictoria(tiempoFormateado) {
    // Mostrar el tiempo en el mensaje
    const mensajeTiempo = document.getElementById("mensajeTiempo");
    mensajeTiempo.textContent = `Tu tiempo: ${tiempoFormateado}`;

    // Mostrar el modal
    const modal = document.getElementById("ventanaVictoria");
    modal.style.display = "flex";

    // Obtener los datos del usuario y juego
    const userId = document.body.getAttribute("data-user-id");
    const juegoId = document.body.getAttribute("data-game-id");

    // Agregar eventos a los botones del modal
    document.getElementById("btnReiniciar").addEventListener("click", () => {
      location.reload(); // Recargar la página para reiniciar el juego
    });

    document.getElementById("btnRanking").addEventListener("click", () => {
      guardarPuntuacion(userId, juegoId, tiempoFormateado);
      location.assign("../../html/ranking.php"); // Redirigir al ranking
    });

    document.getElementById("btnFuentes").addEventListener("click", () => {
      guardarPuntuacion(userId, juegoId, tiempoFormateado);
      location.assign("../../html/fuentes.php"); // Redirigir a la página de fuentes
    });
  }

  function guardarPuntuacion(userId, juegoId, tiempoFormateado) {
    const puntuacion = tiempoFormateado; // El tiempo formateado como puntuación

    fetch("/api/ranking/insertRanking.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        usuario_idUsuario: userId,
        juegos_idJuego: juegoId,
        puntuacion: puntuacion,  // Usamos el tiempo formateado como puntuación
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Puntuación guardada con éxito");
        } else {
          console.error("Error al guardar la puntuación:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error al guardar la puntuación:", error);
      });
  }

  actualizarContadorLlaves();
});
