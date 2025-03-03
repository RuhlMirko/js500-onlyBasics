"use strict";
const adminName = "John";
const admin = adminName;

/*
prompt("Type something: ", "");
let userInput = confirm("Accept or decline");
console.log(userInput);

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 12

console.log("new test");
console.log("Newer test");


const userInput = prompt("Enter a number");

userInput > 0
  ? alert(1)
  : userInput < 0
  ? alert(-1)
  : userInput == 0
  ? alert(0)
  : alert(null);

let result;
let a = prompt("Enter a number");
let b = prompt("Enter a number");

result = a + b < 4 ? "Below" : "Over";
console.log(result);
*/
let message;
let login = prompt("Enter login");
message =
  login == "Employee"
    ? "hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
console.log(message);
