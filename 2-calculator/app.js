const allBtns = document.querySelectorAll(".btn");
const display = document.querySelector("#display");
let currentValue = document.querySelector("#display").textContent;

function appendNumber(pressed) {
  currentValue += pressed;
  display.textContent = currentValue;
}

function compute() {
  const expression = currentValue;
  const sanitizedExpression = expression.replace(/\b0+(\d+)/g, "$1");
  currentValue = eval(sanitizedExpression);
  display.textContent = currentValue;
}

function clearDisplay() {
  currentValue = 0;
  display.textContent = currentValue;
}
