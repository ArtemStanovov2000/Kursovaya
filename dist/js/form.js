const formLoginCloseButton = document.getElementById("form_login_close_btn");
const formRegCloseButton = document.getElementById("form_reg_close_btn");
const formLoginOpenLink = document.getElementById("form_login_open_link");
const formLoginComeForm = document.getElementById("form_login_come");
const formLoginReg = document.getElementById("form_login_open_reg");
const formOpenRegButton = document.getElementById("open_reg_form_btn");
const regFormRegistBtn = document.getElementById("regist_button_reg_form");

const loginPoleFormInput = document.getElementById("login_pole");
const passwordPoleFormInput = document.getElementById("password_pole");
const namePoleRegFormInput = document.getElementById("name_pole_reg_form");
const agePoleIRegFormInput = document.getElementById("age_pole_reg_form");
const emailPoleIRegFormInput = document.getElementById("email_pole_reg_form");
const phoneNumberPoleIRegFormInput = document.getElementById("phone_number_pole_reg_form");
const loginPoleIRegFormInput = document.getElementById("login_pole_reg_form");
const passwordPoleIRegFormInput = document.getElementById("password_pole_reg_form");

const MAX_PERMISSIBLE_AGE = 120;
const MIN_PERMISSIBLE_AGE = 10;
const MAX_EMAIL_NAME = 40;
const MIN_EMAIL_NAME = 7;
const MAX_LENGTH_NAME = 16;
const MIN_LENGTH_NAME = 2;
const PHONE_DIGITS_NUMBERS_MOBILE = 11;
const ESC_KEY_CODE = 27;
const PHONE_CODE_RUSSIA = 8;
const MAX_LENGTH_LOGIN = 16;
const MIN_LENGTH_LOGIN = 6;
const MAX_LENGTH_PASSWORD = 30;
const MIN_LENGTH_PASSWORD = 10;

formLoginOpenLink.addEventListener("click", () => {
    formLoginComeForm.classList.remove("visually-hidden");
});

formOpenRegButton.addEventListener("click", () => {
    formLoginReg.classList.remove("visually-hidden");
    formLoginComeForm.classList.add("visually-hidden");
});

formLoginCloseButton.addEventListener("click", () => {
    formLoginComeForm.classList.add("visually-hidden");
});

formRegCloseButton.addEventListener("click", () => {
    formLoginReg.classList.add("visually-hidden");
    formLoginComeForm.classList.remove("visually-hidden");
});

loginPoleFormInput.addEventListener("change", () => {
    const loginPoleFormInputLength = loginPoleFormInput.value.length;
    if (loginPoleFormInputLength > MAX_LENGTH_LOGIN) {
        loginPoleFormInput.setCustomValidity("Удалите лишние " + (loginPoleFormInputLength - MAX_LENGTH_LOGIN) + " симв.");
    } else if (loginPoleFormInputLength < MIN_LENGTH_LOGIN) {
        loginPoleFormInput.setCustomValidity("Добавьте еще " + (MIN_LENGTH_LOGIN - loginPoleFormInputLength) + " симв.");
    } else {
        loginPoleFormInput.setCustomValidity("");
    };
});

passwordPoleFormInput.addEventListener("change", () => {
    const passwordPoleFormInputLength = passwordPoleFormInput.value.length;
    if (passwordPoleFormInputLength > MAX_LENGTH_PASSWORD) {
        passwordPoleFormInput.setCustomValidity("Удалите лишние " + (passwordPoleFormInputLength - MAX_LENGTH_PASSWORD) + " симв.");
    } else if (passwordPoleIRegFormInputLength < MIN_LENGTH_PASSWORD) {
        passwordPoleFormInput.setCustomValidity("Добавьте еще " + (MIN_LENGTH_PASSWORD - passwordPoleFormInputLength) + " симв.");
    } else {
        passwordPoleFormInput.setCustomValidity("");
    };
});

