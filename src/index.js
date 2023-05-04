import "./style.css";
import CreateTask from "./task";
import CreateProject from "./project";
import { hideElement, displayElement } from "./UI";

const tasksArray = [];
const projectsArray = [];
const addProjectBtn = document.querySelector(".add_project button");
const addProjectForm = document.querySelector(".add_project_form");
const submitProjectBtn = document.querySelector("button.addProjectBtn");
const cancelProjectBtn = document.querySelector("button.cancelProjectBtn");
const addTaskBtn = document.querySelector(".addTaskBtn button");
const addTaskFormDiv = document.querySelector(".add_task_form_div");
const submitTaskBtn = document.querySelector("button.addTaskFormBtn");
const cancelTaskBtn = document.querySelector("button.cancelTaskFormBtn");

// Event listeners
addProjectBtn.addEventListener("click", () => {
  displayElement(addProjectForm);
  hideElement(addProjectBtn);
});

submitProjectBtn.addEventListener("click", () => {
  displayElement(addProjectBtn);
  hideElement(addProjectForm);
});

cancelProjectBtn.addEventListener("click", () => {
  displayElement(addProjectBtn);
  hideElement(addProjectForm);
});

addTaskBtn.addEventListener("click", () => {
  displayElement(addTaskFormDiv);
  hideElement(addTaskBtn);
});

submitTaskBtn.addEventListener("click", () => {
  displayElement(addTaskBtn);
  hideElement(addTaskFormDiv);
});

cancelTaskBtn.addEventListener("click", () => {
  displayElement(addTaskBtn);
  hideElement(addTaskFormDiv);
});

const task1 = new CreateTask("test title", "test detail", "1/1/23", "high");
const task2 = new CreateTask("test2", "test2 det", "1/1/25", "high");

const project1 = new CreateProject("Project1");
project1.addTask(task1);
project1.addTask(task2);

console.log(project1.taskList);
