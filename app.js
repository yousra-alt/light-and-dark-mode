"use strict";

window.addEventListener("load", initApp);

function initApp() {
  detectUserPreference();
  //event listener for select on HTML
  document
    .querySelector("#select-color-mode")
    .addEventListener("change", modeSelected);
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
  const selectedColorMode = this.value;
  console.log(selectedColorMode);
  changeMode(selectedColorMode);
  saveUserColorMode(selectedColorMode);
}

function changeMode(mode) {
  resetColorMode();
  if (mode === "dark") {
    console.log("mode");
    document.querySelector("body").classList.add("dark-mode");
  } else if (mode === "violet") {
    console.log("Violet mode");
    document.querySelector("body").classList.add("violet-mode");
  } else if (mode === "pink") {
    console.log("Pink mode");
    document.querySelector("body").classList.add("pink-mode");
  }
}

function resetColorMode() {
  document.querySelector("body").classList.remove("dark-mode");
  document.querySelector("body").classList.remove("pink-mode");
  document.querySelector("body").classList.remove("violet-mode");
}

function saveUserColorMode(selectedColorMode) {
  localStorage.setItem("userColorMode", mode);

  document.querySelector("body").classList.add("dark-mode");
  document.querySelector("body").classList.add("violet-mode");
  document.querySelector("body").classList.add("pink-mode");
}

function detectUserPreference() {}

function readUserColorMode() {
    
}
