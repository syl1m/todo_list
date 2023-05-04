export default class Task {
  constructor(title, details, dueDate, priority) {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = "";
    this.completed = "no";
  }
}
