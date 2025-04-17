import "./style.css"
import {buttonClick, addproject} from "./buttons.js"
import {project} from "./constructors.js"
import {projectLoop} from "./projectvisual.js";

const myProjects = []

const firstLoad = (function() {
    const body = document.querySelector("body");

    const top = document.createElement("div");
    top.classList.add("top")
    body.appendChild(top);
    
    const key = document.createElement("div");
    key.classList.add("key");
    top.appendChild(key);

    const keybracket1 = document.createElement("div");
    keybracket1.classList.add("keybracket");
    key.appendChild(keybracket1);

    const lowkey = document.createElement("div");
    lowkey.classList.add("low");
    lowkey.setAttribute("id", "keyb");
    keybracket1.appendChild(lowkey);
    keybracket1.append("Low Priority");

    const keybracket2 = document.createElement("div");
    keybracket2.classList.add("keybracket");
    key.appendChild(keybracket2);

    const midkey = document.createElement("div");
    midkey.classList.add("mid");
    midkey.setAttribute("id", "keyb");
    keybracket2.appendChild(midkey);
    keybracket2.append("Medium Priority");

    const keybracket3 = document.createElement("div");
    keybracket3.classList.add("keybracket");
    key.appendChild(keybracket3);

    const highkey = document.createElement("div");
    highkey.classList.add("high");
    highkey.setAttribute("id", "keyb");
    keybracket3.appendChild(highkey);
    keybracket3.append("High Priority");

    const headtitle = document.createElement("div");
    headtitle.classList.add("headtitle");
    headtitle.textContent = "My Projects";
    top.appendChild(headtitle);

    const addp = document.createElement("button");
    addp.classList.add("addp");
    addp.textContent = "Add Projects";
    top.appendChild(addp);

    const holder = document.createElement("div");
    holder.classList.add("holder");
    body.appendChild(holder);

    const next = new project("Test Project", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "yyyy-mm-dd", "high");
    myProjects.push(next);

    projectLoop();
    buttonClick();
    addproject();
})();

const projectsPage = (function() {
    const top = document.querySelector(".top");
    const body = document.querySelector("body");

    const headtitle = document.querySelector(".headtitle");
    headtitle.textContent = "My Projects";
    top.appendChild(headtitle);

    const addp = document.createElement("button");
    addp.classList.add("addp");
    addp.textContent = "Add Projects";
    top.appendChild(addp);

    const holder = document.createElement("div");
    holder.classList.add("holder");
    body.appendChild(holder);

    addproject();
    projectLoop();
});


export {myProjects, projectsPage}