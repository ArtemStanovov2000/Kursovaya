const estimationInput = document.getElementById('estimation');
const waitingTimeInput = document.getElementById('waiting_time');
const numberOfItemInput = document.getElementById('number_of_item');
const finalPriceElement = document.getElementById('final_price');
const numberOfWeeksElement = document.getElementById('number_of_weeks');
const numberOfDaysElement = document.getElementById('number_of_days');
const deckWeeksElement = document.getElementById('deck_weeks');
const deckDaysElement = document.getElementById('deck_days');

const MIN_PRICE = 750;
const PRICE_FACTOR = 500;
const NUMBER_DAYS_IN_WEEK = 7;

const declensionOfNumeralsWeeks = ["недель", "неделя", "недели", "недели", "недели", "недель", "недель", "недель", "недель", "недель"];
const declensionOfNumeralsDays = ["дней", "день", "дня", "дня", "дня", "дней", "дней"];

function calculationCostOfCourse() {
    estimationValue = estimationInput.value;
    waitingTimeValue = waitingTimeInput.value;
    numberOfItemValue = numberOfItemInput.value

    //приравнивает диапазон значений от 1 до 21 в диапазон от 1 до 4
    const equatedWaitingTimeCoefficient = ((waitingTimeValue - 1) / NUMBER_DAYS_IN_WEEK) + 1;

    const waitingInDaysValue = (waitingTimeValue - 1) % NUMBER_DAYS_IN_WEEK;
    const waitingInWeeksValue = Math.ceil(waitingTimeValue / NUMBER_DAYS_IN_WEEK);

    numberOfDaysElement.innerHTML = waitingInDaysValue;
    deckDaysElement.innerHTML = declensionOfNumeralsDays[waitingInDaysValue];
    numberOfWeeksElement.innerHTML = waitingInWeeksValue;
    deckWeeksElement.innerHTML = declensionOfNumeralsWeeks[waitingInWeeksValue];

    finalPriceValue = estimationValue / Math.sqrt(equatedWaitingTimeCoefficient) * numberOfItemValue * PRICE_FACTOR;
    if (finalPriceValue > MIN_PRICE) {
        finalPriceElement.innerHTML = finalPriceValue.toFixed(0);
    } else {
        finalPriceElement.innerHTML = MIN_PRICE;
    };
};