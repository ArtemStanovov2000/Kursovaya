let secondsElement = document.getElementById('seconds');
let dozensSecondsElement = document.getElementById('dozens_seconds');

let minutesElement = document.getElementById('minutes');
let dozensMinutesElement = document.getElementById('dozens_minutes');

let hoursElement = document.getElementById('hours');
let dozensHoursElement = document.getElementById('dozens_hours');

let DaysElement = document.getElementById('days');
let dozensDaysElement = document.getElementById('dozens_days');

let monthElement = document.getElementById('month');

let DateMonthInput = document.getElementById('Date__month__input').value;
let DateDayInput = document.getElementById('Date__day__input').value;
let DateButtonElement = document.getElementById('Date_button');

const NumbersDayInMonthsOfYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function timeg() {
    let now = new Date();

    let MonthsNow = now.getMonth() + 1;
    let DaysNow = now.getDate();
    let hoursNow = now.getHours();
    let MinutesNow = now.getMinutes();
    let SecondsNow = now.getSeconds();

    let NumbersOfSecondNow = hoursNow * 3600 + MinutesNow * 60 + SecondsNow;
    let remainingNumberOfSecondNow = 86400 - NumbersOfSecondNow;
    let remainingNumberOfHoursNow = Math.floor(remainingNumberOfSecondNow / 3600);
    let remainingNumberOfMinutesNow = remainingNumberOfSecondNow - remainingNumberOfHoursNow * 3600;
    let remainingNumberOfMinutesInHours = Math.floor(remainingNumberOfMinutesNow / 60);
    let remainingNumberOfSecondsInMinutes = remainingNumberOfMinutesNow % 60;

    secondsElement.textContent = remainingNumberOfSecondsInMinutes % 10;
    dozensSecondsElement.textContent = Math.floor(remainingNumberOfSecondsInMinutes / 10);

    minutesElement.textContent = remainingNumberOfMinutesInHours % 10;
    dozensMinutesElement.textContent = Math.floor(remainingNumberOfMinutesInHours / 10);

    hoursElement.textContent = remainingNumberOfHoursNow % 10;
    dozensHoursElement.textContent = Math.floor(remainingNumberOfHoursNow / 10);

    DaysElement.textContent = NumbersDayInMonthsOfYear[MonthsNow + 1] - DaysNow;

    monthElement.textContent = DateMonthInput - MonthsNow;
};

DateButtonElement.addEventListener("click", () => {
    timeid = null;

    timeg();

    timeid = setInterval(timeg, 200);
});


