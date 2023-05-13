const table = document.querySelector(".table__body")
let tableItem = document.querySelectorAll(".table__item")
const listPowerSettingCalculation = document.querySelector(".list__power__setting__calculation")
const listActivePowerSettingCalculation = document.querySelector(".list__active__power__setting__calculation")
const listReactivePowerSettingCalculation = document.querySelector(".list__reactive__power__setting__calculation")

const tableLineCount = 7;
const MAX_VALUE_PERCENT = 100;
const MAX_VALUE_COS = 1;
const MAX_VALUE_RATE = 1;
const COUNT_PERCENT_IN_UNIT = 100;

//создаем строки таблицы
for (let i = 0; i < tableLineCount; i++) {
    table.appendChild(tableItem[0].cloneNode(true))
}
tableItem = document.querySelectorAll(".table__item")

const tableColumnNumber = document.querySelectorAll(".table__column__number")
tableColumnNumber.forEach((item, index) => {
    item.innerHTML = index + 1;
});

const tableColumnName = document.querySelectorAll(".table__column__name")
tableColumnName.forEach((item, index) => {
    const inputName = document.createElement("input");
    inputName.classList.add("table__input", "table__input__name");
    tableColumnName[index].appendChild(inputName);
});

const tableColumnCount = document.querySelectorAll('.table__column__count')
tableColumnCount.forEach((item, index) => {
    const inputCount = document.createElement("input");
    inputCount.classList.add("table__input", "table__input__count");
    tableColumnCount[index].appendChild(inputCount);
});

const tableColumnPower = document.querySelectorAll('.table__column__power')
tableColumnPower.forEach((item, index) => {
    const inputPower = document.createElement("input");
    inputPower.classList.add("table__input", "table__input__power");
    tableColumnPower[index].appendChild(inputPower);
});

const tableColumnRate = document.querySelectorAll('.table__column__rate')
tableColumnRate.forEach((item, index) => {
    const inputRate = document.createElement("input");
    inputRate.classList.add("table__input", "table__input__rate");
    tableColumnRate[index].appendChild(inputRate);
});

const tableColumnCos = document.querySelectorAll('.table__column__cos')
tableColumnCos.forEach((item, index) => {
    const inputCos = document.createElement("input");
    inputCos.classList.add("table__input", "table__input__cos");
    tableColumnCos[index].appendChild(inputCos);
});

const tableColumnPercent = document.querySelectorAll('.table__column__percent')
tableColumnPercent.forEach((item, index) => {
    const inputPercent = document.createElement("input");
    inputPercent.classList.add("table__input", "table__input__percent");
    tableColumnPercent[index].appendChild(inputPercent);
});

//находим созданные инпуты и ячейки вывода
const AllInputName = document.querySelectorAll(".table__input__name");
const AllInputCount = document.querySelectorAll(".table__input__count");
const AllInputPower = document.querySelectorAll(".table__input__power");
const AllInputRate = document.querySelectorAll(".table__input__rate");
const AllInputCos = document.querySelectorAll(".table__input__cos");
const AllInputPercent = document.querySelectorAll(".table__input__percent");
const tableColumnActivePower = document.querySelectorAll(".table__column__active__power");
const tableColumnReactivePower = document.querySelectorAll(".table__column__reactive__power");

//создаем строку с суммами
const tableRow = document.createElement("tr");
tableRow.classList.add("table__row");
table.appendChild(tableRow);
//наполняем строку сумм ячейками сумм
const tableCellNumber = document.createElement("th");
tableCellNumber.classList.add("table__column", "table__result__number");
tableCellNumber.innerHTML = "Σ"
tableRow.appendChild(tableCellNumber);
const tableCellName = document.createElement("th");
tableCellName.classList.add("table__column", "table__result__name");
tableRow.appendChild(tableCellName);
const tableCellCount = document.createElement("th");
tableCellCount.classList.add("table__column", "table__result__count");
tableRow.appendChild(tableCellCount);
const tableCellPower = document.createElement("th");
tableCellPower.classList.add("table__column", "table__result__power");
tableRow.appendChild(tableCellPower);
const tableCellRate = document.createElement("th");
tableCellRate.classList.add("table__column", "table__result__rate");
tableRow.appendChild(tableCellRate);
const tableCellCos = document.createElement("th");
tableCellCos.classList.add("table__column", "table__result__cos");
tableRow.appendChild(tableCellCos);
const tableCellPercent = document.createElement("th");
tableCellPercent.classList.add("table__column", "table__result__percent");
tableRow.appendChild(tableCellPercent);
const tableCellActivePower = document.createElement("th");
tableCellActivePower.classList.add("table__column", "table__result__active__power");
tableRow.appendChild(tableCellActivePower);
const tableCellReactivePower = document.createElement("th");
tableCellReactivePower.classList.add("table__column", "table__result__reactive__power");
tableRow.appendChild(tableCellReactivePower);

