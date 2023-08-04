import { parse, addDays, compareAsc, startOfDay } from "date-fns";

export function hideElement(element) {
  element.classList.add("hidden");
}

export function displayElement(element) {
  element.classList.remove("hidden");
}

function setPriorityStyling(priority, taskDiv) {
  if (priority === "low") {
    taskDiv.classList.add("low-priority");
  } else if (priority === "medium") {
    taskDiv.classList.add("medium-priority");
  } else if (priority === "high") {
    taskDiv.classList.add("high-priority");
  }
}

function countTasksInProject(project, tasksArray) {
  let projectTaskCount = "";
  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].project === project && tasksArray[i].completed === "no")
      projectTaskCount++;
  }

  return projectTaskCount;
}

function countTasksInHome(tasksArray) {
  let taskCount = "";
  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].completed === "no") taskCount++;
  }

  return taskCount;
}

function countTasksInToday(tasksArray, dateFormat) {
  let taskCount = "";
  const todayDate = startOfDay(new Date());

  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].completed === "no") {
      const taskDueDate = parse(tasksArray[i].dueDate, dateFormat, new Date());
      if (compareAsc(todayDate, taskDueDate) === 0) taskCount++;
    }
  }

  return taskCount;
}

function countTasksInWeek(tasksArray, dateFormat) {
  let taskCount = "";
  const todayDate = startOfDay(new Date());
  const sevenDaysFromTodayDate = addDays(todayDate, 7);

  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].completed === "no") {
      const taskDueDate = parse(tasksArray[i].dueDate, dateFormat, new Date());
      if (
        !(
          compareAsc(taskDueDate, todayDate) === -1 ||
          compareAsc(taskDueDate, sevenDaysFromTodayDate) === 1
        )
      )
        taskCount++;
    }
  }

  return taskCount;
}

function countTasksInImportant(tasksArray) {
  let taskCount = "";
  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].completed === "no" && tasksArray[i].priority === "high")
      taskCount++;
  }

  return taskCount;
}

function createTaskDiv(tasksArray, i) {
  const taskDiv = document.createElement("div");
  taskDiv.dataset.index = i;
  taskDiv.classList.add("taskDivUI");

  const checkbox = document.createElement("input");
  const title = document.createElement("div");
  const details = document.createElement("div");
  const dueDate = document.createElement("div");
  const editIcon = document.createElement("i");
  const deleteIcon = document.createElement("i");

  checkbox.setAttribute("type", "checkbox");
  title.textContent = `${tasksArray[i].title}`;
  details.textContent = "DETAILS";
  dueDate.textContent = `${tasksArray[i].dueDate}`;
  editIcon.setAttribute("class", "fa-solid fa-pen-to-square");
  deleteIcon.setAttribute("class", "fa-solid fa-trash-can");

  checkbox.dataset.index = i;
  details.dataset.index = i;
  editIcon.dataset.index = i;
  deleteIcon.dataset.index = i;

  checkbox.classList.add("taskCheckbox");
  title.classList.add("taskTitle");
  details.classList.add("taskDetails");
  dueDate.classList.add("taskDueDate");
  editIcon.classList.add("taskEditIcon");
  deleteIcon.classList.add("taskDeleteIcon");

  if (tasksArray[i].completed === "yes") {
    checkbox.checked = true;
    taskDiv.classList.add("completedTask");
  } else {
    checkbox.checked = false;
    taskDiv.classList.remove("completedTask");
  }
  const priority = `${tasksArray[i].priority}`;
  setPriorityStyling(priority, taskDiv);

  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(title);
  taskDiv.appendChild(details);
  taskDiv.appendChild(dueDate);
  taskDiv.appendChild(editIcon);
  taskDiv.appendChild(deleteIcon);

  return taskDiv;
}

// Render Tasks for Home
export function renderTasksInHome(tasksArray) {
  const directoryName = document.querySelector(".directoryName");
  const taskList = document.querySelector(".task_list");
  directoryName.textContent = "Home";
  taskList.textContent = "";

  for (let i = 0; i < tasksArray.length; i++) {
    const taskDiv = createTaskDiv(tasksArray, i);
    taskList.appendChild(taskDiv);
  }
}

// Render Tasks for Today
export function renderTasksInToday(tasksArray, dateFormat) {
  const directoryName = document.querySelector(".directoryName");
  const taskList = document.querySelector(".task_list");
  const todayDate = startOfDay(new Date());

  directoryName.textContent = "Today";
  taskList.textContent = "";

  for (let i = 0; i < tasksArray.length; i++) {
    const taskDueDate = parse(tasksArray[i].dueDate, dateFormat, new Date());
    if (compareAsc(todayDate, taskDueDate) === 0) {
      const taskDiv = createTaskDiv(tasksArray, i);
      taskList.appendChild(taskDiv);
    }
  }
}

// Render Tasks for Week
export function renderTasksInWeek(tasksArray, dateFormat) {
  const directoryName = document.querySelector(".directoryName");
  const taskList = document.querySelector(".task_list");
  const todayDate = startOfDay(new Date());
  const sevenDaysFromTodayDate = addDays(todayDate, 7);

  directoryName.textContent = "Week";
  taskList.textContent = "";

  for (let i = 0; i < tasksArray.length; i++) {
    const taskDueDate = parse(tasksArray[i].dueDate, dateFormat, new Date());
    if (
      !(
        compareAsc(taskDueDate, todayDate) === -1 ||
        compareAsc(taskDueDate, sevenDaysFromTodayDate) === 1
      )
    ) {
      const taskDiv = createTaskDiv(tasksArray, i);
      taskList.appendChild(taskDiv);
    }
  }
}

