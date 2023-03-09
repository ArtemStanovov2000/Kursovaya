const UNITS_IN_KILO = 1000;
const MAX_INCREASED_ACCURACY_NUMBER = 10;
const REGULAR_NUMBERS_FRACTIONAL_DIGITS_COUNT = 0;
const INCREASED_ACCURACY_NUMBERS_FRACTIONAL_DIGITS_COUNT = 2;

const amperageConversionButton = document.getElementById("amperage_conversion");
const voltageConversionButton = document.getElementById("voltage_conversion");
const electricalPowerConversionButton = document.getElementById("power_conversion");
const fullPowerConversionButton = document.getElementById("full_power_conversion");

const conversionFromKiloToUnits = function conversionFromKiloToUnits(value) {
    let result = value * UNITS_IN_KILO;
    if (result < MAX_INCREASED_ACCURACY_NUMBER) {
        return result.toFixed(INCREASED_ACCURACY_NUMBERS_FRACTIONAL_DIGITS_COUNT);
    } else {
        return result.toFixed(REGULAR_NUMBERS_FRACTIONAL_DIGITS_COUNT);
    }
}

amperageConversionButton.addEventListener("click", () => {
    const amperageValue = document.getElementById("amperage_input").value;
    const amperageResultOutputElement = document.getElementById("amperage_result");
    amperageResultOutputElement.innerHTML = conversionFromKiloToUnits(amperageValue);
});

voltageConversionButton.addEventListener("click", () => {
    const voltageValue = document.getElementById("voltage_input").value;
    const voltageResultOutputElement = document.getElementById("voltage_result");
    voltageResultOutputElement.innerHTML = conversionFromKiloToUnits(voltageValue);
});

electricalPowerConversionButton.addEventListener("click", () => {
    const electricalPowerValue = document.getElementById("electrical_power_input").value;
    const electricalPowerResultOutputElement = document.getElementById("electrical_power_result");
    electricalPowerResultOutputElement.innerHTML = conversionFromKiloToUnits(electricalPowerValue);
});

fullPowerConversionButton.addEventListener("click", () => {
    const activePowerValue = document.getElementById("power_active_input").value;
    const reactivePowerValue = document.getElementById("power_reactive_input").value;
    const fullPowerResultOutputElement = document.getElementById("full_power");

    const fullPowerResult = Math.sqrt(Math.pow(activePowerValue, 2) + Math.pow(reactivePowerValue, 2));
    console.log(fullPowerResult);

    if (fullPowerResult < MAX_INCREASED_ACCURACY_NUMBER) {
        fullPowerResultOutputElement.innerHTML = fullPowerResult.toFixed(3);
    } else {
        fullPowerResultOutputElement.innerHTML = fullPowerResult.toFixed(2);
    }
});

