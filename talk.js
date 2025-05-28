const talkButton = document.getElementById("talk-button");
const talkUI = document.getElementById("talk-container");
const talkText = document.getElementById("talk-text");

const dialogues = {
  lavi: {
    greeting: "Hello! How may I help you?",
    store: "Just a small place to sell little good. Nothing big.",
    cup: "That’s my cup. Emotional support, don't judge.",
    you: "My name’s Lavi! I work as a mascot and shopkeeper here."
  },
  maj: {
    greeting: "Howdy do! How may I be of service to you, friend?",
    store: "Oh this ol place? Just a really cool shop!",
    cup: "I keep moving it, don’t I? Haha.",
    you: "I’m Maj! The fictive of fun!! If that isn't obvious."
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
  talkUI.style.display = "block";
  talkButton.style.display = "none";
  talkText.textContent = dialogues[currentPersonality].greeting;
  swapPose("greet");
});

document.querySelectorAll(".talk-option").forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;

    if (btn.classList.contains("leave")) {
      talkUI.style.display = "none";
      talkButton.style.display = "block";
      swapPose("idle");
    } else {
      talkText.textContent = dialogues[currentPersonality][type];
      swapPose(type);
    }
  });
});
