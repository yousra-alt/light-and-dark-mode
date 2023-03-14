"use strict";

window.addEventListener("load", initApp);

function initApp() {
    //event listeners
    document.querySelector("#select-mode").addEventListener("change", modeSelected);
}

function modeSelected() {
    const mode = this.value;
    console.log(mode);
    if (mode === "dark") {
        console.log("Dark Mode");
        document.body.classList.add("dark-mode");
    } else {
        console.log("Might be light mode");
        document.body.classList.remove("dark-mode");
    }
}
