const formLoginCloseButton = document.getElementById("form_login_close_btn");
const formRegCloseButton = document.getElementById("form_reg_close_btn");
const formLoginOpenLink = document.getElementById("form_login_open_link");
const formLoginComeForm = document.getElementById("form_login_come");
const formLoginReg = document.getElementById("form_login_open_reg");
const formOpenRegBtn = document.getElementById("open_reg_btn");


formLoginOpenLink.addEventListener("click", () => {
    formLoginComeForm.classList.remove("visually-hidden");
});

formLoginCloseButton.addEventListener("click", () => {
    formLoginComeForm.classList.add("visually-hidden");
});

formOpenRegBtn.addEventListener("click", () => {
    formLoginReg.classList.remove("visually-hidden");
});

formRegCloseButton.addEventListener("click", () => {
    formLoginReg.classList.add("visually-hidden");
});