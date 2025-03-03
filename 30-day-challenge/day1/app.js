"use strict";

function printHello() {
  alert("Hello world");
}

const clickBtn = document.querySelector(".btn");
clickBtn.addEventListener("click", printHello);
