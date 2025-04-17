import { myProjects } from "./index.js";
import { taskButtons, individualtasks } from "./buttons.js";

const createCard = (function (next) {
    const holder = document.querySelector(".holder");
    
    const card = document.createElement("div");

    card.setAttribute("id", "project");
        if (next.priority == "low") {
            card.classList.add("low")
        } else if (next.priority == "mid") {
            card.classList.add("mid")
        } else {
            card.classList.add("high")
        }

    
    holder.appendChild(card);
    
    let id = next.id;

    card.addEventListener("click", () => {
        enlargeCard(id);
    });

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = next.title;
    card.appendChild(title);

    const date = document.createElement("div");
    date.classList.add("date");
    const datetext = document.createElement("div");
    datetext.textContent = "Due Date:"
    
    const dateday = document.createElement("div");
    dateday.textContent = next.dueDate;
    date.appendChild(datetext);
    date.appendChild(dateday);
    title.appendChild(date);

    const des = document.createElement("div");
    des.textContent = next.description
    des.classList.add("projectDescription")
    card.appendChild(des);

});

const projectLoop = (function() {
    for (let i=0; i<myProjects.length; i++) {
        createCard(myProjects[i]);
    }
});

const enlargeCard = (function(id) {
    for (let i=0; i<myProjects.length; i++) {
        if (myProjects[i].id == id) {
            removeProject();
            enlarge(i, id);
        };
    };
});

const removeProject = (function() {
    const addp = document.querySelector(".addp");
    addp.remove();
    const holder = document.querySelector(".holder");
    holder.remove();
});

const enlarge = (function(i, id) {
    const top = document.querySelector(".top");
    const headtitle = document.querySelector(".headtitle");
    headtitle.textContent = myProjects[i].title;

    const taskb = document.createElement("div");
    taskb.classList.add("taskb");
    top.appendChild(taskb);

    const addt = document.createElement("button");
    addt.textContent = "Add Task";
    addt.classList.add("addt");
    addt.setAttribute("id", "addt");

    const deletep = document.createElement("button");
    deletep.textContent = "Delete Project";
    deletep.classList.add("addt");
    deletep.setAttribute("id", "deletep");

    const back = document.createElement("button");
    back.textContent = "Back";
    back.classList.add("addt");
    back.setAttribute("id", "back");

    taskb.appendChild(addt);
    taskb.appendChild(deletep);
    taskb.appendChild(back);

    const body = document.querySelector("body");

    const todoholder = document.createElement("div");
    todoholder.classList.add("todoholder");
    body.appendChild(todoholder);

    const form = document.getElementById("taskform");
    const taskbutton = document.createElement("button");
    taskbutton.classList.add("submitTask");
    taskbutton.textContent = "Submit"
    form.appendChild(taskbutton);

    taskButtons(i, id);

    populateTasks(i);
});

const populateTasks = (function(i) {
    if (myProjects[i].tasks.length === 0) {
        return
    } else { 
        const todoholder = document.querySelector(".todoholder");
        for (let x=0; x<myProjects[i].tasks.length; x++) {
        
        let id = myProjects[i].tasks[x].taskId;

        const list = document.createElement("div");
        list.classList.add(myProjects[i].tasks[x].taskPrio, myProjects[i].tasks[x].taskId);
        list.setAttribute("id", "tasks");
        todoholder.appendChild(list);

        const taskDate = document.createElement("div");
        taskDate.classList.add("taskdate");
        taskDate.textContent = "Due Date: " + myProjects[i].tasks[x].taskDue;
        list.appendChild(taskDate);

        const description = document.createElement("div");
        description.classList.add("task");
        description.textContent = myProjects[i].tasks[x].taskDes;
        list.appendChild(description);

        const buttons = document.createElement("div");
        buttons.classList.add("taskbuttons");
        list.appendChild(buttons);

        const edit = document.createElement("button");
        edit.textContent = "Edit Task";
        edit.classList.add("tasksb", `edit`);
        buttons.appendChild(edit);

        const complete = document.createElement("button");
        complete.textContent = "Complete Task";
        complete.classList.add("tasksb", `complete`);
        buttons.appendChild(complete);

        const deletetask = document.createElement("button");
        deletetask.textContent = "Delete Task";
        deletetask.classList.add("tasksb", `delete`);
        buttons.appendChild(deletetask);

        individualtasks(list, taskDate, description, edit, complete, deletetask, id, i)

    }};
    
});

const singleTask = (function(i) {
        const todoholder = document.querySelector(".todoholder");

        const list = document.createElement("div");
        list.classList.add(myProjects[i].tasks[(myProjects[i].tasks.length - 1)].taskPrio, myProjects[i].tasks[(myProjects[i].tasks.length - 1)].taskId);
        list.setAttribute("id", "tasks");
        todoholder.appendChild(list);

        const taskDate = document.createElement("div");
        taskDate.classList.add("taskdate");
        taskDate.textContent = "Due Date: " + myProjects[i].tasks[(myProjects[i].tasks.length - 1)].taskDue;
        list.appendChild(taskDate);

        const description = document.createElement("div");
        description.classList.add("task");
        description.textContent = myProjects[i].tasks[(myProjects[i].tasks.length - 1)].taskDes;
        list.appendChild(description);

        const buttons = document.createElement("div");
        buttons.classList.add("taskbuttons");
        list.appendChild(buttons);

        const edit = document.createElement("button");
        edit.textContent = "Edit Task";
        edit.classList.add("tasksb", "edit");
        buttons.appendChild(edit);

        const complete = document.createElement("button");
        complete.textContent = "Complete Task";
        complete.classList.add("tasksb", "complete")
        buttons.appendChild(complete);

        const deletetask = document.createElement("button");
        deletetask.textContent = "Delete Task";
        deletetask.classList.add("tasksb", "delete");
        buttons.appendChild(deletetask);

        let id = myProjects[i].tasks[(myProjects[i].tasks.length - 1)].taskId;
        individualtasks(list, taskDate, description, edit, complete, deletetask, id, i)
});

const edittaskvisual = (function() {

});


export {createCard, projectLoop, singleTask, edittaskvisual};