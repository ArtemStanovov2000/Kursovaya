const secondsElement = document.getElementById('seconds');
const minutesElement = document.getElementById('minutes');
const hoursElement = document.getElementById('hours');
const DaysElement = document.getElementById('days');
const monthElement = document.getElementById('month');

const DateFullYearsInput = document.getElementById('Date__fullYears__input');
const DateMonthInput = document.getElementById('Date__months__input');
const DateDayInput = document.getElementById('Date__days__input');
const DateHoursInput = document.getElementById('Date__hours__input');

const COUNT_SECONDS_IN_MINUTES = 60;
const COUNT_SECONDS_IN_HOURS = 3600;
const COUNT_SECONDS_IN_DAYS = 86400;
const COUNT_SECONDS_IN_MONTH = 2592000;
const COUNT_SECONDS_IN_YEAR = 31536000;
const MILLISECONDS_IN_SECONDS = 1000;

const MAX_VALUE_YEAR = 2;

function timer() {
    const now = new Date();
    const nowMoment = now.getTime();
    // год
    if ((DateFullYearsInput.value - now.getFullYear()) < 0) {
        DateFullYearsInput.value = now.getFullYear();
    } else if ((DateFullYearsInput.value - now.getFullYear()) > MAX_VALUE_YEAR) {
        DateFullYearsInput.value = now.getFullYear() + MAX_VALUE_YEAR;
    } else {
        DateFullYearsInput.value = DateFullYearsInput.value;
    };
    const DateFullYearsInputValue = DateFullYearsInput.value;
    //месяц
    if ((DateFullYearsInputValue - now.getFullYear()) <= 0) {
        if (DateMonthInput.value - (now.getMonth() + 1) <= 0) {
            DateMonthInput.value = now.getMonth() + 1;
        } else if (DateMonthInput.value > 12) {
            DateMonthInput.value = 11;
        }
    } else if ((DateFullYearsInputValue - now.getFullYear()) > 0) {
        if (DateMonthInput.value > 12) {
            DateMonthInput.value = 11;
        } else if (DateMonthInput.value < 1) {
            DateMonthInput.value = 1;
        }
        DateMonthInput.value = DateMonthInput.value;
    }
    const DateMonthInputValue = DateMonthInput.value;
    //день
    if (((DateFullYearsInputValue - now.getFullYear()) <= 0) && (DateMonthInputValue - (now.getMonth() + 1) <= 0)) {
        if ((DateDayInput.value - now.getDate()) <= 0) {
            console.log(now.getDate())
            DateDayInput.value = now.getDate();
        } else if (DateDayInput.value > 31) {
            DateDayInput.value = 30;
        } else {
            DateDayInput.value = DateDayInput.value;
        }
    } else {
        if (DateDayInput.value > 31) {
            DateDayInput.value = 30;
        } else if (DateDayInput.value < 1) {
            DateDayInput.value = 1;
        } else {
            DateDayInput.value = DateDayInput.value;
        }
    }
    const DateDayInputValue = DateDayInput.value;

    //час
    if (((DateFullYearsInputValue - now.getFullYear()) <= 0) && (DateMonthInputValue - (now.getMonth() + 1) <= 0) && ((DateDayInput.value - now.getDate()) <= 0)) {
        if ((DateHoursInput.value - now.getHours()) <= 0) {
            DateHoursInput.value = (now.getHours() + 1);
        } else if (DateHoursInput.value > 23) {
            DateHoursInput.value = 22;
        } else {
            DateHoursInput.value = DateHoursInput.value;
        }
    } else {
        if (DateHoursInput.value > 23) {
            DateHoursInput.value = 22;
        } else if (DateHoursInput.value < 1) {
            DateHoursInput.value = 1;
        } else {
            DateHoursInput.value = DateHoursInput.value;
        }
    }
    const DateHoursInputValue = DateHoursInput.value;

    const projectCompletionDate = new Date();
    projectCompletionDate.setFullYear(DateFullYearsInputValue);
    projectCompletionDate.setMonth(DateMonthInputValue - 1);
    projectCompletionDate.setDate(DateDayInputValue);
    projectCompletionDate.setHours(DateHoursInputValue);
    projectCompletionDate.setMinutes(0);
    projectCompletionDate.setSeconds(0);
    projectCompletionDate.setMilliseconds(0);
    const projectCompletionDateTimeValue = projectCompletionDate.getTime();

    const timeDifferentInSeconds = (projectCompletionDateTimeValue - nowMoment) / MILLISECONDS_IN_SECONDS;

    const monthDifferent = Math.floor(timeDifferentInSeconds / COUNT_SECONDS_IN_MONTH);
    const remainingSecondsFromMonths = timeDifferentInSeconds - (monthDifferent * COUNT_SECONDS_IN_MONTH);
    const dayDifferent = Math.floor(remainingSecondsFromMonths / COUNT_SECONDS_IN_DAYS);
    const remainingSecondsFromDays = remainingSecondsFromMonths - (dayDifferent * COUNT_SECONDS_IN_DAYS);
    const hoursDifferent = Math.floor(remainingSecondsFromDays / COUNT_SECONDS_IN_HOURS);
    const remainingSecondsFromHours = remainingSecondsFromDays - (hoursDifferent * COUNT_SECONDS_IN_HOURS);
    const minutesDifferent = Math.floor(remainingSecondsFromHours / COUNT_SECONDS_IN_MINUTES);
    const remainingSecondsFromMinutes = remainingSecondsFromHours - (minutesDifferent * COUNT_SECONDS_IN_MINUTES);
    const secondsDifferent = Math.floor(remainingSecondsFromMinutes);

    monthElement.textContent = monthDifferent;
    DaysElement.textContent = dayDifferent;
    hoursElement.textContent = hoursDifferent;
    minutesElement.textContent = minutesDifferent;
    secondsElement.textContent = secondsDifferent;
};

timeid = null;

timer();

timeid = setInterval(timer, 100);



