const createCard = (function (next) {
    const holder = document.querySelector(".holder");

    const card = document.createElement("div");

    console.log(next.priority)
    console.log(typeof(next.priority))

    card.setAttribute("id", "project");
        if (next.priority == "low") {
            card.classList.add("low")
        } else if (next.priority == "mid") {
            card.classList.add("mid")
        } else {
            card.classList.add("high")
        }

    
        holder.appendChild(card);


    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = next.title;
    card.appendChild(title);
});

export {createCard}