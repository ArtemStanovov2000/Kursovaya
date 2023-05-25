const estimationInput = document.getElementById("estimation");
const waitingTimeInput = document.getElementById("waiting-time");
const numberOfItemInput = document.getElementById("number-of-item");
const finalPriceElement = document.getElementById("final-price");
const numberOfWeeksElement = document.getElementById("number-of-weeks");
const numberOfDaysElement = document.getElementById("number-of-days");
const deckWeeksElement = document.getElementById("deck-weeks");
const deckDaysElement = document.getElementById("deck-days");
const parameterEstimationList = document.querySelector(".parameter-estimation__list");

const MIN_PRICE = 750;
const PRICE_FACTOR = 500;
const NUMBER_DAYS_IN_WEEK = 7;

const declensionOfNumeralsWeeks = ["недель", "неделя", "недели", "недели", "недели", "недель", "недель", "недель", "недель", "недель"];
const declensionOfNumeralsDays = ["дней", "день", "дня", "дня", "дня", "дней", "дней"];

const calculationCostOfCourse = function calculationCostOfCourse() {
    estimationValue = estimationInput.value;
    waitingTimeValue = waitingTimeInput.value;
    numberOfItemValue = numberOfItemInput.value

    //приравнивает диапазон значений от 1 до 21 в диапазон от 1 до 4
    const equatedWaitingTimeCoefficient = ((waitingTimeValue - 1) / NUMBER_DAYS_IN_WEEK) + 1;

    const waitingInDaysValue = (waitingTimeValue - 1) % NUMBER_DAYS_IN_WEEK;
    const waitingInWeeksValue = Math.ceil(waitingTimeValue / NUMBER_DAYS_IN_WEEK);

    numberOfDaysElement.textContent = waitingInDaysValue;
    deckDaysElement.textContent = declensionOfNumeralsDays[waitingInDaysValue];
    numberOfWeeksElement.textContent = waitingInWeeksValue;
    deckWeeksElement.textContent = declensionOfNumeralsWeeks[waitingInWeeksValue];

    finalPriceValue = estimationValue / Math.sqrt(equatedWaitingTimeCoefficient) * numberOfItemValue * PRICE_FACTOR;
    if (finalPriceValue > MIN_PRICE) {
        finalPriceElement.textContent = finalPriceValue.toFixed(0);
    } else {
        finalPriceElement.textContent = MIN_PRICE;
    };
};

calculationCostOfCourse()

parameterEstimationList.addEventListener("input", evt => {
    if (evt.target.classList.contains("range-container__input")) {
        calculationCostOfCourse();
    };
});