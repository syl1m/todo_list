/* eslint-disable no-use-before-define */
import "./style.css";
import "./darkmodeToggle.css";
import { format, parse } from "date-fns";
import createDarkModeToggle from "./darkmodeToggle";
import createTask, { getRadioCheckedValue } from "./task";
import createProject, { checkDupProjectName } from "./project";
import saveToStorage, { retrieveFromLocalStorage } from "./localStorage";
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

const { tasksArray, projectsArray } = retrieveFromLocalStorage();
const dateFormat = "MMM do, yyyy";
let currentProject = "";
let currentNonProjectDirectory = "home";

// Add Light/Dark Theme toggle
(function createDarkModeToggleInDOM() {
  const toggleWrapper = createDarkModeToggle();
  const directoryHeader = document.querySelector(".directory_header");

  directoryHeader.appendChild(toggleWrapper);
})();

// Toggle sidebar open or closed with button and expand closed sidebar upon hover
(function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const collapseIcon = document.querySelector(".collapse_sidebar_icon");
  const expandIcon = document.querySelector(".expand_sidebar_icon");
  const mql = window.matchMedia("(max-width: 800px)");

  collapseIcon.addEventListener("click", () => {
    sidebar.classList.add("closed");
    sidebar.classList.add("hoverable");
    collapseIcon.classList.add("hidden");
    expandIcon.classList.remove("hidden");
  });

  expandIcon.addEventListener("click", () => {
    sidebar.classList.remove("closed");
    sidebar.classList.remove("hoverable");
    collapseIcon.classList.remove("hidden");
    expandIcon.classList.add("hidden");
  });

  sidebar.addEventListener("mouseenter", () => {
    if (sidebar.classList.contains("hoverable")) {
      sidebar.classList.remove("closed");
    }
  });

  sidebar.addEventListener("mouseleave", () => {
    if (sidebar.classList.contains("hoverable")) {
      sidebar.classList.add("closed");
    }
  });

  mql.addEventListener("change", (e) => {
    if (e.matches) {
      sidebar.classList.add("closed");
      sidebar.classList.add("hoverable");
      collapseIcon.classList.add("hidden");
      expandIcon.classList.remove("hidden");
    }
  });
})();

// Project Form Query Selectors
const addProjectBtn = document.querySelector(".add_project button");
const addProjectBtnDiv = document.querySelector(".add_project");
const addProjectFormDiv = document.querySelector(".add_project_form_div");
const addProjectForm = document.querySelector(".add_project_form");
const submitProjectBtn = document.querySelector("button.addProjectBtn");
const cancelProjectBtn = document.querySelector("button.cancelProjectBtn");

// Task Form Query Selectors
const addTaskBtn = document.querySelector(".addTaskBtn button");
const addTaskBtnDiv = document.querySelector(".addTaskBtn");
const addTaskFormDiv = document.querySelector(".add_task_form_div");
const addTaskForm = document.querySelector(".add_task_form");
const submitTaskBtn = document.querySelector("button.addTaskFormBtn");
const cancelTaskBtn = document.querySelector("button.cancelTaskFormBtn");

// Event listeners
addProjectBtn.addEventListener("click", () => {
  displayElement(addProjectFormDiv);
  hideElement(addProjectBtnDiv);
  document.querySelector('input[name="project_name"]').focus();
  addTaskBtn.disabled = true;
  const lastProjectIndex = getLastSelectedProjectIndex();
  renderProjectsUI(projectsArray, tasksArray);
  createProjectEventListeners();
  styleLastSelectedProjectDirectory(lastProjectIndex);
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

  displayElement(addProjectBtnDiv);
  hideElement(addProjectFormDiv);
  hideElement(document.querySelector(".duplicateNameErrorMessage"));
  renderProjectsUI(projectsArray, tasksArray);
  renderTasksInProject(tasksArray, currentProject);
  createTaskEventListeners();
  createProjectEventListeners();

  displayElement(addTaskBtnDiv);
  addTaskBtn.disabled = false;

  const lastProjectElement =
    document.querySelector(".project_directory").lastElementChild;
  lastProjectElement.scrollIntoView({ behavior: "smooth", inline: "start" });

  styleSelectedDirectory(lastProjectElement);
  saveToStorage(tasksArray, projectsArray);
});

