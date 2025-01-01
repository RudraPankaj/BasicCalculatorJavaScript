//============//
// Calculator //
//============//
let displayValue = "";

function appendValue(value) {
  const display = document.getElementById("display");

  if (displayValue === "0" || displayValue === "Error") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  display.textContent = displayValue;
}

function clearDisplay() {
  displayValue = "0";
  document.getElementById("display").textContent = displayValue;
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    displayValue = eval(displayValue.replace("×", "*").replace("÷", "/")).toString();
    display.textContent = displayValue;
  } catch (error) {
    displayValue = "Error";
    display.textContent = displayValue;
  }
}

function delLast() {
    const display = document.getElementById("display");
    displayValue = display.textContent;

    if(displayValue === "0" || displayValue === "") {
        display.textContent = "0";
    } else {
        let newDisplayValue = display.textContent.slice(0, -1);
        display.textContent = newDisplayValue;
    }
}


//============================//
// Dark or Light Theme Toggle //
//============================//
const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener("click", () => {
  // Toggle the light-mode class
  body.classList.toggle("light-mode");

  // Update the icon
  const icon = modeToggle.querySelector("i");
  if (body.classList.contains("light-mode")) {
    icon.classList.replace("ri-sun-line", "ri-moon-fill");
  } else {
    icon.classList.replace("ri-moon-fill", "ri-sun-line");
  }
});