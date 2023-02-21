const counterValue = document.querySelector('#value');
let showValue = 0;
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

const actionDecrement = () => {
  showValue -= 1;
  counterValue.textContent = showValue;
};
buttonDecrement.addEventListener("click", actionDecrement);

const actionIncrement = () => {
  showValue += 1;
  counterValue.textContent = showValue;
};
buttonIncrement.addEventListener("click", actionIncrement);