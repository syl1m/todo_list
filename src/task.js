import { format, parse } from "date-fns";

class Task {
  constructor(title, details, dueDate, priority, project) {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.completed = "no";
  }

  taskToArray(array) {
    array.push(this);
  }
}

// Function to get value from radio button
export function getRadioCheckedValue(inputName) {
  const radioElements = document.getElementsByName(inputName);
  let checkedValue = "";

  for (let i = 0; i < radioElements.length; i++) {
    if (radioElements[i].checked) {
      checkedValue = radioElements[i].value;
      break;
    }
  }

  return checkedValue;
}

// Function to create task from form
export default function createTask(currentProject, dateFormat) {
  const title = document.querySelector('input[name="title"]').value.trim();
  const details = document
    .querySelector('textarea[name="task_details"]')
    .value.trim();
  const dueDate = format(
    parse(
      document.querySelector('input[name="dueDate"]').value,
      "yyyy-MM-dd",
      new Date()
    ),
    dateFormat
  );
  const priority = getRadioCheckedValue("priority");
  const project = `${currentProject}`;

  return new Task(title, details, dueDate, priority, project);
}
