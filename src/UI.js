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

// Create event listeners for tasks and project elements

// Render Non Project directories in sidebar

// Function to check form validity
export function checkFormValidity(formElementName) {
  const element = document.querySelector(`input[name="${formElementName}"]`);
  return element.checkValidity();
}
