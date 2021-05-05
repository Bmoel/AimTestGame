let canvas;
let context;

document.addEventListener("DOMContentLoaded", () => {
    canvas = document.querySelector("#myCanvas");
    context = canvas.getContext("2d");
    main_menu();
})

function main_menu() {
    var button = document.createElement("button");
    button.innerHTML = "Play Game";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
    button.addEventListener("click", () => {
        console.log("hey");
    })
}

function tick() {
    window.requestAnimationFrame(print_game);
}