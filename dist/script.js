const buttonCurrentConversion = document.getElementById("currentConversion")

const currentConversion = function currentConversion() {
    let currentInput = document.getElementById("current").value
    let currentResultInput = document.getElementById("current_result")

    let currentResult = currentInput * 1000;
    if (currentResult < 10) {
        currentResult = currentResult.toFixed(2);
        currentResultInput.innerHTML = currentResult;
    };
    currentResultInput.innerHTML = currentResult;
};

buttonCurrentConversion.addEventListener("click", () => {
    currentConversion();
});

