const loginFormCloseButton = document.getElementById("login-form-close-button");
const registationFormCloseButton = document.getElementById("registation-form-close-button");
const openLoginFormLink = document.getElementById("open-login-form-link");
const loginForm = document.getElementById("login-form");
const registationForm = document.getElementById("registation-form");
const createAccountButton = document.getElementById("create-account-button");
const registationFormSubmitButton = document.getElementById("registation-form-submit-button");  

const userLoginInput = document.getElementById("user-login-input");
const userPasswordInput = document.getElementById("user-password-input");
const registationFormNameInput = document.getElementById("registation-form-name-input");
const registationFormAgeInput = document.getElementById("registation-form-age-input");
const registationFormMailInput = document.getElementById("registation-form-mail-input");
const registationFormPhoneNumberInput = document.getElementById("registation-form-phone-number-input");
const registationFormloginInput = document.getElementById("registation-form-login-input");
const registationFormPasswordInput = document.getElementById("registation-form-password-input");

const aboutElement = document.querySelector(".about");
const aboutLinkElement = document.getElementById("about");
const aboutCloseButton = document.getElementById("about-close-button");

aboutLinkElement.addEventListener("click", () => {
    aboutElement.classList.remove("visually-hidden");
});

aboutCloseButton.addEventListener("click", () => {
    aboutElement.classList.add("visually-hidden");
});

const MAX_PERMISSIBLE_AGE = 120;
const MIN_PERMISSIBLE_AGE = 10;
const MAX_EMAIL_NAME = 40;
const MIN_EMAIL_NAME = 7;
const MAX_LENGTH_NAME = 16;
const MIN_LENGTH_NAME = 2;
const PHONE_DIGITS_NUMBERS_MOBILE = 11;
const PHONE_CODE_RUSSIA = 8;
const MAX_LENGTH_LOGIN = 16;
const MIN_LENGTH_LOGIN = 6;
const MAX_LENGTH_PASSWORD = 30;
const MIN_LENGTH_PASSWORD = 10;

openLoginFormLink.addEventListener("click", () => {
    loginForm.classList.remove("visually-hidden");
    userLoginInput.focus();
});

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && !loginForm.classList.contains("visually-hidden")) {
        loginForm.classList.add("visually-hidden");
    }
});

createAccountButton.addEventListener("click", () => {
    registationForm.classList.remove("visually-hidden");
    loginForm.classList.add("visually-hidden");
    registationFormNameInput.focus();
});

loginFormCloseButton.addEventListener("click", () => {
    loginForm.classList.add("visually-hidden");
});

window.addEventListener('keydown', (e) => {
    if (e.key == "Escape" && !registationForm.classList.contains("visually-hidden")) {
        registationForm.classList.add("visually-hidden");
        loginForm.classList.remove("visually-hidden");
    }
});

registationFormCloseButton.addEventListener("click", () => {
    registationForm.classList.add("visually-hidden");
    loginForm.classList.remove("visually-hidden");
});

userLoginInput.addEventListener("change", () => {
    const userLoginInputLength = userLoginInput.value.length;
    if (userLoginInputLength > MAX_LENGTH_LOGIN) {
        userLoginInput.setCustomValidity("Удалите лишние " + (userLoginInputLength - MAX_LENGTH_LOGIN) + " симв.");
    } else if (userLoginInputLength < MIN_LENGTH_LOGIN) {
        userLoginInput.setCustomValidity("Добавьте еще " + (MIN_LENGTH_LOGIN - userLoginInputLength) + " симв.");
    } else {
        userLoginInput.setCustomValidity("");
    }
});

userPasswordInput.addEventListener("change", (evt) => {
    const formInputValue = evt.target.value;
    const regExpPassword = /\D{4}(?=.*(\d{4}))/
    const userPasswordInputLength = userPasswordInput.length;
    if (userPasswordInputLength > MAX_LENGTH_PASSWORD) {
        userPasswordInput.setCustomValidity("Удалите лишние " + (userPasswordInputLength - MAX_LENGTH_PASSWORD) + " симв.");
    } else if (userPasswordInputLength < MIN_LENGTH_PASSWORD) {
        userPasswordInput.setCustomValidity("Добавьте еще " + (MIN_LENGTH_PASSWORD - userPasswordInputLength) + " симв.");
    } else if (userPasswordInput.textContent = !formInputValue.match(regExpPassword)) {
        userPasswordInput.setCustomValidity("Используйте буквы и числа");
    } else {
        userPasswordInput.setCustomValidity("");
    }
});

