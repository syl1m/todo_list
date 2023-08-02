function setArrays() {
  const tasksString = localStorage.getItem("tasks");
  const projectsString = localStorage.getItem("projects");

  const tasksArray = JSON.parse(tasksString);
  const projectsArray = JSON.parse(projectsString);

  return { tasksArray, projectsArray };
}

export default function saveToStorage(tasksArray, projectsArray) {
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
  localStorage.setItem("projects", JSON.stringify(projectsArray));
}

export function retrieveFromLocalStorage() {
  if (!localStorage.getItem("tasks") || !localStorage.getItem("projects")) {
    const tasksArray = [];
    const projectsArray = [];
    saveToStorage(tasksArray, projectsArray);
    return { tasksArray, projectsArray };
  }

  const arrays = setArrays();
  return arrays;
}
