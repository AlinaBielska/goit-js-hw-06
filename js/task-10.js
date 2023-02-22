const inputNumber = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener("click", createBoxes);
// buttonDestroy.addEventListener("click", destroyBoxes);


let boxAmount = '';
let boxSize = 30;

function createBoxes(amount) {
    for (let i = 0; i <= amount; i++) {
    let randomHexColor = getRandomHexColor();
    const box = '<div></div>';
    box.style.backgroundColor = randomHexColor;
    boxAmount += box;
    boxSize += 10;
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
  }
  boxes.innerHTML = boxAmount;
};

// function destroyBoxes() {
  
// };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};