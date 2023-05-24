import "./style.css";
import createTask from "./task";
import createProject, { checkDupProjectName } from "./project";
import {
  hideElement,
  displayElement,
  checkFormValidity,
  renderProjectsUI,
} from "./UI";

const tasksArray = [];
const projectsArray = [];
let currentProject = "";

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
  document.querySelector('input[name="project_name"]').focus();
});

submitProjectBtn.addEventListener("click", (e) => {
  if (!checkFormValidity("project_name")) return;
  e.preventDefault();
  if (checkDupProjectName(projectsArray)) {
    displayElement(document.querySelector(".duplicateNameErrorMessage"));
    return;
  }

  const project = createProject();
  project.projectToArray(projectsArray);
  currentProject = project.projectName;
  addProjectForm.reset();

  displayElement(addProjectBtn);
  hideElement(addProjectFormDiv);
  hideElement(document.querySelector(".duplicateNameErrorMessage"));
  renderProjectsUI(projectsArray);

  console.log(projectsArray);
});

cancelProjectBtn.addEventListener("click", () => {
  displayElement(addProjectBtn);
  hideElement(addProjectFormDiv);
  hideElement(document.querySelector(".duplicateNameErrorMessage"));
});

addTaskBtn.addEventListener("click", () => {
  displayElement(addTaskFormDiv);
  hideElement(addTaskBtn);
  document.querySelector('input[name="title"]').focus();
});

submitTaskBtn.addEventListener("click", (e) => {
  if (!checkFormValidity("title")) return;
  e.preventDefault();

  createTask().taskToArray(tasksArray);
  addTaskForm.reset();

  displayElement(addTaskBtn);
  hideElement(addTaskFormDiv);

  console.log(tasksArray);
});

cancelTaskBtn.addEventListener("click", () => {
  displayElement(addTaskBtn);
  hideElement(addTaskFormDiv);
});
