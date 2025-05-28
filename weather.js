function setupWindowWeather() {
  const weatherTypes = ["rainy", "sunny", "cloudy", "dark"];
  const randomWeather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
  const window = document.getElementById("window");

  window.addEventListener("click", () => {
    showThought(`It is ${randomWeather} outside.`);
  });
}
