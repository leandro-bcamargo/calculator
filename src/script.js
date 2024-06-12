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

function operate(operator, firstNum, secondNum) {
  switch(operator) {
    case "+": return add(firstNum, secondNum);
    case "-": return subtract(firstNum, secondNum);
    case "/": return divide(firstNum, secondNum);
    case "*": return multiply(firstNum, secondNum);
    default: return null;
  }
}