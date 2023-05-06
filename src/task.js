class Task {
  constructor(title, details, dueDate, priority) {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = "";
    this.completed = "no";
  }

  taskToArray(array) {
    array.push(this);
  }
}

// Function to get value from radio button
function getRadioCheckedValue(inputName) {
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
export default function createTask() {
  const title = document.querySelector('input[name="title"]').value.trim();
  const details = document
    .querySelector('textarea[name="task_details"]')
    .value.trim();
  const dueDate = document.querySelector('input[name="dueDate"]').value;
  const priority = getRadioCheckedValue("priority");

  return new Task(title, details, dueDate, priority);
}

// Function to edit task
// Function to associate task with project
// Function to mark task as complete