registationFormNameInput.addEventListener("change", () => {
    const registationFormNameInputLength = registationFormNameInput.value.length;
    if (registationFormNameInputLength > MAX_LENGTH_NAME) {
        registationFormNameInput.setCustomValidity("Удалите лишние " + (registationFormNameInputLength - MAX_LENGTH_NAME) + " симв.");
    } else if (registationFormNameInputLength < MIN_LENGTH_NAME) {
        registationFormNameInput.setCustomValidity("Добавьте еще " + (MIN_LENGTH_NAME - registationFormNameInputLength) + " симв.");
    } else {
        registationFormNameInput.setCustomValidity("");
    }
});

registationFormAgeInput.addEventListener("change", (evt) => {
    const registationFormAgeInputValue = evt.target.value;
    const regExpAge = /\d/g
    if (registationFormAgeInput.textContent = !registationFormAgeInputValue.match(regExpAge)) {
        registationFormAgeInput.setCustomValidity("Возраст можно написать только числами");
    } else if (registationFormAgeInputValue > MAX_PERMISSIBLE_AGE) {
        registationFormAgeInput.setCustomValidity("Изивините, вы не можете быть насколько старым");
    } else if (registationFormAgeInputValue < MIN_PERMISSIBLE_AGE) {
        registationFormAgeInput.setCustomValidity("Изивините, вы слишком молодой");
    } else {
        registationFormAgeInput.setCustomValidity("");
    }
});

registationFormMailInput.addEventListener("change", () => {
    const registationFormMailInputLength = registationFormMailInput.value.length;
    if (registationFormMailInputLength > MAX_EMAIL_NAME) {
        registationFormMailInput.setCustomValidity("Удалите лишние " + (registationFormMailInputLength - MAX_EMAIL_NAME) + " симв.");
    } else if (registationFormMailInputLength < MIN_EMAIL_NAME) {
        registationFormMailInput.setCustomValidity("Добавьте еще " + (MIN_EMAIL_NAMED - registationFormMailInputLength) + " симв.");
    } else {
        registationFormMailInput.setCustomValidity("");
    }
});

registationFormPhoneNumberInput.addEventListener("change", () => {
    const registationFormPhoneNumberInputValue = registationFormPhoneNumberInput.value;
    const registationFormPhoneNumberInputValueLength = registationFormPhoneNumberInputValue.length;
    if (registationFormPhoneNumberInputValueLength == PHONE_DIGITS_NUMBERS_MOBILE && registationFormPhoneNumberInputValue[0] == PHONE_CODE_RUSSIA) {
        registationFormPhoneNumberInput.setCustomValidity("");
    } else {
        registationFormPhoneNumberInput.setCustomValidity("Некорректно введён номер");
    }
});

registationFormloginInput.addEventListener("change", () => {
    const registationFormloginInputLength = registationFormloginInput.value.length;
    if (registationFormloginInputLength > MAX_LENGTH_LOGIN) {
        registationFormloginInput.setCustomValidity("Удалите лишние " + (registationFormloginInputLength - MAX_LENGTH_LOGIN) + " симв.");
    } else if (registationFormloginInputLength < MIN_LENGTH_LOGIN) {
        registationFormloginInput.setCustomValidity("Добавьте еще " + (MIN_LENGTH_LOGIN - registationFormloginInputLength) + " симв.");
    } else {
        registationFormloginInput.setCustomValidity("");
    }
});

registationFormPasswordInput.addEventListener("change", (evt) => {
    const registationFormPasswordInputValue = evt.target.value;
    const regExpRegistationFormPassword = /\D{4}(?=.*(\d{4}))/
    const registationFormPasswordInputLength = registationFormPasswordInput.length;
    if (registationFormPasswordInputLength > MAX_LENGTH_PASSWORD) {
        registationFormPasswordInput.setCustomValidity("Удалите лишние " + (registationFormPasswordInputLength - MAX_LENGTH_PASSWORD) + " симв.");
    } else if (registationFormPasswordInputLength < MIN_LENGTH_PASSWORD) {
        registationFormPasswordInput.setCustomValidity("Добавьте еще " + (MIN_LENGTH_PASSWORD - registationFormPasswordInputLength) + " симв.");
    } else if (registationFormPasswordInput.textContent = !registationFormPasswordInputValue.match(regExpRegistationFormPassword)) {
        registationFormPasswordInput.setCustomValidity("Используйте буквы и числа");
    } else {
        registationFormPasswordInput.setCustomValidity("");
    }
});