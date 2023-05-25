let weather;
const date = new Date();
const hour = date.getHours();

const temperatureValueElement = document.getElementById("temperature-value-element");
const rainValueElement = document.getElementById("rain-value-element");
const windValueElement = document.getElementById("wind-value-element");

const temperatureIconElement = document.getElementById("temperature-icon-element");
const rainIconElement = document.getElementById("rain-icon-element");
const windIconElement = document.getElementById("wind-icon-element");

const temperatureDescElement = document.getElementById("temperature-desc-element");
const rainDescElement = document.getElementById("rain-desc-element");
const windDescElement = document.getElementById("wind-desc-element");

navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords
    if (latitude != null) {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&hourly=rain&hourly=windspeed_10m&hourly=direct_radiation&hourly=diffuse_radiation`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                weather = data;
                temperatureValueElement.textContent = weather.hourly.temperature_2m[hour] + `°C`;
                rainValueElement.textContent = weather.hourly.rain[hour] + ` ` + `мм`;
                windValueElement.textContent = weather.hourly.windspeed_10m[hour] + ` ` + `км/ч`;

                if (weather.hourly.temperature_2m[hour] < -25) {
                    temperatureDescElement.textContent = "крайне холодно"
                    temperatureIconElement.classList.add("temperature-frost");
                } else if (weather.hourly.temperature_2m[hour] >= -25 && weather.hourly.temperature_2m[hour] < -10) {
                    temperatureDescElement.textContent = "очень холодно"
                    temperatureIconElement.classList.remove("temperature-frost");
                    temperatureIconElement.classList.add("temperature-cold");
                } else if (weather.hourly.temperature_2m[hour] >= -10 && weather.hourly.temperature_2m[hour] < -0) {
                    temperatureDescElement.textContent = "холодно"
                    temperatureIconElement.classList.remove("temperature-cold");
                    temperatureIconElement.classList.add("temperature-thaw");
                } else if (weather.hourly.temperature_2m[hour] >= 0 && weather.hourly.temperature_2m[hour] < 10) {
                    temperatureDescElement.textContent = "прохладно"
                    temperatureIconElement.classList.remove("temperature-thaw");
                    temperatureIconElement.classList.add("temperature-warm");
                } else if (weather.hourly.temperature_2m[hour] >= 10 && weather.hourly.temperature_2m[hour] < 20) {
                    temperatureDescElement.textContent = "умеренно"
                    temperatureIconElement.classList.remove("temperature-warm");
                    temperatureIconElement.classList.add("temperature-hot");
                } else if (weather.hourly.temperature_2m[hour] >= 20 && weather.hourly.temperature_2m[hour] < 30) {
                    temperatureDescElement.textContent = "тепло"
                    temperatureIconElement.classList.remove("temperature-hot");
                    temperatureIconElement.classList.add("temperature-hotly");
                } else if (weather.hourly.temperature_2m[hour] >= 30) {
                    temperatureDescElement.textContent = "жарко"
                }

                if (weather.hourly.rain[hour] == 0) {
                    rainIconElement.classList.add("rain-sun");
                    rainDescElement.textContent = "безопасно"
                } else if (weather.hourly.rain[hour] > 0 && weather.hourly.rain[hour] <= 0.1) {
                    rainIconElement.classList.remove("rain-sun");
                    rainIconElement.classList.add("rain-cloud");
                    rainDescElement.textContent = "безопасно"
                } else if (weather.hourly.rain[hour] > 0.1 && weather.hourly.rain[hour] <= 1) {
                    rainIconElement.classList.remove("rain-cloud");
                    rainIconElement.classList.add("rain-small-rain");
                    rainDescElement.textContent = "осторожно"
                } else if (weather.hourly.rain[hour] > 1 && weather.hourly.rain[hour] <= 3) {
                    rainIconElement.classList.remove("rain-small-rain");
                    rainIconElement.classList.add("rain-middle-rain");
                    rainDescElement.textContent = "курсовая промокнет"
                } else if (weather.hourly.rain[hour] > 3) {
                    rainIconElement.classList.remove("rain-middle-rain");
                    rainIconElement.classList.add("rain-large-rain");
                    rainDescElement.textContent = "даже не пытайся"
                }

                //шкала ветра была взята с источника https://ru.wikipedia.org/wiki/%D0%A8%D0%BA%D0%B0%D0%BB%D0%B0_%D0%91%D0%BE%D1%84%D0%BE%D1%80%D1%82%D0%B0
                if (weather.hourly.windspeed_10m[hour] >= 0 && weather.hourly.windspeed_10m[hour] <= 2) {
                    windIconElement.classList.add("wind-klass-0");
                    windDescElement.textContent = "штиль"
                } else if (weather.hourly.windspeed_10m[hour] > 2 && weather.hourly.windspeed_10m[hour] <= 5) {
                    windIconElement.classList.remove("wind-klass-0");
                    windIconElement.classList.add("wind-klass-1");
                    windDescElement.textContent = "очень лёгкий ветер"
                } else if (weather.hourly.windspeed_10m[hour] > 5 && weather.hourly.windspeed_10m[hour] <= 19) {
                    windIconElement.classList.remove("wind-klass-1");
                    windIconElement.classList.add("wind-klass-2_3");
                    windDescElement.textContent = "слабый"
                } else if (weather.hourly.windspeed_10m[hour] > 19 && weather.hourly.windspeed_10m[hour] <= 38) {
                    windIconElement.classList.remove("wind-klass-2_3");
                    windIconElement.classList.add("wind-klass-4_5");
                    windDescElement.textContent = "свежий"
                } else if (weather.hourly.windspeed_10m[hour] > 38 && weather.hourly.windspeed_10m[hour] <= 61) {
                    windIconElement.classList.remove("wind-klass-4_5");
                    windIconElement.classList.add("wind-klass-6_7");
                    windDescElement.textContent = "крепкий"
                } else if (weather.hourly.windspeed_10m[hour] > 61 && weather.hourly.windspeed_10m[hour] <= 74) {
                    windIconElement.classList.remove("wind-klass-6_7");
                    windIconElement.classList.add("wind-klass-8");
                    windDescElement.textContent = "очень крепкий"
                } else if (weather.hourly.windspeed_10m[hour] > 74 && weather.hourly.windspeed_10m[hour] <= 88) {
                    windIconElement.classList.remove("wind-klass-8");
                    windIconElement.classList.add("wind-klass-9");
                    windDescElement.textContent = "шторм"
                } else if (weather.hourly.windspeed_10m[hour] > 88 && weather.hourly.windspeed_10m[hour] <= 102) {
                    windIconElement.classList.remove("wind-klass-9");
                    windIconElement.classList.add("wind-klass-10");
                    windDescElement.textContent = "сильный шторм"
                } else if (weather.hourly.windspeed_10m[hour] > 102 && weather.hourly.windspeed_10m[hour] <= 117) {
                    windIconElement.classList.remove("wind-klass-10");
                    windIconElement.classList.add("wind-klass-11");
                    windDescElement.textContent = "жестокий шторм"
                } else if (weather.hourly.windspeed_10m[hour] > 117) {
                    windIconElement.classList.remove("wind-klass-11");
                    windIconElement.classList.add("wind-klass-12");
                    windDescElement.textContent = "ураган"
                }
            });
    }
})
