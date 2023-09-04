function clickedButton(e) {
    this.classList.add("clicked");

    if (this.classList.contains("number"))
        clickedNumber(this.textContent);
    else if (this.classList.contains("zero"))
        clickedZero();
    else if (this.classList.contains("ac"))
        clickedAC();
    else if (this.classList.contains("c"))
        clickedC();
    else if (this.classList.contains("sign"))
        clickedSign();
    else if (this.classList.contains("period"))
        clickedPeriod();

    screen.textContent = currentNumber;
}

function removeTransition(e) {
    if(e.propertyName === "filter")
        this.classList.remove("clicked");
}

function clickedNumber(num) {
    if (currentNumber === "0")
        currentNumber = num;
    else if (currentNumber.length < 15)
        currentNumber += num;
}

function clickedZero() {
    if (currentNumber !== "0" && currentNumber.length < 15)
        currentNumber += "0";
}

function clickedAC() {
    currentNumber = "0";
}

function clickedC() {
    currentNumber = "0";
}

function clickedSign() {
    if (currentNumber[0] === "-")
        currentNumber = currentNumber.slice(1);
    else if (currentNumber !== "0") // Don't add a negative sign to 0
        currentNumber = "-" + currentNumber;
}

function clickedPeriod() {
    if (!currentNumber.includes("."))
        currentNumber += ".";
}

let currentNumber = "0";

const screen = document.querySelector("div.screen");
screen.textContent = currentNumber;

const buttons = document.querySelectorAll("div.button");
buttons.forEach(button => button.addEventListener("click", clickedButton));
buttons.forEach(button => button.addEventListener("transitionend", removeTransition));