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

          const object = document.createElement("div");
          object.classList.add("hiddenObject");
          object.style.top = `${top}%`;
          object.style.left = `${left}%`;

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

  function detenerTimer() {
    clearInterval(timerInterval);
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("tiempo").textContent = formatTime(elapsedTime);
    textoJuego.textContent = "¡Juego completado!";

    document.getElementById("puntuacion").value = elapsedTime;
    document.getElementById("rankingForm").submit();
}

  function formatTime(seconds) {
      const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
      const remainingSeconds = String(seconds % 60).padStart(2, "0");
      return `${minutes}:${remainingSeconds}`;
  }

  function actualizarContadorLlaves() {
      contadorLlaves.textContent = `${contadorLlavesCompletadas}/${totalLlaves}`;
  }

  actualizarContadorLlaves();
});
