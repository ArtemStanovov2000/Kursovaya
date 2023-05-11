const UNITS_IN_KILO = 1000;
const MAX_INPUT_VALUE = 1000;
const MAX_INCREASED_ACCURACY_NUMBER = 10;
const REGULAR_NUMBERS_FRACTIONAL_DIGITS_COUNT = 0;
const INCREASED_ACCURACY_NUMBERS_FRACTIONAL_DIGITS_COUNT = 2;

const amperageConversionButton = document.getElementById("amperage_conversion");
const voltageConversionButton = document.getElementById("voltage_conversion");
const electricalPowerConversionButton = document.getElementById("power_conversion");
const fullPowerConversionButton = document.getElementById("full_power_conversion");
const radioButtonNumbersFractionalDigitsCount = document.querySelectorAll('input[name="amperage"]');

let numbersFractionalDigitsCount;

const selectingRadioButtonValue = function selectingRadioButtonValue(radioButtonNumbersFractionalDigitsCount) {
    radioButtonNumbersFractionalDigitsCount.forEach((radioButton) => {
        if (radioButton.checked) {
            numbersFractionalDigitsCount = radioButton.value;
        }
        return numbersFractionalDigitsCount;
    });
}

const conversionFromKiloToUnits = function conversionFromKiloToUnits(value) {
    if (value > MAX_INPUT_VALUE) {
        value = MAX_INPUT_VALUE
    } else {
        value = value
    }
    let result = value * UNITS_IN_KILO;
    if (Number.isInteger(result)) {
        return result.toFixed(0);
    } else {
        selectingRadioButtonValue(radioButtonNumbersFractionalDigitsCount);
        return result.toFixed(numbersFractionalDigitsCount);
    }
}

amperageConversionButton.addEventListener("click", () => {
    const amperageValue = document.getElementById("amperage_input").value;
    const amperageResultOutputElement = document.getElementById("amperage_result");
    amperageResultOutputElement.textContent = conversionFromKiloToUnits(amperageValue);
});

voltageConversionButton.addEventListener("click", () => {
    const voltageValue = document.getElementById("voltage_input").value;
    const voltageResultOutputElement = document.getElementById("voltage_result");
    voltageResultOutputElement.textContent = conversionFromKiloToUnits(voltageValue);
});

electricalPowerConversionButton.addEventListener("click", () => {
    const electricalPowerValue = document.getElementById("electrical_power_input").value;
    const electricalPowerResultOutputElement = document.getElementById("electrical_power_result");
    electricalPowerResultOutputElement.textContent = conversionFromKiloToUnits(electricalPowerValue);
});

fullPowerConversionButton.addEventListener("click", () => {
    const activePowerValue = document.getElementById("power_active_input").value;
    const reactivePowerValue = document.getElementById("power_reactive_input").value;
    const fullPowerResultOutputElement = document.getElementById("full_power");

    const fullPowerResult = Math.sqrt(Math.pow(activePowerValue, 2) + Math.pow(reactivePowerValue, 2));

    if (fullPowerResult < MAX_INCREASED_ACCURACY_NUMBER) {
        fullPowerResultOutputElement.textContent = fullPowerResult.toFixed(3);
    } else {
        fullPowerResultOutputElement.textContent = fullPowerResult.toFixed(2);
    }
});