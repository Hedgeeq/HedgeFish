let currentWeather = "";

function setupWindowWeather() {
  const options = ["rainy", "sunny", "cloudy", "dark"];
  currentWeather = options[Math.floor(Math.random() * options.length)];
}

function getWeather() {
  return currentWeather;
}
