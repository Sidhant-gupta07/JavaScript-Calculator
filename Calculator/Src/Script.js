const display = document.getElementById("display");
let currentInput = "";
let result = "";
let operator = "";

const updateDisplay = () => {
    display.textContent = currentInput || "0";
};

const clear = () => {
    currentInput = "";
    result = "";
    operator = "";
    updateDisplay();
};

const calculate = () => {
    if (currentInput !== "") {
        try {
            result = eval(currentInput).toString();
            currentInput = result;
        } catch (error) {
            result = "Error";
        }
        operator = "";
        updateDisplay();
    }
};

const handleButtonClick = (e) => {
    const value = e.target.textContent;
    if (!isNaN(value) || value === "." || value === "0") {
        currentInput += value;
    } else if (value === "+" || value === "-" || value === "*" || value === "/") {
        if (operator) {
            calculate();
        }
        operator = value;
        currentInput += value;
    } else if (value === "=") {
        calculate();
    } else if (value === "AC") {
        clear();
    }
    updateDisplay();
};

document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});