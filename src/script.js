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

function operate(firstNum, operator, secondNum) {
  switch(operator) {
    case "+": return add(firstNum, secondNum);
    case "-": return subtract(firstNum, secondNum);
    case "/": return divide(firstNum, secondNum);
    case "*": return multiply(firstNum, secondNum);
    default: return null;
  }
}

function calculate(trailingOperator = '') {
  const display = document.querySelector('#display');
  const [firstNum, operator, secondNum] = display.value.split(/([+\-/*])/);
  // console.log('firstNum:', firstNum, 'secondNum:', secondNum, 'operator:', operator);
  display.value = '';
  const newDisplayValue = operate(Number(firstNum), operator, Number(secondNum));
  // console.log('newDisplayValue:', newDisplayValue)
  display.value = newDisplayValue + trailingOperator;
}

function updateDisplay(e) {
  const input = document.querySelector('#display');
  const inputValue = input.value;
  const btnValue = e.target.textContent;
  let result;

  if (btnValue === 'C') {
    result = '0';
    operatorsCounter = 0;
  } else if (DIGITS.includes(btnValue)) {
    if (inputValue === '0' || operatorsCounter > 1) {
      result = btnValue;
    } else {
      result = inputValue + btnValue;
    }
    operatorsCounter = 0;
  } else if (OPERATORS.includes(btnValue)) {
    if (operatorsCounter === 0 && inputValue !== '0') {
      result = inputValue + btnValue;
      operatorsCounter++;
    } else {
      result = inputValue;
    }
  }
  input.value = result;
}


function configureBtnEventListeners() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    if (btn.textContent !== '=') btn.addEventListener('click', (e) => updateDisplay(e))
  });
}

window.onload = configureBtnEventListeners;