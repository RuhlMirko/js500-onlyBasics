"use strict";

const handHour = document.querySelector(".hour");
const handMinute = document.querySelector(".minute");
const handSecond = document.querySelector(".second");

function updateTime() {
  const now = new Date();
  let hours = now.getHours(); // 0-23
  const minutes = now.getMinutes(); // 0-59
  const seconds = now.getSeconds(); // 0-59

  const newhours = hours > 12 ? hours - 12 : hours;
  handHour.style.transform = `rotate(${newhours * 30}deg)`;
  handMinute.style.transform = `rotate(${minutes * 6}deg)`;
  console.log(`${hours}:${minutes}:${seconds}`); // e.g., "14:30:15"
}

setInterval(updateTime, 1000); // Run updateTime() every second
