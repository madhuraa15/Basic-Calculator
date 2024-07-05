let currentValue = '';
let operator = '';
let previousValue = '';

function appendValue(value) {
  currentValue += value;
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = '';
  updateDisplay();
}

function clearDisplay() {
  currentValue = '';
  operator = '';
  previousValue = '';
  updateDisplay();
}

function calculateResult() {
  let result;

  switch (operator) {
    case '+':
      result = parseFloat(previousValue) + parseFloat(currentValue);
      break;
    case '-':
      result = parseFloat(previousValue) - parseFloat(currentValue);
      break;
    case '*':
      result = parseFloat(previousValue) * parseFloat(currentValue);
      break;
    case '/':
      result = parseFloat(previousValue) / parseFloat(currentValue);
      break;
    default:
      result = currentValue;
  }

  currentValue = result.toString();
  operator = '';
  previousValue = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentValue;
}