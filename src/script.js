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

const DIGITS = ['1','2','3','4','5','6','7','8','9','0'];
const OPERATORS = ['+', '-', '/', '*'];
let operatorsCounter = 0;

function operate(num1 = 0, operator = '+', num2 = 0) {
  switch(operator) {
    case "+": return add(Number(num1), Number(num2));
    case "-": return subtract(Number(num1), Number(num2));
    case "/": return divide(Number(num1), Number(num2));
    case "*": return multiply(Number(num1), Number(num2));
    default: return null;
  }
}

function parseDisplayValue(displayValue) {
  const [num1, operator, num2] = displayValue.split(/([+\-/*])/g);
  return [num1, operator, num2];
}

function updateDisplayNumber(e) {
  const display = document.querySelector('#display');
  const displayValue = display.value;
  const enteredSymbol = e.target.textContent;
  display.value = displayValue + enteredSymbol;
}

function updateDisplayOperator(e) {
  const display = document.querySelector('#display');
  const displayValue = display.value;
  const enteredSymbol = e.target.textContent;
  operatorsCounter++;
  if (operatorsCounter > 1) {
    const [num1, operator, num2] = parseDisplayValue(displayValue);
    display.value = operate(num1, operator, num2) + enteredSymbol;
  } else {
    display.value = displayValue + enteredSymbol;
  }
}

function updateDisplayEquals() {
  const display = document.querySelector('#display');
  const displayValue = display.value;
  const [num1, operator, num2] = parseDisplayValue(displayValue);
  display.value = operate(num1, operator, num2);
}

function setUpEventListeners() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    if (DIGITS.includes(btn.textContent)) btn.addEventListener('click', (e) => updateDisplayNumber(e));
    if (OPERATORS.includes(btn.textContent)) btn.addEventListener('click', (e) => updateDisplayOperator(e));
    if (btn.textContent === '=') btn.addEventListener('click', updateDisplayEquals);
  })
}

window.onload = setUpEventListeners;