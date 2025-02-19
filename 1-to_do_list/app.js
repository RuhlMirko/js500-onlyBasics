/*
const allBtn = document.querySelector("#filter-all");
const activeBtn = document.querySelector("#filter-active");
const completeBtn = document.querySelector("#filter-completed");
*/

const addBtn = document.querySelector("#add-button");
const taskList = document.querySelector("#task-list");

function addTask() {
  const newTask = document.querySelector("#new-task").value.trim();
  listOf.push(newTask);
  renderTasks();
  document.querySelector("#new-task").value = "";
}

function renderTasks() {
  taskList.innerHTML = "";
  listOf.forEach((item) => getRaw(item));
}

function getRaw(current) {
  const rawHtml = `<li>
  <input type='checkbox'>
  <span>${current}</span>
  <button>Edit</button>
  <button class="delete-btn">Delete</button>
  </li>`;
  taskList.insertAdjacentHTML("afterbegin", rawHtml);
}

const listOf = [];
/* Test Data 
const listOf = ['Wake up', 'breakfast', 'Gym', 'Lunch','Work','Dinner'];
*/
addBtn.addEventListener("click", addTask);
