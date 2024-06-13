function add(a, b) {
    return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero.')
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

let firstNum;
let secondNum;
let operator;
let displayValue;

function operate(operator, firstNum, secondNum) {
  switch(operator) {
    case "+": return add(firstNum, secondNum);
    case "-": return subtract(firstNum, secondNum);
    case "/": return divide(firstNum, secondNum);
    case "*": return multiply(firstNum, secondNum);
    default: return null;
  }
}

function updateDisplay(e) {
  const input = document.querySelector('#input');
  const inputValue = input.value;
  const btnValue = e.target.textContent;
  console.log('btnValue:', btnValue);
  const result = inputValue === "0" ? btnValue : inputValue + btnValue;
  console.log('result:', result);
  input.value = result;
  displayValue = result;
}

function configureBtnEventListeners() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => btn.addEventListener('click', (e) => updateDisplay(e)));
}

window.onload = configureBtnEventListeners;