"use strict";

window.addEventListener("load", initApp);

function initApp() {
    //event listener for select on HTML
    document.querySelector("#select-color-mode").addEventListener("change", modeSelected);
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
    const selectedColorMode = this.value;
    console.log(selectedColorMode);
    changeMode(selectedColorMode);
}

// adds a css class to body based on choosen mode
function changeMode(mode) {
    if (mode === "dark") {
        console.log("Dark Mode");
        document.body.classList.add("dark-mode");
    } else {
        console.log("Might be light mode");
        document.body.classList.remove("dark-mode");
    }
}
