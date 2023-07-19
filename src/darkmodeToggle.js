// The Sun and Moon icons are from Google Material icons.  Need to link stylesheet in HTML for this module to work.

export default function createDarkModeToggle() {
  const toggleDiv = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");
  const sunIcon = document.createElement("i");
  const moonIcon = document.createElement("i");
  const slider = document.createElement("span");

  input.setAttribute("type", "checkbox");
  input.setAttribute("id", "darkmode_checkbox");
  label.setAttribute("for", "darkmode_checkbox");

  toggleDiv.classList.add("darkmode_toggle_wrapper");
  input.classList.add("darkmode_checkbox_input");
  label.classList.add("darkmode_checkbox_label");
  sunIcon.classList.add("material-symbols-outlined");
  sunIcon.classList.add("sun");
  moonIcon.classList.add("material-symbols-outlined");
  moonIcon.classList.add("moon");
  slider.classList.add("darkmode_slider");

  sunIcon.innerText = "light_mode";
  moonIcon.innerText = "dark_mode";

  toggleDiv.appendChild(input);
  toggleDiv.appendChild(label);
  label.appendChild(sunIcon);
  label.appendChild(moonIcon);
  label.appendChild(slider);

  input.addEventListener("change", () => {
    document.body.classList.toggle("light_theme");
  });

  return toggleDiv;
}
