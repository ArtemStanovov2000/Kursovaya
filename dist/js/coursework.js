const table = document.querySelector('.table__body')
const tableButton = document.getElementById('table__button')
const tableLineCount = 8;
let tableItem = document.querySelectorAll('.table__item')

for (let i = 0; i < tableLineCount; i++) {
    table.appendChild(tableItem[0].cloneNode(true))
}
tableItem = document.querySelectorAll('.table__item')

let tableItemNumber = document.querySelectorAll('.table__item__number')
for (let i = 0; i < tableLineCount; i++) {
    tableItemNumber[i + 1].innerHTML = i + 1;
}

let tableItemDeck = document.querySelectorAll('.table__item__deck')
for (let i = 0; i < tableLineCount; i++) {
    const inputDeck = document.createElement('input');
    inputDeck.classList.add("table__input", "table__input__deck");
    tableItemDeck[i + 1].appendChild(inputDeck);
}

let tableItemCount = document.querySelectorAll('.table__item__count')
for (let i = 0; i < tableLineCount; i++) {
    const inputCount = document.createElement('input');
    inputCount.classList.add("table__input", "table__input__count");
    tableItemCount[i + 1].appendChild(inputCount);
}

let tableItemPower = document.querySelectorAll('.table__item__power')
for (let i = 0; i < tableLineCount; i++) {
    const inputPower = document.createElement('input');
    inputPower.classList.add("table__input", "table__input__power");
    tableItemPower[i + 1].appendChild(inputPower);
}

let tableItemCoefficient = document.querySelectorAll('.table__item__coefficient')
for (let i = 0; i < tableLineCount; i++) {
    const inputCoefficient = document.createElement('input');
    inputCoefficient.classList.add("table__input", "table__input__coefficient");
    tableItemCoefficient[i + 1].appendChild(inputCoefficient);
}

let tableItemCos = document.querySelectorAll('.table__item__cos')
for (let i = 0; i < tableLineCount; i++) {
    const inputCos = document.createElement('input');
    inputCos.classList.add("table__input", "table__input__cos");
    tableItemCos[i + 1].appendChild(inputCos);
}

let tableItemPercent = document.querySelectorAll('.table__item__percent')
for (let i = 0; i < tableLineCount; i++) {
    const inputPercent = document.createElement('input');
    inputPercent.classList.add("table__input", "table__input__percent");
    tableItemPercent[i + 1].appendChild(inputPercent);
}

const inputPower1 = document.querySelectorAll('.table__input__power');
const inputReactivePower = document.querySelectorAll('.table__input__cos');
const inputCoefficient = document.querySelectorAll('.table__input__coefficient');
const tableItemPower1 = document.querySelectorAll('.table__item__power');
const tableItemActivePower = document.querySelectorAll('.table__item__active__power');
const tableItemReactivePower = document.querySelectorAll('.table__item__reactive__power');

table.addEventListener("change", evt => {
    if (evt.target.classList.contains("table__input")) {
        let fullPower = 0;
        let fullPowerActive = 0;
        let fullPowerReactive = 0;
        for (let i = 0; i < tableLineCount; i++) {
            fullPower = fullPower + Number(inputPower1[i].value);
            let shiftPowerValue = Number(inputPower1[i].value) * Number(inputCoefficient[i].value);
            fullPowerActive = fullPowerActive + shiftPowerValue;
            tableItemActivePower[i + 1].innerHTML = shiftPowerValue.toFixed(2);
            let powerReactive = shiftPowerValue * Number(inputReactivePower[i].value)
            fullPowerReactive = fullPowerReactive + powerReactive;
            tableItemReactivePower[i + 1].innerHTML = powerReactive.toFixed(2);
        }
        tableItemPower1[tableLineCount + 1].innerHTML = fullPower.toFixed(2);
        tableItemActivePower[tableLineCount + 1].innerHTML = fullPowerActive.toFixed(2);
        tableItemReactivePower[tableLineCount + 1].innerHTML = fullPowerReactive.toFixed(2);
    }
});



