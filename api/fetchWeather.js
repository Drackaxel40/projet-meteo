export default async function fetchWeather() {
    const config = await fetch ("../config/conf.json").then((res) => res.json());

    const apiUrl = `${config.weather_api_url}?lat=${config.lat}&lon=${config.lon}&appid=${config.weather_api_key}&lang=${config.lang}&units=${config.units}`;
    
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data", error);
    }
}
