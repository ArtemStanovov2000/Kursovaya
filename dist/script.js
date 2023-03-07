const REMOVING_PREFIX_KILO = 1000;
const LIMIT_OF_INCREASED_ACCURACY = 10;

const buttonAmperageConversion = document.getElementById("amperageConversion");
const buttonVoltageConversion = document.getElementById("voltageConversion");
const buttonElectricalPowerConversion = document.getElementById("powerConversion");

buttonAmperageConversion.addEventListener("click", () => {
    let amperageValue = document.getElementById("amperage_input").value
    let amperageResultOutput = document.getElementById("amperage_result")

    let amperageResult = amperageValue * REMOVING_PREFIX_KILO;

    if (amperageResult < LIMIT_OF_INCREASED_ACCURACY) {
        amperageResultOutput.innerHTML = amperageResult.toFixed(2);
    } else {
        amperageResultOutput.innerHTML = amperageResult.toFixed(0);
    }
});

buttonVoltageConversion.addEventListener("click", () => {
    let voltageValue = document.getElementById("voltage_input").value
    let voltageResultOutput = document.getElementById("voltage_result")

    let voltageResult = voltageValue * REMOVING_PREFIX_KILO;

    if (voltageResult < LIMIT_OF_INCREASED_ACCURACY) {
        voltageResultOutput.innerHTML = voltageResult.toFixed(2);
    } else {
        voltageResultOutput.innerHTML = voltageResult.toFixed(0);
    }
});

buttonElectricalPowerConversion.addEventListener("click", () => {
    let electricalPowerValue = document.getElementById("electrical_power_input").value
    let electricalPowerResultOutput = document.getElementById("electrical_power_result")

    let electricalPowerResult = electricalPowerValue * REMOVING_PREFIX_KILO;

    if (electricalPowerResult < LIMIT_OF_INCREASED_ACCURACY) {
        electricalPowerResultOutput.innerHTML = electricalPowerResult.toFixed(2);
    } else {
        electricalPowerResultOutput.innerHTML = electricalPowerResult.toFixed(0);
    }
});
