class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task);
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
