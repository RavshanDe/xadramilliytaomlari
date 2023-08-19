const menu = document.getElementById("toggle_menu");
menu.addEventListener("click", () => {
    let navBar = document.querySelector("nav");
    navBar.classList.toggle("toggle_clas")
});

// const modal = document.querySelector("#modal")
// const openBtn = document.querySelector("#open-btn")
// const closeBtn = document.querySelector("#close-btn")
// openBtn.addEventListener("click", () => [
//     modal.showModal()
// ])
// closeBtn.addEventListener("click", () => {
//     modal.close()
// })