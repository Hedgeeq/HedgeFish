let currentPersonality = "lavi";

function initializePersonality() {
  const roll = Math.random();
  if (roll < 0.05) currentPersonality = "_";
  else if (roll < 0.20) currentPersonality = "x";
  else if (roll < 0.50) currentPersonality = "maj";
  else currentPersonality = "lavi";

  document.getElementById("character-sprite").src = `assets/sprites/${currentPersonality}_idle.png`;
  document.querySelector("#talk-button").style.backgroundImage = `url('assets/images/talk/${currentPersonality}_button.png')`;
  document.querySelector("#speech-bubble").src = `assets/images/bubbles/${currentPersonality}_bubble.png`;
}
