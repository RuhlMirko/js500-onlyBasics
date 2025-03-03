"use strict";

const moreBtn = document.querySelector(".one-more");
const lessBtn = document.querySelector(".one-less");
const clearBtn = document.querySelector(".reset");
moreBtn.addEventListener("click", addOneMore);
lessBtn.addEventListener("click", addOneLess);
clearBtn.addEventListener("click", clearCounter);

let currentValue = 0;
function addOneMore() {
  currentValue++;
  document.querySelector("h1").textContent = currentValue;
}
function addOneLess() {
  currentValue--;
  document.querySelector("h1").textContent = currentValue;
}
function clearCounter() {
  currentValue = 0;
  document.querySelector("h1").textContent = currentValue;
}
