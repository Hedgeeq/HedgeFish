const talkButton = document.getElementById("talk-button");
const talkContainer = document.getElementById("talk-container");
const talkText = document.getElementById("talk-text");

const dialogues = {
  lavi: {
    greeting: "Howdy do! How may I be of service to you, friend?",
    store: "This place? Organized chaos at its finest!",
    cup: "That’s my cup. Emotional support, don't judge.",
    you: "Name’s Lavi. Kinda run this place."
  },
  maj: {
    greeting: "Yooo~ Need something? I'm your guy!",
    store: "Everything’s kinda everywhere… let’s explore!",
    cup: "I keep moving it, don’t I? Haha.",
    you: "I’m Maj! Vibes manager, unofficially."
  },
  x: {
    greeting: "Hey. All good?",
    store: "It’s a chill spot. Nothing too fancy.",
    cup: "It’s fine where it is. You’re good.",
    you: "X. Like the letter. I hang here."
  },
  _: {
    greeting: "What do you want.",
    store: "You’re not here to browse. You’re here to leave.",
    cup: "That is not yours.",
    you: "..."
  }
};

talkButton.addEventListener("click", () => {
  talkContainer.style.display = "flex";
  talkButton.style.display = "none";
  talkText.textContent = dialogues[currentPersonality].greeting;
});

document.querySelectorAll(".talk-option").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const type = btn.dataset.question;
    if (btn.classList.contains("leave")) {
      talkContainer.style.display = "none";
      talkButton.style.display = "block";
    } else {
      talkText.textContent = dialogues[currentPersonality][type];
      swapPose(currentPersonality, type);
    }
  });
});

function swapPose(personality, pose) {
  const sprite = document.getElementById("character-sprite");
  sprite.src = `assets/sprites/${personality}_${pose}.png`;
}
