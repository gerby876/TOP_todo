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

const submitTask = (function(i, id) {
    for (let x=0; x<myProjects[i].tasks.length; x++) {
        if (id === myProjects[i].tasks[x].taskId) {
            console.log(2)
        } else {
            const newTask = new task(document.getElementById("taskdesc").value, document.getElementById("taskdue").value, document.getElementById("taskprio").value);
            myProjects[i].tasks.push(newTask);
            singleTask(i);
            closeoutTask();
        };
    };
    const newTask = new task(document.getElementById("taskdesc").value, document.getElementById("taskdue").value, document.getElementById("taskprio").value);
    myProjects[i].tasks.push(newTask);
    singleTask(i);
    closeoutTask();
});

const goback = (function() {
        document.querySelector(".taskb").remove();
        document.querySelector(".todoholder").remove();
        document.querySelector(".submitTask").remove()
        projectsPage();
});

const deleteb = (function(i) {
    myProjects.splice(i, 1);
    goback()
});

const addTask = (function() {
    document.querySelector(".taskForm").showModal();
});

const taskButtons = (function(i, id) {
    const backbutton = document.getElementById("back");
    backbutton.addEventListener("click", () => {
        goback();
    });

    const deletebutton = document.getElementById("deletep");
    deletebutton.addEventListener("click", () => {
        deleteb();
    });

    const addt = document.getElementById("addt");
    addt.addEventListener("click", () => {
        addTask();
    });

    const submit = document.querySelector(".submitTask");
    submit.addEventListener("click", () => {
        console.log(1)
        submitTask(i, id)});
    
});

const edittask = (function() {
    
});

const individualtasks = (function(id) {
    const edit =document.querySelector(".edit");
    const complete = document.getElementById(id).getElementsByClassName("complete");
    const deletet = document.getElementById(id).getElementsByClassName("delete");

    edit.addEventListener("click", () => {
        document.querySelector(".taskForm").showModal();
        console.log(1)
    });

    // complete.addEventListener("click", () => {

    // });

    // deletet.addEventListener("click", () => {

    // });
});


export {buttonClick, addproject, taskButtons, individualtasks}