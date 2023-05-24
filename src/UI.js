export function hideElement(element) {
  element.classList.add("hidden");
}

export function displayElement(element) {
  element.classList.remove("hidden");
}

// Render Tasks in DOM

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

// Function to check form validity
export function checkFormValidity(formElementName) {
  const element = document.querySelector(`input[name="${formElementName}"]`);
  return element.checkValidity();
}
