//============//
// Calculator //
//============//
let displayValue = "0";

function appendValue(value) {
  const display = document.getElementById("display");

  // If the display is showing "0" or "Error", replace it with the value
  if (display.value === "0" || display.value === "Error") {
    display.value = value;
  } else {
    // Otherwise, append the value to the current display
    display.value += value;
  }
}

function clearDisplay() {
  displayValue = "0";
  document.getElementById("display").value = displayValue;
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    // Evaluate the mathematical expression, replacing symbols for operators
    display.value = eval(display.value.replace("×", "*").replace("÷", "/"));
  } catch (error) {
    // If there's an error (e.g., invalid expression), show 'Error'
    display.value = "Error";
  }
}

function delLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1) || "0";
}


//============================//
// Dark or Light Theme Toggle //
//============================//
const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener("click", () => {
  // Toggle the light-mode class
  body.classList.toggle("light-mode");

  // Update the icon based on the mode
  const icon = modeToggle.querySelector("i");
  if (body.classList.contains("light-mode")) {
    icon.classList.replace("ri-sun-line", "ri-moon-fill");
  } else {
    icon.classList.replace("ri-moon-fill", "ri-sun-line");
  }
});