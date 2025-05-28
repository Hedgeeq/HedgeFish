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
function openAdoptPopup(position) {
  const overlay = document.getElementById("adopt-popup");
  const body = document.getElementById("popup-body");
  overlay.classList.remove("hidden");

  if (position === "left") {
    body.innerHTML = `<h2>Fluffy</h2><p>Price: 25 Stars</p><img src="assets/images/adopts/fluffy.png" width="200" />`;
  } else if (position === "center") {
    body.innerHTML = `<h2>Blinko</h2><p>Price: 40 Stars</p><img src="assets/images/adopts/blinko.png" width="200" />`;
  } else if (position === "right") {
    body.innerHTML = `<h2>Marshmallow</h2><p>Price: 30 Stars</p><img src="assets/images/adopts/marshmallow.png" width="200" />`;
  } else if (position === "info") {
    body.innerHTML = `<p>This is where you can learn more about adopting these little guys!</p>`;
  }
}
