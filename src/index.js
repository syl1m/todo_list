/* eslint-disable no-use-before-define */
import "./style.css";
import { format, parse } from "date-fns";
import createTask, { getRadioCheckedValue } from "./task";
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
  renderEditProjectFormDiv,
} from "./UI";

const tasksArray = [];
const projectsArray = [];
const dateFormat = "MMM do, yyyy";
let currentProject = "";
let currentNonProjectDirectory = "home";

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
  if (checkDupProjectName(projectsArray, "project_name")) {
    displayElement(document.querySelector(".duplicateNameErrorMessage"));
    return;
  }

  const project = createProject();
  project.projectToArray(projectsArray);
  currentProject = project.projectName;
  currentNonProjectDirectory = "";
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
  const editIcons = document.querySelectorAll(".projectEditIcon");
  const deleteIcons = document.querySelectorAll(".projectDeleteIcon");

  projects.forEach((project) =>
    project.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      const name = projectsArray[i].projectName;

      currentProject = name;
      currentNonProjectDirectory = "";
      renderTasksInProject(tasksArray, currentProject);
      createTaskEventListeners();
      closeAndResetForms();
      scrollTaskListToTop();
    })
  );

  editIcons.forEach((editIcon) =>
    editIcon.addEventListener("click", (e) => {
      const i = e.target.dataset.index;

      renderProjectsUI(projectsArray, tasksArray);
      createProjectEventListeners();

      const selectedProjectDiv = document.querySelector(
        `.projectDivUI[data-index="${i}"]`
      );
      const selectedProjectName = projectsArray[i].projectName;
      const editProjectDiv = renderEditProjectFormDiv(selectedProjectName);

      selectedProjectDiv.parentNode.replaceChild(
        editProjectDiv,
        selectedProjectDiv
      );
      document.querySelector('input[name="edit_project_name"]').focus();

      const confirmEditBtn = document.querySelector(".confirmEditProjectBtn");
      const cancelEditBtn = document.querySelector(".cancelEditProjectBtn");

      confirmEditBtn.addEventListener("click", (f) => {
        const editedProjectName = document
          .querySelector('input[name="edit_project_name"]')
          .value.trim();

        if (editedProjectName === selectedProjectName) {
          editProjectDiv.parentNode.replaceChild(
            selectedProjectDiv,
            editProjectDiv
          );
          return;
        }

        if (!checkFormValidity("edit_project_name")) return;

        f.preventDefault();
        if (checkDupProjectName(projectsArray, "edit_project_name")) {
          displayElement(document.querySelector(".dupNameErrorMsg_editForm"));
          return;
        }

        projectsArray[i].projectName = editedProjectName;
        updateProjectPropertyInTasks(selectedProjectName, editedProjectName);
        renderProjectsUI(projectsArray, tasksArray);
        createProjectEventListeners();

        if (currentProject === selectedProjectName) {
          currentProject = editedProjectName;
          renderTasksInProject(tasksArray, currentProject);
          createTaskEventListeners();
        }
      });

      cancelEditBtn.addEventListener("click", () => {
        editProjectDiv.parentNode.replaceChild(
          selectedProjectDiv,
          editProjectDiv
        );
      });
    })
  );

  deleteIcons.forEach((deleteIcon) =>
    deleteIcon.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      const selectedProjectName = projectsArray[i].projectName;

      deleteTasksInProject(selectedProjectName);
      projectsArray.splice(i, 1);
      renderNonProjectsUI(tasksArray, dateFormat);
      renderProjectsUI(projectsArray, tasksArray);
      createProjectEventListeners();

      if (currentProject === selectedProjectName) {
        renderTasksInHome(tasksArray);
        createTaskEventListeners();
        currentProject = "";
        currentNonProjectDirectory = "home";
      } else if (currentNonProjectDirectory === "home") {
        renderTasksInHome(tasksArray);
        createTaskEventListeners();
      } else if (currentNonProjectDirectory === "today") {
        renderTasksInToday(tasksArray, dateFormat);
        createTaskEventListeners();
      } else if (currentNonProjectDirectory === "week") {
        renderTasksInWeek(tasksArray, dateFormat);
        createTaskEventListeners();
      } else if (currentNonProjectDirectory === "important") {
        renderTasksInImportant(tasksArray);
        createTaskEventListeners();
      }

      closeAndResetForms();
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
    currentNonProjectDirectory = "home";
    renderTasksInHome(tasksArray);
    createTaskEventListeners();
    closeAndResetForms();
    scrollTaskListToTop();
  });

  today.addEventListener("click", () => {
    currentProject = "";
    currentNonProjectDirectory = "today";
    renderTasksInToday(tasksArray, dateFormat);
    createTaskEventListeners();
    closeAndResetForms();
    scrollTaskListToTop();
    hideElement(addTaskBtn);
  });

  week.addEventListener("click", () => {
    currentProject = "";
    currentNonProjectDirectory = "week";
    renderTasksInWeek(tasksArray, dateFormat);
    createTaskEventListeners();
    closeAndResetForms();
    scrollTaskListToTop();
    hideElement(addTaskBtn);
  });

  important.addEventListener("click", () => {
    currentProject = "";
    currentNonProjectDirectory = "important";
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

  details.forEach((detail) =>
    detail.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      const taskDiv = document.querySelector(`.taskDivUI[data-index="${i}"]`);
      const taskDetailsDiv = document.createElement("div");
      const previousTaskDetailsDiv = document.querySelector(".taskDetailsDiv");

      if (previousTaskDetailsDiv) {
        const previousTaskIndex = previousTaskDetailsDiv.dataset.index;
        if (previousTaskIndex === i) {
          previousTaskDetailsDiv.remove();
          return;
        }
        previousTaskDetailsDiv.remove();
      }

      if (tasksArray[i].details) {
        taskDetailsDiv.textContent = `${tasksArray[i].details}`;
      } else {
        taskDetailsDiv.textContent = "No details";
      }

      taskDetailsDiv.classList.add("taskDetailsDiv");
      taskDetailsDiv.dataset.index = i;
      taskDiv.insertAdjacentElement("afterend", taskDetailsDiv);
      taskDetailsDiv.scrollIntoView({ behavior: "smooth", inline: "start" });
    })
  );

  editIcons.forEach((edit) =>
    edit.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      const editTaskDiv = document.querySelector(".edit-task-div");
      const overlay = document.querySelector(".overlay");
      const confirmEditTaskBtn = document.querySelector(".confirmEditTaskBtn");
      const cancelEditTaskBtn = document.querySelector(".cancelEditTaskBtn");
      const titleInput = document.querySelector(
        'input[name="title-edit-task"]'
      );
      const detailsInput = document.querySelector(
        'textarea[name="task_details_edit_task"]'
      );
      const dueDateInput = document.querySelector(
        'input[name="dueDate_edit_task"]'
      );
      const priorityCheckedInput = document.querySelector(
        `.edit_task_form input[value=${tasksArray[i].priority}]`
      );

      editTaskDiv.classList.remove("hidden");
      overlay.classList.remove("hidden");
      confirmEditTaskBtn.dataset.index = i;

      titleInput.value = tasksArray[i].title;
      detailsInput.value = tasksArray[i].details;
      dueDateInput.value = format(
        parse(tasksArray[i].dueDate, dateFormat, new Date()),
        "yyyy-MM-dd"
      );
      priorityCheckedInput.checked = true;

      confirmEditTaskBtn.addEventListener("click", (f) => {
        if (!checkFormValidity("title-edit-task")) return;
        if (!checkFormValidity("dueDate_edit_task")) return;
        f.preventDefault();
        const j = f.target.dataset.index;

        tasksArray[j].title = titleInput.value.trim();
        tasksArray[j].details = detailsInput.value.trim();
        tasksArray[j].dueDate = format(
          parse(dueDateInput.value, "yyyy-MM-dd", new Date()),
          dateFormat
        );
        tasksArray[j].priority = getRadioCheckedValue("priority-edit-task");

        const editTaskForm = document.querySelector(".edit_task_form");
        editTaskForm.reset();

        if (currentProject) {
          renderTasksInProject(tasksArray, currentProject);
        } else if (currentNonProjectDirectory === "home") {
          renderTasksInHome(tasksArray);
        } else if (currentNonProjectDirectory === "today") {
          renderTasksInToday(tasksArray, dateFormat);
        } else if (currentNonProjectDirectory === "week") {
          renderTasksInWeek(tasksArray, dateFormat);
        } else if (currentNonProjectDirectory === "important") {
          renderTasksInImportant(tasksArray);
        }

        renderNonProjectsUI(tasksArray, dateFormat);
        createTaskEventListeners();

        editTaskDiv.classList.add("hidden");
        overlay.classList.add("hidden");
      });

      cancelEditTaskBtn.addEventListener("click", () => {
        editTaskDiv.classList.add("hidden");
        overlay.classList.add("hidden");
      });
    })
  );

  deleteIcons.forEach((deleteIcon) =>
    deleteIcon.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      const taskProject = tasksArray[i].project;

      tasksArray.splice(i, 1);

      if (currentProject) {
        renderTasksInProject(tasksArray, currentProject);
      } else if (currentNonProjectDirectory === "home") {
        renderTasksInHome(tasksArray);
      } else if (currentNonProjectDirectory === "today") {
        renderTasksInToday(tasksArray, dateFormat);
      } else if (currentNonProjectDirectory === "week") {
        renderTasksInWeek(tasksArray, dateFormat);
      } else if (currentNonProjectDirectory === "important") {
        renderTasksInImportant(tasksArray);
      }

      if (taskProject) {
        renderProjectsUI(projectsArray, tasksArray);
        createProjectEventListeners();
      }

      renderNonProjectsUI(tasksArray, dateFormat);
      createTaskEventListeners();
    })
  );
}

function updateProjectPropertyInTasks(oldName, newName) {
  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].project === oldName) tasksArray[i].project = newName;
  }
}

function deleteTasksInProject(deletedProject) {
  for (let i = tasksArray.length - 1; i >= 0; i--) {
    if (tasksArray[i].project === deletedProject) tasksArray.splice(i, 1);
  }
}