// Render Tasks for Important
export function renderTasksInImportant(tasksArray) {
  const directoryName = document.querySelector(".directoryName");
  const taskList = document.querySelector(".task_list");
  directoryName.textContent = "Important";
  taskList.textContent = "";

  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].priority === "high") {
      const taskDiv = createTaskDiv(tasksArray, i);
      taskList.appendChild(taskDiv);
    }
  }
}

// Render Tasks for Projects
export function renderTasksInProject(tasksArray, currentProject) {
  const directoryName = document.querySelector(".directoryName");
  const taskList = document.querySelector(".task_list");
  directoryName.textContent = `${currentProject}`;
  taskList.textContent = "";

  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].project === currentProject) {
      const taskDiv = createTaskDiv(tasksArray, i);
      taskList.appendChild(taskDiv);
    }
  }
}

// Render Projects
export function renderProjectsUI(projectsArray, tasksArray) {
  const projectDirectory = document.querySelector(".project_directory");
  projectDirectory.textContent = "";

  for (let i = 0; i < projectsArray.length; i++) {
    const projectDiv = document.createElement("div");
    projectDiv.dataset.index = i;
    projectDiv.classList.add("projectDivUI");

    const totalTasks = document.createElement("div");
    const name = document.createElement("div");
    const optionsIcon = document.createElement("i");
    const optionsDiv = document.createElement("div");
    const editIcon = document.createElement("i");
    const deleteProject = document.createElement("i");

    totalTasks.textContent = countTasksInProject(
      projectsArray[i].projectName,
      tasksArray
    );
    name.textContent = `${projectsArray[i].projectName}`;
    optionsIcon.setAttribute("class", "fa-solid fa-ellipsis-vertical");
    editIcon.setAttribute("class", "fa-solid fa-pen-to-square");
    deleteProject.setAttribute("class", "fa-solid fa-trash-can");

    totalTasks.classList.add("projectTaskCount");
    name.classList.add("projectNameEventListener");
    optionsIcon.classList.add("projectOptionsIcon");
    optionsDiv.classList.add("optionsDiv");
    editIcon.classList.add("projectEditIcon");
    deleteProject.classList.add("projectDeleteIcon");

    if (totalTasks.textContent === "") {
      totalTasks.classList.add("noTasks");
    } else {
      totalTasks.classList.remove("noTasks");
    }

    totalTasks.dataset.index = i;
    name.dataset.index = i;
    editIcon.dataset.index = i;
    deleteProject.dataset.index = i;

    projectDiv.appendChild(totalTasks);
    projectDiv.appendChild(name);
    projectDiv.appendChild(optionsIcon);
    optionsIcon.appendChild(optionsDiv);
    optionsDiv.appendChild(editIcon);
    optionsDiv.appendChild(deleteProject);

    projectDirectory.appendChild(projectDiv);
  }
}

// Render Non Project directories sidebar task count
export function renderNonProjectsUI(tasksArray, dateFormat) {
  const homeTaskCount = document.querySelector(".home .taskCount");
  const todayTaskCount = document.querySelector(".today .taskCount");
  const weekTaskCount = document.querySelector(".week .taskCount");
  const importantTaskCount = document.querySelector(".important .taskCount");
  const taskCountDivs = document.querySelectorAll(".taskCount");

  homeTaskCount.textContent = countTasksInHome(tasksArray);
  todayTaskCount.textContent = countTasksInToday(tasksArray, dateFormat);
  weekTaskCount.textContent = countTasksInWeek(tasksArray, dateFormat);
  importantTaskCount.textContent = countTasksInImportant(tasksArray);
  taskCountDivs.forEach((taskCount) => {
    if (taskCount.textContent === "") {
      taskCount.classList.add("noTasks");
    } else {
      taskCount.classList.remove("noTasks");
    }
  });
}

// Function to check form validity
export function checkFormValidity(formElementName) {
  const element = document.querySelector(`input[name="${formElementName}"]`);
  return element.checkValidity();
}

// Render Edit Project Name Form and Div
export function renderEditProjectFormDiv(currentProjectName) {
  const formDiv = document.createElement("div");
  const form = document.createElement("form");
  const projectNameInput = document.createElement("input");
  const duplicateNameErrorMsgDiv = document.createElement("div");
  const formButtonContainer = document.createElement("div");
  const submitBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  formDiv.classList.add("edit_project_form_div");
  form.classList.add("edit_project_form");
  duplicateNameErrorMsgDiv.classList.add("dupNameErrorMsg_editForm");
  duplicateNameErrorMsgDiv.classList.add("hidden");
  formButtonContainer.classList.add("edit_project_form_buttons");
  submitBtn.classList.add("confirmEditProjectBtn");
  cancelBtn.classList.add("cancelEditProjectBtn");

  form.setAttribute("method", "post");
  projectNameInput.setAttribute("type", "text");
  projectNameInput.setAttribute("name", "edit_project_name");
  projectNameInput.setAttribute("id", "edit_project_name");
  projectNameInput.setAttribute("required", "");
  projectNameInput.setAttribute("pattern", ".*\\S.*");
  projectNameInput.setAttribute(
    "title",
    "Name is required and be under 25 characters"
  );
  projectNameInput.setAttribute("maxlength", "25");
  projectNameInput.value = currentProjectName;
  duplicateNameErrorMsgDiv.textContent =
    "This project already exists. Enter a different name.";
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = "Rename";
  cancelBtn.setAttribute("type", "reset");
  cancelBtn.textContent = "Cancel";

  formDiv.appendChild(form);
  form.appendChild(projectNameInput);
  form.appendChild(duplicateNameErrorMsgDiv);
  form.appendChild(formButtonContainer);
  formButtonContainer.appendChild(submitBtn);
  formButtonContainer.appendChild(cancelBtn);

  return formDiv;
}
