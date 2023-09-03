function clickedButton(e) {
    this.classList.add("clicked");
}

function removeTransition(e) {
    if(e.propertyName === "filter")
        this.classList.remove("clicked");
}

const buttons = document.querySelectorAll("div.button");
buttons.forEach(button => button.addEventListener("click", clickedButton));
buttons.forEach(button => button.addEventListener("transitionend", removeTransition));