cancelProjectBtn.addEventListener("click", () => {
  displayElement(addProjectBtnDiv);
  hideElement(addProjectFormDiv);
  hideElement(document.querySelector(".duplicateNameErrorMessage"));
  addTaskBtn.disabled = false;
});

addTaskBtn.addEventListener("click", () => {
  displayElement(addTaskFormDiv);
  hideElement(addTaskBtnDiv);
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

  displayElement(addTaskBtnDiv);
  hideElement(addTaskFormDiv);
  if (currentProject) {
    const lastProjectIndex = getLastSelectedProjectIndex();
    renderProjectsUI(projectsArray, tasksArray);
    createProjectEventListeners();
    styleLastSelectedProjectDirectory(lastProjectIndex);
    renderTasksInProject(tasksArray, currentProject);
  } else {
    renderTasksInHome(tasksArray);
  }
  renderNonProjectsUI(tasksArray, dateFormat);
  createTaskEventListeners();

  addProjectBtn.disabled = false;

  const lastTaskElement = document.querySelector(".task_list").lastElementChild;
  lastTaskElement.scrollIntoView({ behavior: "smooth", inline: "start" });

  saveToStorage(tasksArray, projectsArray);
});

cancelTaskBtn.addEventListener("click", () => {
  displayElement(addTaskBtnDiv);
  hideElement(addTaskFormDiv);
  addProjectBtn.disabled = false;
});

renderNonProjectsUI(tasksArray, dateFormat);
renderProjectsUI(projectsArray, tasksArray);
renderTasksInHome(tasksArray);
createNonProjectDirectoryEventListeners();
createProjectEventListeners();
createTaskEventListeners();

