"use strict";
MicroModal.init();

const startBtn = document.querySelector("#startStop");

let values = [25, 10];
let intervalId = null;

function startTimer() {
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(workCycle, 1000);
}

function workCycle() {
  if (values.every((num) => num === 0)) {
    clearInterval(intervalId);
    return;
  }
  if (values[1]-- === 0) {
    values[1] = 59;
    values[0]--;
  }

  const timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = values
    .map((num) => String(num).padStart(2, "0"))
    .join(":");
}

startBtn.addEventListener("click", startTimer);
