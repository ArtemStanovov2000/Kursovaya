let weather;
const date = new Date();
const hour = date.getHours();

const weatherTemperature = document.getElementById("weather_temperature");
const weatherRain = document.getElementById("weather_rain");
const weatherWind = document.getElementById("weather_wind");

fetch('https://api.open-meteo.com/v1/forecast?latitude=56.33&longitude=44.00&hourly=temperature_2m&hourly=rain&hourly=windspeed_10m&hourly=direct_radiation&hourly=diffuse_radiation')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        weather = data;
        weatherTemperature.innerHTML = weather.hourly.temperature_2m[hour] + `°C`;
        weatherRain.innerHTML = weather.hourly.rain[hour] + ` ` + `мм осадков`;
        weatherWind.innerHTML = weather.hourly.windspeed_10m[hour] + ` ` + `км/ч`;
    });
