const UNITS_IN_KILO = 1000;
const MAX_INPUT_VALUE = 1000;
const MAX_INCREASED_ACCURACY_NUMBER = 10;
const REGULAR_NUMBERS_FRACTIONAL_DIGITS_COUNT = 0;
const INCREASED_ACCURACY_NUMBERS_FRACTIONAL_DIGITS_COUNT = 2;

const amperageConversionButton = document.getElementById("amperage-conversion-button");
const voltageConversionButton = document.getElementById("voltage-conversion-button");
const electricalPowerConversionButton = document.getElementById("power-conversion-button");
const fullPowerConversionButton = document.getElementById("full-power-conversion");
const radioButtonNumbersFractionalDigitsCount = document.querySelectorAll('input[name="accuracy"]');
const accuracyCalculationsLabel = document.querySelectorAll(".accuracy-calculations__label");
const accuracyCalculations = document.querySelector(".accuracy-calculations");

let numbersFractionalDigitsCount;

const selectingRadioButtonValue = function selectingRadioButtonValue(radioButtonNumbersFractionalDigitsCount) {
    radioButtonNumbersFractionalDigitsCount.forEach((radioButton, index) => {
        if (radioButton.checked) {
            numbersFractionalDigitsCount = radioButton.value;
        }
        return numbersFractionalDigitsCount;
    });
}

const conversionFromKiloToUnits = function conversionFromKiloToUnits(value) {
    if (value > MAX_INPUT_VALUE) {
        value = MAX_INPUT_VALUE
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
    const amperageValue = document.getElementById("amperage-input").value;
    const amperageResultOutputElement = document.getElementById("amperage-result");
    amperageResultOutputElement.textContent = conversionFromKiloToUnits(amperageValue);
});

voltageConversionButton.addEventListener("click", () => {
    const voltageValue = document.getElementById("voltage-input").value;
    const voltageResultOutputElement = document.getElementById("voltage-result");
    voltageResultOutputElement.textContent = conversionFromKiloToUnits(voltageValue);
});

electricalPowerConversionButton.addEventListener("click", () => {
    const electricalPowerValue = document.getElementById("electrical-power-input").value;
    const electricalPowerResultOutputElement = document.getElementById("electrical-power-result");
    electricalPowerResultOutputElement.textContent = conversionFromKiloToUnits(electricalPowerValue);
});

fullPowerConversionButton.addEventListener("click", () => {
    const activePowerValue = document.getElementById("power-active-input").value;
    const reactivePowerValue = document.getElementById("power-reactive-input").value;
    const fullPowerResultOutputElement = document.getElementById("full-power");

    const fullPowerResult = Math.sqrt(Math.pow(activePowerValue, 2) + Math.pow(reactivePowerValue, 2));

    if (fullPowerResult < MAX_INCREASED_ACCURACY_NUMBER) {
        fullPowerResultOutputElement.textContent = fullPowerResult.toFixed(3);
    } else {
        fullPowerResultOutputElement.textContent = fullPowerResult.toFixed(2);
    }
});