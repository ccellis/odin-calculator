function clickedButton(e) {
    this.classList.add("clicked");

    if (this.classList.contains("number"))
        clickedNumber(this.textContent);
    else if (this.classList.contains("zero"))
        clickedZero();
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

    screen.textContent = currentNumber;
}

function clickedZero() {
    if (currentNumber !== "0" && currentNumber.length < 15)
        currentNumber += "0";

    screen.textContent = currentNumber;
}

let currentNumber = "0";

const screen = document.querySelector("div.screen");
screen.textContent = currentNumber;

const buttons = document.querySelectorAll("div.button");
buttons.forEach(button => button.addEventListener("click", clickedButton));
buttons.forEach(button => button.addEventListener("transitionend", removeTransition));