namePoleRegFormInput.addEventListener("change", () => {
    const nameValueLength = namePoleRegFormInput.value.length;
    if (nameValueLength > MAX_LENGTH_NAME) {
        namePoleRegFormInput.setCustomValidity("Удалите лишние " + (nameValueLength - MAX_LENGTH_NAME) + " симв.");
    } else if (nameValueLength < MIN_LENGTH_NAME) {
        namePoleRegFormInput.setCustomValidity("Добавьте еще " + (MIN_LENGTH_NAME - nameValueLength) + " симв.");
    } else {
        namePoleRegFormInput.setCustomValidity("");
    };
});

agePoleIRegFormInput.addEventListener("change", () => {
    const agePoleValue = agePoleIRegFormInput.value;
    if (agePoleValue > MAX_PERMISSIBLE_AGE) {
        agePoleIRegFormInput.setCustomValidity("Изивините, вы не можете быть насколько старым");
    } else if (agePoleValue < MIN_PERMISSIBLE_AGE) {
        agePoleIRegFormInput.setCustomValidity("Изивините, вы слишком молодой");
    } else {
        agePoleIRegFormInput.setCustomValidity("");
    }
});

emailPoleIRegFormInput.addEventListener("change", () => {
    const emailPoleIRegFormInputLength = emailPoleIRegFormInput.value.length;
    if (emailPoleIRegFormInputLength > MAX_EMAIL_NAME) {
        emailPoleIRegFormInput.setCustomValidity("Удалите лишние " + (emailPoleIRegFormInputLength - MAX_EMAIL_NAME) + " симв.");
    } else if (emailPoleIRegFormInputLength < MIN_EMAIL_NAME) {
        emailPoleIRegFormInput.setCustomValidity("Добавьте еще " + (MIN_EMAIL_NAMED - emailPoleIRegFormInputLength) + " симв.");
    } else {
        emailPoleIRegFormInput.setCustomValidity("");
    };
});

phoneNumberPoleIRegFormInput.addEventListener("change", () => {
    const phoneNumberValue = phoneNumberPoleIRegFormInput.value;
    const phoneNumberValueLength = phoneNumberValue.length;
    if (phoneNumberValueLength == PHONE_DIGITS_NUMBERS_MOBILE && phoneNumberValue[0] == PHONE_CODE_RUSSIA) {
        phoneNumberPoleIRegFormInput.setCustomValidity("");
    } else {
        phoneNumberPoleIRegFormInput.setCustomValidity("Некорректно введён номер");
    };
});

loginPoleIRegFormInput.addEventListener("change", () => {
    const loginPoleIRegFormInputLength = loginPoleIRegFormInput.value.length;
    if (loginPoleIRegFormInputLength > MAX_LENGTH_LOGIN) {
        loginPoleIRegFormInput.setCustomValidity("Удалите лишние " + (loginPoleIRegFormInputLength - MAX_LENGTH_LOGIN) + " симв.");
    } else if (loginPoleIRegFormInputLength < MIN_LENGTH_LOGIN) {
        loginPoleIRegFormInput.setCustomValidity("Добавьте еще " + (MIN_LENGTH_LOGIN - loginPoleIRegFormInputLength) + " симв.");
    } else {
        loginPoleIRegFormInput.setCustomValidity("");
    };
});

passwordPoleIRegFormInput.addEventListener("change", () => {
    const passwordPoleIRegFormInputLength = passwordPoleIRegFormInput.value.length;
    if (passwordPoleIRegFormInputLength > MAX_LENGTH_PASSWORD) {
        passwordPoleIRegFormInput.setCustomValidity("Удалите лишние " + (passwordPoleIRegFormInputLength - MAX_LENGTH_PASSWORD) + " симв.");
    } else if (passwordPoleIRegFormInputLength < MIN_LENGTH_PASSWORD) {
        passwordPoleIRegFormInput.setCustomValidity("Добавьте еще " + (MIN_LENGTH_PASSWORD - passwordPoleIRegFormInputLength) + " симв.");
    } else {
        passwordPoleIRegFormInput.setCustomValidity("");
    };
});