import {project} from "./constructors.js"
import {myProjects} from "./index.js";
import {createCard} from "./projectvisual.js";

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

export {buttonClick}