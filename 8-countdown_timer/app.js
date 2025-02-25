"use strict";

const selectHours = document.querySelector(".countdown__selector--hours");
const selectMinutes = document.querySelector(".countdown__selector--minutes");
const selectSeconds = document.querySelector(".countdown__selector--seconds");

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
