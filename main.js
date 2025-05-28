document.addEventListener("DOMContentLoaded", () => {
  setupWindowWeather();
  setupInteractables();
  initializePersonality();
  setupExitLogic();
});

function setupInteractables() {
  const shelf = document.getElementById("shelf");
  const cup = document.getElementById("cup");
  const door = document.getElementById("door");
  const bell = document.getElementById("bell");
  const window = document.getElementById("window");

  shelf.addEventListener("click", () => showThought("A shelf with various belongings."));
  window.addEventListener("click", () => showThought(`It is ${getWeather()} outside.`));
  door.addEventListener("click", () => window.location.href = "store-room.html");
  bell.addEventListener("click", () => playSound("bell"));

  cup.addEventListener("click", () => {
    if (currentPersonality === "_") {
      showThought("Blocked.");
    } else {
      handleCupInteraction();
    }
  });

  document.getElementById("character-sprite").addEventListener("click", () => {
    if (currentPersonality === "maj") {
      swapPose("giggle");
    } else if (currentPersonality === "x") {
      swapPose("nod");
    } else if (currentPersonality === "_") {
      swapPose("snarl");
    } else {
      swapPose("annoyed");
    }
  });
}

function showThought(text) {
  const box = document.getElementById("thought-box");
  box.textContent = text;
  box.style.display = "block";
  clearTimeout(box.timeout);
  box.timeout = setTimeout(() => box.style.display = "none", 4000);
}

function setupExitLogic() {
  const exit = document.getElementById("exit-sign");
  if (exit) {
    exit.addEventListener("click", () => {
      window.location.href = "index.html"; // optional reset route
    });
  }
}
