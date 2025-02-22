const apiKey = "0c2175004f148b0c48c7fd2d50960ef8";

const cityEntry = document.getElementById("city");
const searchBtn = document.querySelector("search-btn");

function getWeather() {
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
      const countryCity = data.sys.country;
      const temp = data.main.temp;
      const wind = data.wind.speed;
      const humidity = data.main.humidity;
      document.getElementById(
        "city-name"
      ).textContent = `${city} (${countryCity})`;
      document.getElementById("temp").textContent = `Temperature: ${temp}°C`;
      document.getElementById("wind").textContent = `Wind: ${wind} M/S`;
      document.getElementById(
        "humidity"
      ).textContent = `Humidity: ${humidity} %`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function getWeatherByLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const countryCity = data.sys.country;
          const city = data.name;
          const temp = data.main.temp / 10;
          const wind = data.wind.speed;
          const humidity = data.main.humidity;

          document.getElementById(
            "city-name"
          ).textContent = `${city} (${countryCity})`;
          document.getElementById(
            "temp"
          ).textContent = `Temperature: ${temp}°C`;
          document.getElementById("wind").textContent = `Wind: ${wind} M/S`;
          document.getElementById(
            "humidity"
          ).textContent = `Humidity: ${humidity} %`;
        });
    });
  }
}
