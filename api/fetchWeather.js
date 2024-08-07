const fetch = require('node-fetch');
const config = require('../config/conf.json');

export default async function fetchWeather(city) {
    const apiUrl = `${config.weather_api_url}?q=${config.city}&appid=${config.weather_api_key}`;

    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.log('Error fetching weather data', error);
    }
}