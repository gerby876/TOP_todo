import { myProjects } from "./index.js";



const updateStorage = (function() {
    localStorage.setItem("myProjects", JSON.stringify(myProjects));
});

const useStorage = (function() {
    if (localStorage.getItem("myProjects")) {
    for (let x=0; x<JSON.parse(localStorage.getItem("myProjects")).length; x++) {
        myProjects.push(JSON.parse(localStorage.getItem("myProjects"))[x]);
    }};
});



export {updateStorage, useStorage}

