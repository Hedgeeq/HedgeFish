function openPopup(type) {
  const overlay = document.getElementById("popup-overlay");
  const body = document.getElementById("popup-body");
  overlay.classList.remove("hidden");

  if (type === "book") {
    body.innerHTML = "<p>[BOOK INTERFACE PLACEHOLDER]</p>";
  } else if (type === "gallery") {
    body.innerHTML = "<p>[ART GALLERY VIEWER PLACEHOLDER]</p>";
  } else if (type === "video") {
    body.innerHTML = "<p>[VIDEO VIEWER PLACEHOLDER]</p>";
  }
}

function closePopup() {
  document.getElementById("popup-overlay").classList.add("hidden");
}
