import {project} from "./constructors.js"
import {myProjects} from "./index.js";

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
    const title = document.getElementById("projecttitle");
    const description = document.getElementById("projectdesc");
    const projectdue = document.getElementById("projectdue");
    const projectprio = document.getElementById("projectprio");
    const next = new project(title.value, description.value, projectdue.value, projectprio.value);
    myProjects.push(next);
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