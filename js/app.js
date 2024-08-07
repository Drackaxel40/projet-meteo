import fetchWeather from "../api/fetchWeather.js";

const weatherData = await fetchWeather();

console.log(weatherData);

const cityName= document.querySelector(".city-name");
cityName.textContent = weatherData.name;

const temp = document.querySelector(".temp");
temp.textContent = weatherData.main.temp + " °C";

const feelsLike = document.querySelector(".feels-like");
feelsLike.textContent = "Ressenti: " + weatherData.main.feels_like + " °C";

const tempMax = document.querySelector(".temp-max");
tempMax.textContent = "Temp. maximale: " + weatherData.main.temp_max + " °C";

const tempMin = document.querySelector(".temp-min");
tempMin.textContent = "Temp. minimale: " + weatherData.main.temp_min + " °C";

const weather = document.querySelector(".weather");
weather.textContent = weatherData.weather[0].description;

const humidity = document.querySelector(".humidity");
humidity.textContent = "Humidité: " + weatherData.main.humidity + " %";

const icon = document.querySelector(".icon");
icon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;