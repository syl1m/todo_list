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
  const editIcon = document.createElement("div");
  const deleteIcon = document.createElement("div");

  checkbox.setAttribute("type", "checkbox");
  title.textContent = `${tasksArray[i].title}`;
  details.textContent = "DETAILS";
  dueDate.textContent = `${tasksArray[i].dueDate}`;
  editIcon.textContent = "edit";
  deleteIcon.textContent = "delete";

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
    const optionsIcon = document.createElement("div");
    const editIcon = document.createElement("div");
    const deleteProject = document.createElement("div");

    totalTasks.textContent = countTasksInProject(
      projectsArray[i].projectName,
      tasksArray
    );
    name.textContent = `${projectsArray[i].projectName}`;
    name.classList.add("projectNameEventListener");
    name.dataset.index = i;
    optionsIcon.textContent = ":";
    editIcon.textContent = "i";
    deleteProject.textContent = "X";

    projectDiv.appendChild(totalTasks);
    projectDiv.appendChild(name);
    projectDiv.appendChild(optionsIcon);
    optionsIcon.appendChild(editIcon);
    optionsIcon.appendChild(deleteProject);

    projectDirectory.appendChild(projectDiv);
    // Add event listener to options icon, hidden until hover over projectdiv element
    // Add event listeners for edit name and delete project
  }
}

// Render Non Project directories sidebar task count
export function renderNonProjectsUI(tasksArray, dateFormat) {
  const homeTaskCount = document.querySelector(".home .taskCount");
  const todayTaskCount = document.querySelector(".today .taskCount");
  const weekTaskCount = document.querySelector(".week .taskCount");
  const importantTaskCount = document.querySelector(".important .taskCount");

  homeTaskCount.textContent = countTasksInHome(tasksArray);
  todayTaskCount.textContent = countTasksInToday(tasksArray, dateFormat);
  weekTaskCount.textContent = countTasksInWeek(tasksArray, dateFormat);
  importantTaskCount.textContent = countTasksInImportant(tasksArray);
}

// Function to check form validity
export function checkFormValidity(formElementName) {
  const element = document.querySelector(`input[name="${formElementName}"]`);
  return element.checkValidity();
}
