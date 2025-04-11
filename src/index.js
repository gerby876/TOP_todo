import "./style.css"
import {buttonClick} from "./buttons.js"
import { project } from "./constructors.js"
import { projectLoop } from "./projectvisual.js";

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

    const next = new project("Test Project 1", "Test project description", "1995-08-31", "low");
    myProjects.push(next);

    const next1 = new project("Test Project 1", "Test project description", "1995-08-31", "mid");
    myProjects.push(next1);

    projectLoop();
    buttonClick();

});

const projectsPage = (function() {
    projectLoop();
});


export {myProjects}