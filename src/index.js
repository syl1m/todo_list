import "./style.css";
import createTask from "./task";
import createProject from "./project";
import { hideElement, displayElement, checkFormValidity } from "./UI";

const tasksArray = [];
const projectsArray = [];

// Project Form Query Selectors
const addProjectBtn = document.querySelector(".add_project button");
const addProjectFormDiv = document.querySelector(".add_project_form_div");
const addProjectForm = document.querySelector(".add_project_form");
const submitProjectBtn = document.querySelector("button.addProjectBtn");
const cancelProjectBtn = document.querySelector("button.cancelProjectBtn");

// Task Form Query Selectors
const addTaskBtn = document.querySelector(".addTaskBtn button");
const addTaskFormDiv = document.querySelector(".add_task_form_div");
const addTaskForm = document.querySelector(".add_task_form");
const submitTaskBtn = document.querySelector("button.addTaskFormBtn");
const cancelTaskBtn = document.querySelector("button.cancelTaskFormBtn");

// Event listeners
addProjectBtn.addEventListener("click", () => {
  displayElement(addProjectFormDiv);
  hideElement(addProjectBtn);
});

submitProjectBtn.addEventListener("click", (e) => {
  if (!checkFormValidity("project_name")) return;
  e.preventDefault();
  displayElement(addProjectBtn);
  hideElement(addProjectFormDiv);
  createProject().projectToArray(projectsArray);
  addProjectForm.reset();
  console.log(projectsArray);
});

cancelProjectBtn.addEventListener("click", () => {
  displayElement(addProjectBtn);
  hideElement(addProjectFormDiv);
});

addTaskBtn.addEventListener("click", () => {
  displayElement(addTaskFormDiv);
  hideElement(addTaskBtn);
});

submitTaskBtn.addEventListener("click", (e) => {
  if (!checkFormValidity("title")) return;
  e.preventDefault();
  displayElement(addTaskBtn);
  hideElement(addTaskFormDiv);
  createTask().taskToArray(tasksArray);
  addTaskForm.reset();
  console.log(tasksArray);
});

cancelTaskBtn.addEventListener("click", () => {
  displayElement(addTaskBtn);
  hideElement(addTaskFormDiv);
});
