const weatherK = "0c2175004f148b0c48c7fd2d50960ef8";

const cityEntry = document.getElementById("city");
const searchBtn = document.querySelector("search-btn");

function getWeather() {
  const apiKey = weatherK;
  const city = cityEntry.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Weather Data:", data);
      console.log(
        `Temperature: ${data.main.temp}\nWind: ${data.wind.speed}\nHumidity: ${data.main.humidity}`
      );
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
