function clickedButton(e) {
    if (!(storedOperator && this.classList.contains("operator")))
        this.classList.add("clicked");

    if (this.classList.contains("number"))
        clickedNumber(this.textContent);
    else if (this.classList.contains("zero"))
        clickedZero();
    else if (this.classList.contains("c"))
        clickedC();
    else if (this.classList.contains("sign"))
        clickedSign();
    else if (this.classList.contains("period"))
        clickedPeriod();
    else if (this.classList.contains("operator"))
        clickedOperator(this);
    else if (this.classList.contains("equals"))
        clickedEquals();

    if (currentNumber.length > 15)
        currentNumber = currentNumber.slice(0,15);
    screen.textContent = `${currentNumber}`;
}

function removeTransition(e) {
    if(e.propertyName === "filter")
        this.classList.remove("clicked");
}

function clickedNumber(num) {
    if (currentNumber === "0")
        currentNumber = num;
    else if (currentNumber === "-0")
        currentNumber = `-${num}`;
    else if (currentNumber.length < 15)
        currentNumber += num;
}

function clickedZero() {
    if (currentNumber !== "0" && currentNumber.length < 15)
        currentNumber += "0";
}

function clickedC() {
    currentNumber = "0";
    previousNumber = "0";
    storedOperator = null;
    operatorbuttons.forEach(button => button.classList.remove("highlighted", "unclickable"));
}

function clickedSign() {
    if (currentNumber[0] === "-")
        currentNumber = currentNumber.slice(1);
    else
        currentNumber = "-" + currentNumber;
}

function clickedPeriod() {
    if (!currentNumber.includes("."))
        currentNumber += ".";
}

function clickedOperator(operatorbutton) {
    if (!storedOperator) {
        console.log("op");
        storedOperator = operatorbutton.textContent;
        previousNumber = currentNumber;
        currentNumber = "0";
        operatorbutton.classList.add("highlighted");
        operatorbuttons.forEach(button => button.classList.add("unclickable"));
    }
}

function clickedEquals() {
    if (!storedOperator)
        return;

    switch (storedOperator) {
        case "/":
            currentNumber = `${parseFloat(previousNumber) / parseFloat(currentNumber)}`;
            break;
        case "x":
            currentNumber = `${parseFloat(currentNumber) * parseFloat(previousNumber)}`;
            break;
        case "-":
            currentNumber = `${parseFloat(previousNumber) - parseFloat(currentNumber)}`;
            break;
        case "+":
            currentNumber = `${parseFloat(previousNumber) + parseFloat(currentNumber)}`;
            break;
    }

    storedOperator = null;
    previousNumber = "0";

    operatorbuttons.forEach(button => button.classList.remove("highlighted", "unclickable"));
}

let storedOperator = null;
let previousNumber = "0";

let currentNumber = "0";

const screen = document.querySelector("div.screen");
screen.textContent = currentNumber;

const buttons = document.querySelectorAll("div.button");
const operatorbuttons = document.querySelectorAll("div.operator");
buttons.forEach(button => button.addEventListener("click", clickedButton));
buttons.forEach(button => button.addEventListener("transitionend", removeTransition));