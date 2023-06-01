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

// Render Tasks in DOM
export function renderTasksUI(tasksArray, currentProject) {
  const directoryName = document.querySelector(".directoryName");
  const taskList = document.querySelector(".task_list");
  if (currentProject) directoryName.textContent = `${currentProject}`;
  taskList.textContent = "";

  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].project === currentProject) {
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

      const priority = `${tasksArray[i].priority}`;
      setPriorityStyling(priority, taskDiv);

      taskDiv.appendChild(checkbox);
      taskDiv.appendChild(title);
      taskDiv.appendChild(details);
      taskDiv.appendChild(dueDate);
      taskDiv.appendChild(editIcon);
      taskDiv.appendChild(deleteIcon);

      taskList.appendChild(taskDiv);
      // add event listeners for checkbox, details, edit, and delete
    }
  }
}

// Render Projects in DOM
export function renderProjectsUI(projectsArray) {
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

    totalTasks.textContent = "123";
    name.textContent = `${projectsArray[i].projectName}`;
    optionsIcon.textContent = ":";
    editIcon.textContent = "i";
    deleteProject.textContent = "X";

    // Add event listener to options icon, hidden until hover over projectdiv element
    // Add event listeners for edit name and delete project
    projectDiv.appendChild(totalTasks);
    projectDiv.appendChild(name);
    projectDiv.appendChild(optionsIcon);
    optionsIcon.appendChild(editIcon);
    optionsIcon.appendChild(deleteProject);

    projectDirectory.appendChild(projectDiv);
  }
}

// Create event listeners for tasks and project elements

// Associate task and project DOM elements with index of array using data attribute

// Render Non Project directories in sidebar

// Function to check form validity
export function checkFormValidity(formElementName) {
  const element = document.querySelector(`input[name="${formElementName}"]`);
  return element.checkValidity();
}