const calculatePowerMachineOfHRA = function calculatePowerMachineOfHRA() {
    let sumCountValue = 0;
    let sumPowerValue = 0;
    let sumActivePowerValue = 0;
    let sumReactivePowerValue = 0;
    tableItem.forEach((item, index) => {
        sumCountValue += Number(AllInputCount[index].value);
        sumPowerValue += Number(AllInputPower[index].value);
        let activePowerValue = Number(AllInputPower[index].value) * Number(AllInputRate[index].value);
        sumActivePowerValue += activePowerValue;
        tableColumnActivePower[index].textContent = activePowerValue.toFixed(2);
        let reactivePowerValue = activePowerValue * Number(AllInputCos[index].value);
        sumReactivePowerValue += reactivePowerValue;
        tableColumnReactivePower[index].textContent = reactivePowerValue.toFixed(2);
    });
    tableCellCount.textContent = sumCountValue.toFixed(0);
    tableCellPower.textContent = sumPowerValue.toFixed(2);
    tableCellActivePower.textContent = sumActivePowerValue.toFixed(2);
    tableCellReactivePower.textContent = sumReactivePowerValue.toFixed(2);
}

const comparisonSignMoreThen = ">"
const comparisonSignLessThan = "<"

const validationCellOfRow = function validationCellOfRow(row, validateInput, validValue, comparison) {
    row.forEach((item, index) => {
        if (comparison === ">") {
            if (Number(validateInput[index].value) > validValue) {
                validateInput[index].style.backgroundColor = 'rgb(222, 20, 32)';
            } else {
                validateInput[index].style.backgroundColor = '';
            }
        } else {
            if (Number(validateInput[index].value) < validValue) {
                validateInput[index].style.backgroundColor = 'rgb(222, 20, 32)';
            } else {
                validateInput[index].style.backgroundColor = '';
            }
        }
    });
}

const validationRowOfTable = function validationRowOfTable() {
    validationCellOfRow(tableItem, AllInputPercent, MAX_VALUE_PERCENT, comparisonSignMoreThen);
    validationCellOfRow(tableItem, AllInputCos, MAX_VALUE_COS, comparisonSignLessThan);
    validationCellOfRow(tableItem, AllInputRate, MAX_VALUE_RATE, comparisonSignMoreThen);
}

const getPercentLessUnitList = function getPercentLessUnitList(row, validateInput) {
    listPowerSettingCalculation.innerHTML = "";
    row.forEach((item, index) => {
        if (Number(validateInput[index].value) < MAX_VALUE_PERCENT) {
            let PVPercent = Number(validateInput[index].value) / COUNT_PERCENT_IN_UNIT;
            let fullPower = (Number(AllInputPower[index].value) / Math.sqrt(PVPercent)).toFixed(1);
            const itemPVCalculateTable = document.createElement("li");
            itemPVCalculateTable.classList.add("power__setting__calculation__item");
            itemPVCalculateTable.textContent = `Руст` + `${index + 1}` + ` ` + `=` + ` ` + `${fullPower}` + ` ` + `*` + ` ` + `√` + `${PVPercent}`
            listPowerSettingCalculation.appendChild(itemPVCalculateTable);
        }
    });
}

const calculateActivePoverList = function calculateActivePoverList(row, value1, value2) {
    listActivePowerSettingCalculation.innerHTML = "";
    row.forEach((item, index) => {
        const itemActivePoverCalculate = document.createElement("li");
        itemActivePoverCalculate.classList.add("power__setting__calculation__item");
        let activePover = value1[index].value * value2[index].value
        itemActivePoverCalculate.textContent = `Рсм` + `${index + 1}` + ` ` + `=` + ` ` + `${value1[index].value}` + ` ` + `*` + ` ` + `${value2[index].value}` + ` ` + `=` + ` ` + `${activePover.toFixed(2)}` + ` ` + `кВт`
        listActivePowerSettingCalculation.appendChild(itemActivePoverCalculate);
    });
}

const calculateReactivePoverList = function calculateReactivePoverList(row, value1, value2, value3) {
    listReactivePowerSettingCalculation.innerHTML = "";
    row.forEach((item, index) => {
        const itemReactivePoverCalculate = document.createElement("li");
        itemReactivePoverCalculate.classList.add("power__setting__calculation__item");
        let activePover = value1[index].value * value2[index].value;
        let reactivePover = activePover * value3[index].value;
        itemReactivePoverCalculate.textContent = `𝑄см` + `${index + 1}` + ` ` + `=` + ` ` + `${activePover.toFixed(2)}` + ` ` + `*` + ` ` + `${value2[index].value}` + ` ` + `=` + ` ` + `${reactivePover.toFixed(2)}` + ` ` + `квар`
        listReactivePowerSettingCalculation.appendChild(itemReactivePoverCalculate);
    });
}

table.addEventListener("change", evt => {
    if (evt.target.classList.contains("table__input")) {
        calculatePowerMachineOfHRA();
        validationRowOfTable();
        getPercentLessUnitList(tableItem, AllInputPercent);
        calculateActivePoverList(tableItem, AllInputPower, AllInputRate);
        calculateReactivePoverList(tableItem, AllInputPower, AllInputRate, AllInputCos);
    };
});






