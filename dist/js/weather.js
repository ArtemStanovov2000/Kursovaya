let weather;
const date = new Date();
const hour = date.getHours();

const weatherTemperature = document.getElementById("weather_temperature");
const weatherRain = document.getElementById("weather_rain");
const weatherWind = document.getElementById("weather_wind");

const weatherTemperatureIcon = document.getElementById("weather_temperature_icon");
const weatherRainIcon = document.getElementById("weather_rain_icon");
const weatherWindIcon = document.getElementById("weather_wind_icon");

const weatherTemperatureDeck = document.getElementById("weather_temperature_deck");
const weatherRainDeck = document.getElementById("weather_rain_deck");
const weatherWindDeck = document.getElementById("weather_wind_deck");

navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords
    if (latitude != null) {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&hourly=rain&hourly=windspeed_10m&hourly=direct_radiation&hourly=diffuse_radiation`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                weather = data;
                weatherTemperature.textContent = weather.hourly.temperature_2m[hour] + `°C`;
                weatherRain.textContent = weather.hourly.rain[hour] + ` ` + `мм`;
                weatherWind.textContent = weather.hourly.windspeed_10m[hour] + ` ` + `км/ч`;

                if (weather.hourly.temperature_2m[hour] < -25) {
                    weatherTemperatureDeck.textContent = "крайне холодно"
                    weatherTemperatureIcon.classList.add("weather__temperature__frost");
                } else if (weather.hourly.temperature_2m[hour] >= -25 && weather.hourly.temperature_2m[hour] < -10) {
                    weatherTemperatureDeck.textContent = "очень холодно"
                    weatherTemperatureIcon.classList.remove("weather__temperature__frost");
                    weatherTemperatureIcon.classList.add("weather__temperature__cold");
                } else if (weather.hourly.temperature_2m[hour] >= -10 && weather.hourly.temperature_2m[hour] < -0) {
                    weatherTemperatureDeck.textContent = "холодно"
                    weatherTemperatureIcon.classList.remove("weather__temperature__cold");
                    weatherTemperatureIcon.classList.add("weather__temperature__thaw");
                } else if (weather.hourly.temperature_2m[hour] >= 0 && weather.hourly.temperature_2m[hour] < 10) {
                    weatherTemperatureDeck.textContent = "прохладно"
                    weatherTemperatureIcon.classList.remove("weather__temperature__thaw");
                    weatherTemperatureIcon.classList.add("weather__temperature__warm");
                } else if (weather.hourly.temperature_2m[hour] >= 10 && weather.hourly.temperature_2m[hour] < 20) {
                    weatherTemperatureDeck.textContent = "умеренно"
                    weatherTemperatureIcon.classList.remove("weather__temperature__warm");
                    weatherTemperatureIcon.classList.add("weather__temperature__hot");
                } else if (weather.hourly.temperature_2m[hour] >= 20 && weather.hourly.temperature_2m[hour] < 30) {
                    weatherTemperatureDeck.textContent = "тепло"
                    weatherTemperatureIcon.classList.remove("weather__temperature__hot");
                    weatherTemperatureIcon.classList.add("weather__temperature__hotly");
                } else if (weather.hourly.temperature_2m[hour] >= 30) {
                    weatherTemperatureDeck.textContent = "жарко"
                }

                if (weather.hourly.rain[hour] == 0) {
                    weatherRainIcon.classList.add("weather__rain__sun");
                    weatherRainDeck.textContent = "безопасно"
                } else if (weather.hourly.rain[hour] > 0 && weather.hourly.rain[hour] <= 0.1) {
                    weatherRainIcon.classList.remove("weather__rain__sun");
                    weatherRainIcon.classList.add("weather__rain__cloud");
                    weatherRainDeck.textContent = "безопасно"
                } else if (weather.hourly.rain[hour] > 0.1 && weather.hourly.rain[hour] <= 1) {
                    weatherRainIcon.classList.remove("weather__rain__cloud");
                    weatherRainIcon.classList.add("weather__rain__small__rain");
                    weatherRainDeck.textContent = "осторожно"
                } else if (weather.hourly.rain[hour] > 1 && weather.hourly.rain[hour] <= 3) {
                    weatherRainIcon.classList.remove("weather__rain__small__rain");
                    weatherRainIcon.classList.add("weather__rain__middle__rain");
                    weatherRainDeck.textContent = "курсовая промокнет"
                } else if (weather.hourly.rain[hour] > 3) {
                    weatherRainIcon.classList.remove("weather__rain__middle__rain");
                    weatherRainIcon.classList.add("weather__rain__large__rain");
                    weatherRainDeck.textContent = "даже не пытайся"
                }

                if (weather.hourly.windspeed_10m[hour] >= 0 && weather.hourly.windspeed_10m[hour] <= 2) {
                    weatherWindIcon.classList.add("weather__wind__0");
                    weatherWindDeck.textContent = "штиль"
                } else if (weather.hourly.windspeed_10m[hour] > 2 && weather.hourly.windspeed_10m[hour] <= 5) {
                    weatherWindIcon.classList.remove("weather__wind__0");
                    weatherWindIcon.classList.add("weather__wind__1");
                    weatherWindDeck.textContent = "очень лёгкий ветер"
                } else if (weather.hourly.windspeed_10m[hour] > 5 && weather.hourly.windspeed_10m[hour] <= 19) {
                    weatherWindIcon.classList.remove("weather__wind__1");
                    weatherWindIcon.classList.add("weather__wind__2_3");
                    weatherWindDeck.textContent = "слабый"
                } else if (weather.hourly.windspeed_10m[hour] > 19 && weather.hourly.windspeed_10m[hour] <= 38) {
                    weatherWindIcon.classList.remove("weather__wind__2_3");
                    weatherWindIcon.classList.add("weather__wind__4_5");
                    weatherWindDeck.textContent = "свежий"
                } else if (weather.hourly.windspeed_10m[hour] > 38 && weather.hourly.windspeed_10m[hour] <= 61) {
                    weatherWindIcon.classList.remove("weather__wind__4_5");
                    weatherWindIcon.classList.add("weather__wind__6_7");
                    weatherWindDeck.textContent = "крепкий"
                } else if (weather.hourly.windspeed_10m[hour] > 61 && weather.hourly.windspeed_10m[hour] <= 74) {
                    weatherWindIcon.classList.remove("weather__wind__6_7");
                    weatherWindIcon.classList.add("weather__wind__8");
                    weatherWindDeck.textContent = "очень крепкий"
                } else if (weather.hourly.windspeed_10m[hour] > 74 && weather.hourly.windspeed_10m[hour] <= 88) {
                    weatherWindIcon.classList.remove("weather__wind__8");
                    weatherWindIcon.classList.add("weather__wind__9");
                    weatherWindDeck.textContent = "шторм"
                } else if (weather.hourly.windspeed_10m[hour] > 88 && weather.hourly.windspeed_10m[hour] <= 102) {
                    weatherWindIcon.classList.remove("weather__wind__9");
                    weatherWindIcon.classList.add("weather__wind__10");
                    weatherWindDeck.textContent = "сильный шторм"
                } else if (weather.hourly.windspeed_10m[hour] > 102 && weather.hourly.windspeed_10m[hour] <= 117) {
                    weatherWindIcon.classList.remove("weather__wind__10");
                    weatherWindIcon.classList.add("weather__wind__11");
                    weatherWindDeck.textContent = "жестокий шторм"
                } else if (weather.hourly.windspeed_10m[hour] > 117) {
                    weatherWindIcon.classList.remove("weather__wind__11");
                    weatherWindIcon.classList.add("weather__wind__12");
                    weatherWindDeck.textContent = "ураган"
                }
            });
    }
})
