import {project, task} from "./constructors.js"
import {myProjects, projectsPage} from "./index.js";
import {createCard, singleTask} from "./projectvisual.js";

const addproject = (function() {
    const addp = document.querySelector(".addp");
    addp.addEventListener("click", () => {
        document.querySelector(".projectform").showModal();
    });
});

const closeout = (function() {
    document.getElementById("projectform").reset();
    document.querySelector("dialog").close();
});

const submitproject = (function() {
    const next = new project(document.getElementById("projecttitle").value, document.getElementById("projectdesc").value, document.getElementById("projectdue").value, document.getElementById("projectprio").value);
    myProjects.push(next);
    createCard(next);
    document.getElementById("projectform").reset();
    
});

const closeoutTask = (function() {
    document.getElementById("taskform").reset();
    document.querySelector(".taskForm").close();
});

const buttonClick = (function() {
    const close = document.querySelector(".close");
    const submit = document.querySelector(".submit");
    const closetask = document.querySelector(".closeTask")
    
    close.addEventListener("click", () => {
        closeout();
    });
    
    submit.addEventListener("click", () => {
        submitproject();
        closeout();
    });

    closetask.addEventListener("click", () => {
        closeoutTask();
    });
    
});

const addTask = (function(i) {
    const addt = document.getElementById("addt");
    addt.addEventListener("click", () => {
        document.querySelector(".taskForm").showModal(i);
    });
    const submit = document.querySelector(".submitTask");
    submit.addEventListener("click", () =>
        submitTask(i));
});

const submitTask = (function(i) {
    const newTask = new task(document.getElementById("taskdesc").value, document.getElementById("taskdue").value, document.getElementById("taskprio").value);
    myProjects[i].tasks.push(newTask);
    singleTask(i);
    closeoutTask();
});

const goback = (function() {
    const backbutton = document.getElementById("back");
    backbutton.addEventListener("click", () => {
        document.querySelector(".taskb").remove();
        document.querySelector(".todoholder").remove();
        document.querySelector(".submitTask").remove()
        projectsPage();
    });
});



export {buttonClick, addTask, goback, addproject}