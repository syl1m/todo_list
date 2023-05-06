export function hideElement(element) {
  element.classList.add("hidden");
}

export function displayElement(element) {
  element.classList.remove("hidden");
}

// Render Tasks in DOM
// Render Projects in DOM
// Create event listeners for tasks and project elements
// Associate task and project DOM elements with index of array
// Function to check form validity
export function checkFormValidity(formElementName) {
  const element = document.querySelector(`input[name="${formElementName}"]`);
  return element.checkValidity();
}
