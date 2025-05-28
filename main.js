document.addEventListener("DOMContentLoaded", () => {
  setupWindowWeather();
  setupInteractables();
  initializePersonality();
});
function setupInteractables() {
  const shelf = document.getElementById("shelf");
  const cup = document.getElementById("cup");
  const door = document.getElementById("door");
  const bell = document.getElementById("bell");

  shelf.addEventListener("click", () => {
    showThought("A shelf with various belongings.");
  });

  cup.addEventListener("click", () => {
    handleCupInteraction();
  });

  door.addEventListener("click", () => {
    window.location.href = "store-room.html";
  });

  bell.addEventListener("click", () => {
    playSound("bell");
    // Trigger shop logic or transition
  });
}

function showThought(text) {
  const box = document.getElementById("thought-box");
  box.textContent = text;
  box.style.display = "block";
  setTimeout(() => (box.style.display = "none"), 4000);
}

function playSound(name) {
  const sound = new Audio(`assets/sounds/${name}.mp3`);
  sound.play();
}
function handleCupInteraction() {
  showThought("You touched the cup.");
  // Will expand based on currentPersonality logic in future versions
}
