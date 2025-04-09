import "./style.css"

const addproject = (function() {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
});

const button = document.querySelector(".addp");

button.addEventListener("click", () => {
    addproject();
});