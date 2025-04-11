import {project} from "./constructors.js"
import {myProjects} from "./index.js";
import {createCard} from "./projectvisual.js";

const button = document.querySelector(".addp");
const close = document.querySelector(".close");
const submit = document.querySelector(".submit");

const addproject = (function() {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
});

const closeout = (function() {
    const dialog = document.querySelector("dialog");
    const projectform = document.getElementById("projectform");
    projectform.reset();
    dialog.close();
});

const submitproject = (function() {
    const projectform = document.getElementById("projectform");
    const next = new project(document.getElementById("projecttitle").value, document.getElementById("projectdesc").value, document.getElementById("projectdue").value, document.getElementById("projectprio").value);
    myProjects.push(next);
    createCard(next);
    console.log(myProjects);
    projectform.reset();
    
});

button.addEventListener("click", () => {
    addproject();
});

close.addEventListener("click", () => {
    closeout();
});

submit.addEventListener("click", () => {
    submitproject();
    closeout();
});

export {addproject, closeout, submitproject}