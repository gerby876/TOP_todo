import { myProjects } from "./index.js";

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

    card.addEventListener("click", () => {
        enlargeCard()
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

});

const projectLoop = (function() {
    for (let i=0; i<myProjects.length; i++) {
        createCard(myProjects[i]);
    }
});




const enlargeCard = (function() {
    console.log(1);
});

export {createCard, projectLoop}