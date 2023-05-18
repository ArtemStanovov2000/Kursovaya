const secondsElement = document.getElementById('seconds');
const minutesElement = document.getElementById('minutes');
const hoursElement = document.getElementById('hours');
const DaysElement = document.getElementById('days');
const monthElement = document.getElementById('month');

const DateFullYearsInput = document.getElementById('Date__fullYears__input');
const DateMonthInput = document.getElementById('Date__months__input');
const DateDayInput = document.getElementById('Date__days__input');
const DateHoursInput = document.getElementById('Date__hours__input');

const dateRateBox = document.querySelector(".Date__rate__box");
const dateRateInput = document.querySelectorAll(".Date__input");

const MAX_VALUE_YEAR = 2;

const TimeCount = {
    MilliSeconds: {
        inSeconds: 1000
    },
    Seconds: {
        inMinutes: 60,
        inHours: 3600,
        inDays: 86400,
        inMonth: 2592000,
        inYear: 31536000,
    },
    Minutes: {
        inHours: 60,
        inDays: 1440,
        inMonth: 43200,
        inYear: 525600,
    },
    Hours: {
        inDays: 24,
        inMonth: 720,
        inYear: 8760,
    },
    Days: {
        inMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        inYear: 365,
    },
    Month: {
        inYear: 12,
    },
};

const yearValueInputValidity = function yearValueInputValidity(input, time, maxValue) {
    if ((input.value - time.getFullYear()) < 0) {
        return input.value = time.getFullYear();
    } else if ((input.value - time.getFullYear()) > maxValue) {
        return input.value = time.getFullYear() + maxValue;
    } else {
        return input.value = input.value;
    };
};

const monthValueInputValidity = function monthValueInputValidity(inputYear, inputMonth, time, maxValue) {
    if ((inputYear.value - time.getFullYear()) <= 0) {
        if (inputMonth.value - (time.getMonth() + 1) <= 0) {
            return inputMonth.value = time.getMonth() + 1;
        } else if (inputMonth.value > maxValue) {
            return inputMonth.value = maxValue;
        }
    } else if ((inputYear.value - time.getFullYear()) > 0) {
        if (inputMonth.value > maxValue) {
            return inputMonth.value = maxValue;
        } else if (inputMonth.value < 1) {
            return inputMonth.value = 1;
        }
        return inputMonth.value = inputMonth.value;
    }
};

const dateValueInputValidity = function dateValueInputValidity(inputYear, inputMonth, inputDate, time, maxValue) {
    if (((inputYear.value - time.getFullYear()) <= 0) && (inputMonth.value - (time.getMonth() + 1) <= 0)) {
        if ((inputDate.value - time.getDate()) <= 0) {
            return inputDate.value = time.getDate();
        } else if (inputDate.value > maxValue[inputMonth.value - 1]) {
            return inputDate.value = maxValue[inputMonth.value - 1];
        } else {
            return inputDate.value = inputDate.value;
        }
    } else {
        if (inputDate.value > maxValue[inputMonth.value - 1]) {
            return inputDate.value = maxValue[inputMonth.value - 1];
        } else if (inputDate.value < 1) {
            return inputDate.value = 1;
        } else {
            return inputDate.value = inputDate.value;
        }
    }
};

const hoursValueInputValidity = function hoursValueInputValidity(inputYear, inputMonth, inputDate, inputHours, time, maxValue) {
    if (((inputYear.value - time.getFullYear()) <= 0) && (inputMonth.value - (time.getMonth() + 1) <= 0) && ((inputDate.value - time.getDate()) <= 0)) {
        if ((inputHours.value - time.getHours()) <= 0) {
            return inputHours.value = (time.getHours() + 1);
        } else if (inputHours.value > (maxValue - 1)) {
            return inputHours.value = (maxValue - 1);
        } else {
            return inputHours.value = inputHours.value;
        }
    } else {
        if (inputHours.value > (maxValue - 1)) {
            return inputHours.value = (maxValue - 1);
        } else if (inputHours.value < 1) {
            return inputHours.value = 1;
        } else {
            return inputHours.value = inputHours.value;
        }
    }
};

const setTimeValue = function setTimeValue(setTime, yearValue, monthValue, dateValue, hoursValue, minutesValue, secondsValue) {
    setTime.setFullYear(yearValue);
    setTime.setMonth(monthValue - 1);
    setTime.setDate(dateValue);
    setTime.setHours(hoursValue);
    setTime.setMinutes(minutesValue);
    setTime.setSeconds(secondsValue);
    setTime.setMilliseconds(0);
    return setTime;
};

function timer() {
    const now = new Date();
    const nowMoment = now.getTime();
    const projectCompletionDate = new Date();

    DateFullYearsInput.addEventListener("change", () => {
        yearValueInputValidity(DateFullYearsInput, now, MAX_VALUE_YEAR);
    });
    const DateFullYearsInputValue = DateFullYearsInput.value;
    DateMonthInput.addEventListener("change", () => {
        monthValueInputValidity(DateFullYearsInput, DateMonthInput, now, TimeCount.Month.inYear);
    });
    const DateMonthInputValue = DateMonthInput.value;
    DateDayInput.addEventListener("change", () => {
        dateValueInputValidity(DateFullYearsInput, DateMonthInput, DateDayInput, now, TimeCount.Days.inMonth);
    });
    const DateDayInputValue = DateDayInput.value;
    DateHoursInput.addEventListener("change", () => {
        hoursValueInputValidity(DateFullYearsInput, DateMonthInput, DateDayInput, DateHoursInput, now, TimeCount.Hours.inDays);
    });
    const DateHoursInputValue = DateHoursInput.value;
    setTimeValue(projectCompletionDate, DateFullYearsInputValue, DateMonthInputValue, DateDayInputValue, DateHoursInputValue, 0, 0);
    const projectCompletionDateTimeValue = projectCompletionDate.getTime();

    const timeDifferentInSeconds = (projectCompletionDateTimeValue - nowMoment) / TimeCount.MilliSeconds.inSeconds;

    const monthDifferent = Math.floor(timeDifferentInSeconds / TimeCount.Seconds.inMonth);
    const remainingSecondsFromMonths = timeDifferentInSeconds - (monthDifferent * TimeCount.Seconds.inMonth);
    const dayDifferent = Math.floor(remainingSecondsFromMonths / TimeCount.Seconds.inDays);
    const remainingSecondsFromDays = remainingSecondsFromMonths - (dayDifferent * TimeCount.Seconds.inDays);
    const hoursDifferent = Math.floor(remainingSecondsFromDays / TimeCount.Seconds.inHours);
    const remainingSecondsFromHours = remainingSecondsFromDays - (hoursDifferent * TimeCount.Seconds.inHours);
    const minutesDifferent = Math.floor(remainingSecondsFromHours / TimeCount.Seconds.inMinutes);
    const remainingSecondsFromMinutes = remainingSecondsFromHours - (minutesDifferent * TimeCount.Seconds.inMinutes);
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



