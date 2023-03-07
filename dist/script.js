const REMOVING_PREFIX_KILO = 1000;
const LIMIT_OF_INCREASED_ACCURACY = 10;
const FRACTIONAL_PART_OF_LARGE_NUMBERS = 0; // Количество знаков после запятой
const FRACTIONAL_PART_OF_SMALL_NUMBERS = 2; // Количество знаков после запятой

const buttonAmperageConversion = document.getElementById("amperage_conversion");
const buttonVoltageConversion = document.getElementById("voltage_conversion");
const buttonElectricalPowerConversion = document.getElementById("power_conversion");
const buttonFullPowerConversion = document.getElementById("full_power_conversion");

const translationUnitOfMeasurement = function translationUnitOfMeasurement(inputValue, output) {
    let result = inputValue * REMOVING_PREFIX_KILO;
    if (result < LIMIT_OF_INCREASED_ACCURACY) {
        output.innerHTML = result.toFixed(FRACTIONAL_PART_OF_SMALL_NUMBERS);
    } else {
        output.innerHTML = result.toFixed(FRACTIONAL_PART_OF_LARGE_NUMBERS);
    }
}

buttonAmperageConversion.addEventListener("click", () => {
    let amperageValue = document.getElementById("amperage_input").value
    let amperageResultOutput = document.getElementById("amperage_result")
    let inputValue = amperageValue;
    let output = amperageResultOutput;

    translationUnitOfMeasurement(inputValue, output);
});

buttonVoltageConversion.addEventListener("click", () => {
    let voltageValue = document.getElementById("voltage_input").value
    let voltageResultOutput = document.getElementById("voltage_result")
    let inputValue = voltageValue;
    let output = voltageResultOutput;

    translationUnitOfMeasurement(inputValue, output);
});

buttonElectricalPowerConversion.addEventListener("click", () => {
    let electricalPowerValue = document.getElementById("electrical_power_input").value
    let electricalPowerResultOutput = document.getElementById("electrical_power_result")
    let inputValue = electricalPowerValue;
    let output = electricalPowerResultOutput;

    translationUnitOfMeasurement(inputValue, output);
});

buttonFullPowerConversion.addEventListener("click", () => {
    let activePowerValue = document.getElementById("power_active_input").value
    let reactivePowerValue = document.getElementById("power_reactive_input").value
    let fullPowerResultOutput = document.getElementById("full_power")

    let fullPowerResult = Math.sqrt(Math.pow(activePowerValue, 2) + Math.pow(reactivePowerValue, 2));
    console.log(fullPowerResult);

    if (fullPowerResult < LIMIT_OF_INCREASED_ACCURACY) {
        fullPowerResultOutput.innerHTML = fullPowerResult.toFixed(3);
    } else {
        fullPowerResultOutput.innerHTML = fullPowerResult.toFixed(2);
    }
});
