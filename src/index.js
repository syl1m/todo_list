/* eslint-disable no-use-before-define */
import "./style.css";
import { format } from "date-fns";
import createTask from "./task";
import createProject, { checkDupProjectName } from "./project";
import {
  hideElement,
  displayElement,
  checkFormValidity,
  renderProjectsUI,
  renderTasksInProject,
  renderNonProjectsUI,
  renderTasksInHome,
  renderTasksInToday,
  renderTasksInWeek,
  renderTasksInImportant,
} from "./UI";

const tasksArray = [];
const projectsArray = [];
const dateFormat = "MMM do, yyyy";
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
  addTaskBtn.disabled = true;
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
  renderProjectsUI(projectsArray, tasksArray);
  renderTasksInProject(tasksArray, currentProject);
  createTaskEventListeners();
  createProjectEventListeners();

  displayElement(addTaskBtn);
  addTaskBtn.disabled = false;

  const lastProjectElement =
    document.querySelector(".project_directory").lastElementChild;
  lastProjectElement.scrollIntoView({ behavior: "smooth", inline: "start" });
});

cancelProjectBtn.addEventListener("click", () => {
  displayElement(addProjectBtn);
  hideElement(addProjectFormDiv);
  hideElement(document.querySelector(".duplicateNameErrorMessage"));
  addTaskBtn.disabled = false;
});

addTaskBtn.addEventListener("click", () => {
  displayElement(addTaskFormDiv);
  hideElement(addTaskBtn);
  defaultFormDateToToday();
  document.querySelector('input[name="title"]').focus();
  addProjectBtn.disabled = true;
});

submitTaskBtn.addEventListener("click", (e) => {
  if (!checkFormValidity("title")) return;
  if (!checkFormValidity("dueDate")) return;
  e.preventDefault();

  const task = createTask(currentProject, dateFormat);
  task.taskToArray(tasksArray);
  addTaskForm.reset();

  displayElement(addTaskBtn);
  hideElement(addTaskFormDiv);
  if (currentProject) {
    renderProjectsUI(projectsArray, tasksArray);
    createProjectEventListeners();
    renderTasksInProject(tasksArray, currentProject);
  } else {
    renderTasksInHome(tasksArray);
  }
  renderNonProjectsUI(tasksArray, dateFormat);
  createTaskEventListeners();

  addProjectBtn.disabled = false;

  const lastTaskElement = document.querySelector(".task_list").lastElementChild;
  lastTaskElement.scrollIntoView({ behavior: "smooth", inline: "start" });
});

cancelTaskBtn.addEventListener("click", () => {
  displayElement(addTaskBtn);
  hideElement(addTaskFormDiv);
  addProjectBtn.disabled = false;
});

createNonProjectDirectoryEventListeners();

// Functions
function closeAndResetForms() {
  addProjectForm.reset();
  addTaskForm.reset();
  addProjectBtn.disabled = false;
  addTaskBtn.disabled = false;

  displayElement(addProjectBtn);
  displayElement(addTaskBtn);
  hideElement(addProjectFormDiv);
  hideElement(document.querySelector(".duplicateNameErrorMessage"));
  hideElement(addTaskFormDiv);
}

function scrollTaskListToTop() {
  const firstTaskElement =
    document.querySelector(".task_list").firstElementChild;
  if (firstTaskElement)
    firstTaskElement.scrollIntoView({ behavior: "instant", inline: "start" });
}

function createProjectEventListeners() {
  const projects = document.querySelectorAll(".projectNameEventListener");
  projects.forEach((project) =>
    project.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      const name = projectsArray[i].projectName;

      currentProject = name;
      renderTasksInProject(tasksArray, currentProject);
      createTaskEventListeners();
      closeAndResetForms();
      scrollTaskListToTop();
    })
  );
}

function createNonProjectDirectoryEventListeners() {
  const home = document.querySelector(".home.nonProjectDirectoryDiv");
  const today = document.querySelector(".today.nonProjectDirectoryDiv");
  const week = document.querySelector(".week.nonProjectDirectoryDiv");
  const important = document.querySelector(".important.nonProjectDirectoryDiv");

  home.addEventListener("click", () => {
    currentProject = "";
    renderTasksInHome(tasksArray);
    createTaskEventListeners();
    closeAndResetForms();
    scrollTaskListToTop();
  });

  today.addEventListener("click", () => {
    currentProject = "";
    renderTasksInToday(tasksArray, dateFormat);
    createTaskEventListeners();
    closeAndResetForms();
    scrollTaskListToTop();
    hideElement(addTaskBtn);
  });

  week.addEventListener("click", () => {
    currentProject = "";
    renderTasksInWeek(tasksArray, dateFormat);
    createTaskEventListeners();
    closeAndResetForms();
    scrollTaskListToTop();
    hideElement(addTaskBtn);
  });

  important.addEventListener("click", () => {
    currentProject = "";
    renderTasksInImportant(tasksArray);
    createTaskEventListeners();
    closeAndResetForms();
    scrollTaskListToTop();
    hideElement(addTaskBtn);
  });
}

function defaultFormDateToToday() {
  const dateInput = document.getElementById("dueDate");
  dateInput.value = format(new Date(), "yyyy-MM-dd");
}

function createTaskEventListeners() {
  const checkboxes = document.querySelectorAll(".taskCheckbox");
  const details = document.querySelectorAll(".taskDetails");
  const editIcons = document.querySelectorAll(".taskEditIcon");
  const deleteIcons = document.querySelectorAll(".taskDeleteIcon");

  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      const taskDiv = document.querySelector(`.taskDivUI[data-index="${i}"]`);

      if (checkbox.checked === true) {
        tasksArray[i].completed = "yes";
      } else {
        tasksArray[i].completed = "no";
      }

      if (tasksArray[i].project) {
        renderProjectsUI(projectsArray, tasksArray);
        createProjectEventListeners();
      }

      renderNonProjectsUI(tasksArray, dateFormat);
      taskDiv.classList.toggle("completedTask");
    })
  );
}