// Functions
function closeAndResetForms() {
  addProjectForm.reset();
  addTaskForm.reset();
  addProjectBtn.disabled = false;
  addTaskBtn.disabled = false;

  displayElement(addProjectBtnDiv);
  displayElement(addTaskBtnDiv);
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
      const projectDiv = document.querySelector(
        `.projectDivUI[data-index="${i}"]`
      );

      currentProject = name;
      currentNonProjectDirectory = "";
      renderTasksInProject(tasksArray, currentProject);
      createTaskEventListeners();
      closeAndResetForms();
      scrollTaskListToTop();
      styleSelectedDirectory(projectDiv);
    })
  );

  editIcons.forEach((editIcon) =>
    editIcon.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      const lastProjectIndex = getLastSelectedProjectIndex();

      renderProjectsUI(projectsArray, tasksArray);
      createProjectEventListeners();
      styleLastSelectedProjectDirectory(lastProjectIndex);
      addProjectForm.reset();
      displayElement(addProjectBtnDiv);
      hideElement(addProjectFormDiv);

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
        styleLastSelectedProjectDirectory(lastProjectIndex);

        if (currentProject === selectedProjectName) {
          currentProject = editedProjectName;
          renderTasksInProject(tasksArray, currentProject);
          createTaskEventListeners();
        }

        saveToStorage(tasksArray, projectsArray);
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
      let lastProjectIndex = getLastSelectedProjectIndex();

      deleteTasksInProject(selectedProjectName);
      projectsArray.splice(i, 1);
      renderNonProjectsUI(tasksArray, dateFormat);
      renderProjectsUI(projectsArray, tasksArray);
      createProjectEventListeners();

      if (lastProjectIndex) {
        if (+lastProjectIndex < +i) {
          styleLastSelectedProjectDirectory(lastProjectIndex);
        } else if (+lastProjectIndex > +i) {
          lastProjectIndex -= 1;
          styleLastSelectedProjectDirectory(lastProjectIndex);
        }
      }

      if (currentProject === selectedProjectName) {
        renderTasksInHome(tasksArray);
        createTaskEventListeners();
        currentProject = "";
        currentNonProjectDirectory = "home";
        document.querySelector(".home").classList.add("selectedDirectory");
        highlightProjectCategoryName();
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
      saveToStorage(tasksArray, projectsArray);
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
    styleSelectedDirectory(home);
  });

  today.addEventListener("click", () => {
    currentProject = "";
    currentNonProjectDirectory = "today";
    renderTasksInToday(tasksArray, dateFormat);
    createTaskEventListeners();
    closeAndResetForms();
    scrollTaskListToTop();
    hideElement(addTaskBtnDiv);
    styleSelectedDirectory(today);
  });

  week.addEventListener("click", () => {
    currentProject = "";
    currentNonProjectDirectory = "week";
    renderTasksInWeek(tasksArray, dateFormat);
    createTaskEventListeners();
    closeAndResetForms();
    scrollTaskListToTop();
    hideElement(addTaskBtnDiv);
    styleSelectedDirectory(week);
  });

  important.addEventListener("click", () => {
    currentProject = "";
    currentNonProjectDirectory = "important";
    renderTasksInImportant(tasksArray);
    createTaskEventListeners();
    closeAndResetForms();
    scrollTaskListToTop();
    hideElement(addTaskBtnDiv);
    styleSelectedDirectory(important);
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
        const lastProjectIndex = getLastSelectedProjectIndex();
        renderProjectsUI(projectsArray, tasksArray);
        createProjectEventListeners();
        styleLastSelectedProjectDirectory(lastProjectIndex);
      }

      renderNonProjectsUI(tasksArray, dateFormat);
      taskDiv.classList.toggle("completedTask");
      saveToStorage(tasksArray, projectsArray);
    })
  );

  details.forEach((detail) =>
    detail.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      const taskDiv = document.querySelector(`.taskDivUI[data-index="${i}"]`);
      const taskDetailsDiv = document.createElement("textarea");
      const previousTaskDetailsDiv = document.querySelector(".taskDetailsDiv");
      const previousTaskDetail = document.querySelector(".selectedTaskDetail");

      if (previousTaskDetail) {
        previousTaskDetail.classList.remove("selectedTaskDetail");
      }

      if (previousTaskDetailsDiv) {
        const previousTaskIndex = previousTaskDetailsDiv.dataset.index;
        if (previousTaskIndex === i) {
          previousTaskDetailsDiv.remove();
          return;
        }
        previousTaskDetailsDiv.remove();
      }

      if (tasksArray[i].details) {
        taskDetailsDiv.value = `${tasksArray[i].details}`;
      } else {
        taskDetailsDiv.value = "No details";
      }

      detail.classList.add("selectedTaskDetail");
      taskDetailsDiv.classList.add("taskDetailsDiv");
      taskDetailsDiv.dataset.index = i;
      taskDetailsDiv.readOnly = true;
      taskDetailsDiv.setAttribute("rows", "4");
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
        saveToStorage(tasksArray, projectsArray);
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
        const lastProjectIndex = getLastSelectedProjectIndex();
        renderProjectsUI(projectsArray, tasksArray);
        createProjectEventListeners();
        styleLastSelectedProjectDirectory(lastProjectIndex);
      }

      renderNonProjectsUI(tasksArray, dateFormat);
      createTaskEventListeners();
      saveToStorage(tasksArray, projectsArray);
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

function styleSelectedDirectory(directory) {
  const previousDirectory = document.querySelector(".selectedDirectory");
  if (previousDirectory) {
    previousDirectory.classList.remove("selectedDirectory");
  }
  directory.classList.add("selectedDirectory");
  highlightProjectCategoryName();
}

function getLastSelectedProjectIndex() {
  const currentProjectDirectoryDiv = document.querySelector(
    ".projectDivUI.selectedDirectory"
  );

  if (currentProjectDirectoryDiv) {
    const i = currentProjectDirectoryDiv.dataset.index;
    return i;
  }
  return null;
}

function styleLastSelectedProjectDirectory(index) {
  if (index) {
    const projectDiv = document.querySelector(
      `.projectDivUI[data-index="${index}"]`
    );
    projectDiv.classList.add("selectedDirectory");
  }
}

function highlightProjectCategoryName() {
  const projectDirectorySelected = document.querySelector(
    ".projectDivUI.selectedDirectory"
  );
  if (projectDirectorySelected) {
    document
      .querySelector(".project_title")
      .classList.add("projectDirectorySelected");
  } else {
    document
      .querySelector(".project_title")
      .classList.remove("projectDirectorySelected");
  }
}
