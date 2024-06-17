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

function operate(num1, operator, num2) {
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
  console.log('num1:', num1, 'operator:', operator, 'num2:', num2);
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

function setUpEventListeners() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    if (DIGITS.includes(btn.textContent)) btn.addEventListener('click', (e) => updateDisplayNumber(e));
    if (OPERATORS.includes(btn.textContent)) btn.addEventListener('click', (e) => updateDisplayOperator(e));
  })
}

window.onload = setUpEventListeners;

// function calculate() {
//   const display = document.querySelector('#display');
//   const expression = display.value;
//   const lastChar = expression[expression.length - 1];

//   // Check if the last character is an operator or a digit
//   if (DIGITS.includes(lastChar)) {
//     // If it's a digit, we can perform the calculation
//     const [firstNum, operator, secondNum] = expression.split(/([+\-/*])/);
//     display.value = operate(Number(firstNum), operator, Number(secondNum));
//   } else if (OPERATORS.includes(lastChar)) {
//     // If it's an operator, remove it before performing the calculation
//     const newExpression = expression.slice(0, -1);
//     const [firstNum, operator, secondNum] = newExpression.split(/([+\-/*])/);
//     display.value = operate(Number(firstNum), operator, Number(secondNum)) + lastChar;
//   }
// }

// function updateDisplay(e) {
//   const input = document.querySelector('#display');
//   const inputValue = input.value;
//   const btnValue = e.target.textContent;

//   if (btnValue === 'C') {
//     input.value = '0';
//     operatorsCounter = 0;
//   } else if (DIGITS.includes(btnValue)) {
//     if (inputValue === '0' || operatorsCounter > 0) {
//       input.value = btnValue;
//     } else {
//       input.value += btnValue;
//     }
//     operatorsCounter = 0; // Reset the operators counter when a digit is pressed
//   } else if (OPERATORS.includes(btnValue)) {
//     if (operatorsCounter === 0 && inputValue !== '0') {
//       input.value += btnValue;
//       operatorsCounter++;
//     } else if (operatorsCounter > 0) {
//       // Perform calculation with existing expression
//       const [firstNum, operator, secondNum] = inputValue.split(/([+\-/*])/);
//       const result = operate(Number(firstNum), operator, Number(secondNum));
//       input.value = result + btnValue; // Display result before next operator
//       operatorsCounter = 1; // Reset counter for next operation
//     }
//   }
// }





// function configureBtnEventListeners() {
//   const buttons = document.querySelectorAll('button');
//   buttons.forEach(btn => {
//     if (btn.textContent !== '=') btn.addEventListener('click', (e) => updateDisplay(e))
//   });
// }

// window.onload = configureBtnEventListeners;