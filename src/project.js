class Project {
  constructor(projectName) {
    this.projectName = projectName;
  }

  projectToArray(array) {
    array.push(this);
  }
}

// Function to create project from form
export default function createProject() {
  const projectName = document
    .querySelector('input[name="project_name"]')
    .value.trim();

  return new Project(projectName);
}

// Function to edit project name
// Function to prevent duplicate Project names
export function checkDupProjectName(projectsArray) {
  const name = document
    .querySelector('input[name="project_name"]')
    .value.trim();

  for (let i = 0; i < projectsArray.length; i++) {
    if (name === projectsArray[i].projectName) {
      return true;
    }
  }

  return false;
}
