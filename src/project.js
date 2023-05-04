export default class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task);
  }

  addProject(projectArray) {
    this.push(projectArray);
  }
}
