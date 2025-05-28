let currentPersonality = "lavi";
let idleTimer;
let hasReturnedDistracted = false;

function initializePersonality() {
  const roll = Math.random();
  if (roll < 0.05) currentPersonality = "_";
  else if (roll < 0.20) currentPersonality = "x";
  else if (roll < 0.50) currentPersonality = "maj";
  else currentPersonality = "lavi";

  loadCharacterAssets();
  setupIdleLogic();
}

function loadCharacterAssets() {
  document.getElementById("character-sprite").src = `assets/sprites/${currentPersonality}_idle.png`;
  document.querySelector("#talk-button").style.backgroundImage = `url('assets/talk/${currentPersonality}_button.png')`;
  document.querySelector("#speech-bubble").src = `assets/bubbles/${currentPersonality}_bubble.png`;
}

function swapPose(type) {
  const sprite = document.getElementById("character-sprite");
  sprite.src = `assets/sprites/${currentPersonality}_${type}.png`;
  clearTimeout(idleTimer);
  setupIdleLogic();
}
