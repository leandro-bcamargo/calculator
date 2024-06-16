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

function calculate(trailingOperator) {
  const display = document.querySelector('#display');
  const [firstNum, operator, secondNum] = display.value.split(/([+\-/*])/);
  console.log('firstNum:', firstNum, 'secondNum:', secondNum, 'operator:', operator);
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
  if (inputValue === '0') {
    result = btnValue;
  } else if (DIGITS.includes(btnValue)) {
    console.log('test')
    result = inputValue + btnValue;
  } else if (OPERATORS.includes(btnValue)) {
    console.log('Apertou operador')
    operatorsCounter++;
    console.log('counter:', operatorsCounter)
    if (operatorsCounter > 1) {
      console.log('entrou')
      calculate(btnValue);
      const displayValue = document.querySelector('#display').value;
      console.log('displayValue:', displayValue)
      const includesOperator = displayValue.split('').some(char => OPERATORS.includes(char));
      operatorsCounter = includesOperator ? 1 : 0;
      return;
    } else {
      result = inputValue + btnValue;
    }
  }
  input.value = result;
  displayValue = result;
}

function configureBtnEventListeners() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    if (btn.textContent !== '=') btn.addEventListener('click', (e) => updateDisplay(e))
  });
}


window.onload = configureBtnEventListeners;