import {project, task} from "./constructors.js"
import {myProjects, projectsPage} from "./index.js";
import {createCard, singleTask, edittaskvisual} from "./projectvisual.js";

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

const submitTask = (function(i) {
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

const addTask = (function(id) {
    document.querySelector(".taskForm").id = id
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
        addTask(id);
    });

    const submit = document.querySelector(".submitTask");
    submit.addEventListener("click", () => {
        submitTask(i, id);
    });
});

const edittask = (function(i, editid, list, description, taskDate){
    document.querySelector(".editform").showModal();

    const editform = document.getElementById("editform");
    const editbutton = document.createElement("button");
    editbutton.classList.add("editTask");
    editbutton.textContent = "Submit";
    editform.appendChild(editbutton);

    for (let x=0; x<myProjects[i].tasks.length; x++) {
        if (myProjects[i].tasks[x].taskId == editid) {
            document.getElementById("editdesc").value = myProjects[i].tasks[x].taskDes;
            document.getElementById("editprio").value = myProjects[i].tasks[x].taskPrio;
            document.getElementById("editdue").value = myProjects[i].tasks[x].taskDue;
        };
    };

    editbutton.addEventListener("click", () => {
        list.className = document.getElementById("editprio").value;
        description.textContent = document.getElementById("editdesc").value;
        taskDate.textContent = "Due Date: " + document.getElementById("editdue").value;
        document.querySelector(".editform").close()
        editbutton.remove()
    });

    const editcloseTask = document.querySelector(".editcloseTask");
    editcloseTask.addEventListener("click", () => {
        document.querySelector(".editform").close()
        editbutton.remove()
    });


});

const completetask = (function(taskDate, description) {
    if (taskDate.style.textDecoration !== "line-through") {
        taskDate.style.textDecoration = "line-through";
        description.style.textDecoration = "line-through";
        } else {
            taskDate.style.textDecoration = "none"
            description.style.textDecoration = "none";
        };
});

const removetask = (function(list, id, i) {
    for (let x=0; x<myProjects[i].tasks.length; x++) {
        if (myProjects[i].tasks[x].taskId == id) {
            myProjects[i].tasks.splice(x, 1);
            break;
        }
    }
    list.remove();
});

const individualtasks = (function(list, taskDate, description, edit, complete, deletetask, id, i) {
    

    edit.addEventListener("click", () => {
        const editid = id
        edittask(i, editid, list, description, taskDate)
    });
    complete.addEventListener("click", () => {
        completetask(taskDate, description)
    });

    deletetask.addEventListener("click", () => {
        removetask(list, id, i);
    });
});


export {buttonClick, addproject, taskButtons, individualtasks}