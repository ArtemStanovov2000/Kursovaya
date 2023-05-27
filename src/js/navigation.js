const loginFormCloseButton = document.getElementById("login-form-close-button");
const registrationFormCloseButton = document.getElementById("registration-form-close-button");
const openLoginFormLink = document.getElementById("open-login-form-link");
const loginForm = document.getElementById("login-form");
const registrationForm = document.getElementById("registration-form");
const createAccountButton = document.getElementById("create-account-button");
const registrationFormSubmitButton = document.getElementById("registration-form-submit-button");  

const userLoginInput = document.getElementById("user-login-input");
const userPasswordInput = document.getElementById("user-password-input");
const registrationFormNameInput = document.getElementById("registration-form-name-input");
const registrationFormAgeInput = document.getElementById("registration-form-age-input");
const registrationFormMailInput = document.getElementById("registration-form-mail-input");
const registrationFormPhoneNumberInput = document.getElementById("registration-form-phone-number-input");
const registrationFormloginInput = document.getElementById("registration-form-login-input");
const registrationFormPasswordInput = document.getElementById("registration-form-password-input");

const aboutElement = document.querySelector(".about");
const aboutLinkElement = document.getElementById("open-about-modal-link");
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
    registrationForm.classList.remove("visually-hidden");
    loginForm.classList.add("visually-hidden");
    registrationFormNameInput.focus();
});

loginFormCloseButton.addEventListener("click", () => {
    loginForm.classList.add("visually-hidden");
});

window.addEventListener('keydown', (e) => {
    if (e.key == "Escape" && !registrationForm.classList.contains("visually-hidden")) {
        registrationForm.classList.add("visually-hidden");
        loginForm.classList.remove("visually-hidden");
    }
});

registrationFormCloseButton.addEventListener("click", () => {
    registrationForm.classList.add("visually-hidden");
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

registrationFormNameInput.addEventListener("change", () => {
    const registrationFormNameInputLength = registrationFormNameInput.value.length;
    if (registrationFormNameInputLength > MAX_LENGTH_NAME) {
        registrationFormNameInput.setCustomValidity("Удалите лишние " + (registrationFormNameInputLength - MAX_LENGTH_NAME) + " симв.");
    } else if (registrationFormNameInputLength < MIN_LENGTH_NAME) {
        registrationFormNameInput.setCustomValidity("Добавьте еще " + (MIN_LENGTH_NAME - registrationFormNameInputLength) + " симв.");
    } else {
        registrationFormNameInput.setCustomValidity("");
    }
});

registrationFormAgeInput.addEventListener("change", (evt) => {
    const registrationFormAgeInputValue = evt.target.value;
    const regExpAge = /\d/g
    if (registrationFormAgeInput.textContent = !registrationFormAgeInputValue.match(regExpAge)) {
        registrationFormAgeInput.setCustomValidity("Возраст можно написать только числами");
    } else if (registrationFormAgeInputValue > MAX_PERMISSIBLE_AGE) {
        registrationFormAgeInput.setCustomValidity("Изивините, вы не можете быть насколько старым");
    } else if (registrationFormAgeInputValue < MIN_PERMISSIBLE_AGE) {
        registrationFormAgeInput.setCustomValidity("Изивините, вы слишком молодой");
    } else {
        registrationFormAgeInput.setCustomValidity("");
    }
});

registrationFormMailInput.addEventListener("change", () => {
    const registrationFormMailInputLength = registrationFormMailInput.value.length;
    if (registrationFormMailInputLength > MAX_EMAIL_NAME) {
        registrationFormMailInput.setCustomValidity("Удалите лишние " + (registrationFormMailInputLength - MAX_EMAIL_NAME) + " симв.");
    } else if (registrationFormMailInputLength < MIN_EMAIL_NAME) {
        registrationFormMailInput.setCustomValidity("Добавьте еще " + (MIN_EMAIL_NAMED - registrationFormMailInputLength) + " симв.");
    } else {
        registrationFormMailInput.setCustomValidity("");
    }
});

registrationFormPhoneNumberInput.addEventListener("change", () => {
    const registrationFormPhoneNumberInputValue = registrationFormPhoneNumberInput.value;
    const registrationFormPhoneNumberInputValueLength = registrationFormPhoneNumberInputValue.length;
    if (registrationFormPhoneNumberInputValueLength == PHONE_DIGITS_NUMBERS_MOBILE && registrationFormPhoneNumberInputValue[0] == PHONE_CODE_RUSSIA) {
        registrationFormPhoneNumberInput.setCustomValidity("");
    } else {
        registrationFormPhoneNumberInput.setCustomValidity("Некорректно введён номер");
    }
});

registrationFormloginInput.addEventListener("change", () => {
    const registrationFormloginInputLength = registrationFormloginInput.value.length;
    if (registrationFormloginInputLength > MAX_LENGTH_LOGIN) {
        registrationFormloginInput.setCustomValidity("Удалите лишние " + (registrationFormloginInputLength - MAX_LENGTH_LOGIN) + " симв.");
    } else if (registrationFormloginInputLength < MIN_LENGTH_LOGIN) {
        registrationFormloginInput.setCustomValidity("Добавьте еще " + (MIN_LENGTH_LOGIN - registrationFormloginInputLength) + " симв.");
    } else {
        registrationFormloginInput.setCustomValidity("");
    }
});

registrationFormPasswordInput.addEventListener("change", (evt) => {
    const registrationFormPasswordInputValue = evt.target.value;
    const regExpregistrationFormPassword = /\D{4}(?=.*(\d{4}))/
    const registrationFormPasswordInputLength = registrationFormPasswordInput.length;
    if (registrationFormPasswordInputLength > MAX_LENGTH_PASSWORD) {
        registrationFormPasswordInput.setCustomValidity("Удалите лишние " + (registrationFormPasswordInputLength - MAX_LENGTH_PASSWORD) + " симв.");
    } else if (registrationFormPasswordInputLength < MIN_LENGTH_PASSWORD) {
        registrationFormPasswordInput.setCustomValidity("Добавьте еще " + (MIN_LENGTH_PASSWORD - registrationFormPasswordInputLength) + " симв.");
    } else if (registrationFormPasswordInput.textContent = !registrationFormPasswordInputValue.match(regExpregistrationFormPassword)) {
        registrationFormPasswordInput.setCustomValidity("Используйте буквы и числа");
    } else {
        registrationFormPasswordInput.setCustomValidity("");
    }
});