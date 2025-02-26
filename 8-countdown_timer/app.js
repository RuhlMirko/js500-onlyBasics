"use strict";

const selectHours = document.querySelector(".countdown__selector--hours");
const selectMinutes = document.querySelector(".countdown__selector--minutes");
const selectSeconds = document.querySelector(".countdown__selector--seconds");

const timerDisplay = document.getElementById("timer");
const clearBtn = document.getElementById("clear");

function createOption(value) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = value;
  return option;
}

const start = 0,
  end = 60;

for (let i = start; i <= end; i++) {
  if (i <= 10) {
    selectHours.appendChild(createOption(i));
  }
  selectMinutes.appendChild(createOption(i));
  selectSeconds.appendChild(createOption(i));
}

let values = [];
let intervalId = null;

function startCount() {
  values = [selectHours, selectMinutes, selectSeconds].map((el) =>
    Number(el.value)
  );
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(countDown, 1000);
}

function countDown() {
  if (values.every((num) => num === 0)) {
    clearInterval(intervalId);
    return;
  }
  if (values[2]-- === 0) {
    values[2] = 59;
    if (values[1]-- === 0) {
      values[1] = 59;
      values[0]--;
    }
  }

  timerDisplay.textContent = values
    .map((num) => String(num).padStart(2, "0"))
    .join(":");
}

function clear() {
  clearInterval(intervalId);
  values = values.map(() => 0);
  timerDisplay.textContent = values
    .map((num) => String(num).padStart(2, "0"))
    .join(":");
}

const startBtn = document.getElementById("startStop");
startBtn.addEventListener("click", startCount);
clearBtn.addEventListener("click", clear);
