const colorSpan = document.querySelector(".color");
const colorButton = document.querySelector(".change-color");
const background = document.querySelector("body");

const changeColor = () => {
    background.style.backgroundColor = getRandomHexColor();
    let randomColor = getRandomHexColor();
    colorSpan.textContent = randomColor;
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

colorButton.addEventListener("click", changeColor);
