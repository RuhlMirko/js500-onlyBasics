const allBtns = document.querySelectorAll(".btn");
const display = document.querySelector("#display");
let currentValue = document.querySelector("#display").textContent;

function appendNumber(pressed) {
  currentValue += pressed;
  display.textContent = currentValue;
}

function compute() {
  const result = eval(display.textContent);
  currentValue = result;
  display.textContent = result;
}
