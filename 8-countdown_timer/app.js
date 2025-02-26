"use strict";

const selectHours = document.querySelector(".countdown__selector--hours");
const selectMinutes = document.querySelector(".countdown__selector--minutes");
const selectSeconds = document.querySelector(".countdown__selector--seconds");

const timerDisplay = document.getElementById("timer");

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

var values = [];
function startCount() {
  values = [selectHours, selectMinutes, selectSeconds].map((el) =>
    Number(el.value)
  );
  console.log(values);
  setInterval(countDown, 1000);
}
function countDown() {
  if (values[2]-- === 0) {
    values[2] = 59;
    if (values[1]-- === 0) {
      values[1] = 59;
      values[0]--;
    }
  }

  timerDisplay.textContent = values.join(":");
}

const startBtn = document.getElementById("startStop");
startBtn.addEventListener("click", startCount);
