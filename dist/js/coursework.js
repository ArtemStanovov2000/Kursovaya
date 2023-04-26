const table = document.querySelector(".table__body")
let tableItem = document.querySelectorAll(".table__item")
const tableLineCount = 7;

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

table.addEventListener("change", evt => {
    if (evt.target.classList.contains("table__input")) {
        let sumCountValue = 0;
        let sumPowerValue = 0;
        let sumActivePowerValue = 0;
        let sumReactivePowerValue = 0;
        tableItem.forEach((item, index) => {
            sumCountValue += Number(AllInputCount[index].value);
            sumPowerValue += Number(AllInputPower[index].value);
            let activePowerValue = Number(AllInputPower[index].value) * Number(AllInputRate[index].value);
            sumActivePowerValue += activePowerValue;
            tableColumnActivePower[index].innerHTML = activePowerValue.toFixed(2);
            let reactivePowerValue = activePowerValue * Number(AllInputCos[index].value);
            sumReactivePowerValue += reactivePowerValue;
            tableColumnReactivePower[index].innerHTML = reactivePowerValue.toFixed(2);
        });
        tableCellCount.innerHTML = sumCountValue.toFixed(0);
        tableCellPower.innerHTML = sumPowerValue.toFixed(2);
        tableCellActivePower.innerHTML = sumActivePowerValue.toFixed(2);
        tableCellReactivePower.innerHTML = sumReactivePowerValue.toFixed(2);
    }
});




