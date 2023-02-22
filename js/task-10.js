const inputNumber = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);


function createBoxes(amount) {
    for (let i = 0; i <= amount; i++) {
    let randomHexColor = getRandomHexColor();
    let boxAmount = 0;
    let boxSize = 30;
    const box = '<div></div>';
    box.style.backgroundColor = randomHexColor;
    box.style.width = '30px';
    box.style.height = '30px';
    boxAmount += box;
    boxSize += 10;
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