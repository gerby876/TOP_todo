import {project, task} from "./constructors.js"
import {myProjects} from "./index.js";
import {createCard, populateTasks} from "./projectvisual.js";

const addproject = (function() {
    document.querySelector("dialog").showModal();
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

const buttonClick = (function() {
    const button = document.querySelector(".addp");
    const close = document.querySelector(".close");
    const submit = document.querySelector(".submit");

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
});

const addTask = (function() {
    const addt = document.getElementById("addt");
    addt.addEventListener("click", () => {
        const test = new task("test description", "xxxx-xx-xx", "mid");
        myProjects[1].tasks.push(test);
        console.log(myProjects[1].tasks);
        populateTasks(myProjects[1].tasks.length)
    });
});


export {buttonClick, addTask}