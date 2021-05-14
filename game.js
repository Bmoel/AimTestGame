let canvas;
let context;

document.addEventListener("DOMContentLoaded", () => {
  console.log("got here");
  canvas = document.querySelector("#myCanvas");
  context = canvas.getContext("2d");
  console.log("laptop update test");
  main_menu();
})

document.addEventListener("click", game_click);

function game_click(e) {
  console.log("click recieved");

}

function main_menu() {
  context.fillStyle = '#000000';
  context.font = '100pt Candara';
  context.fillText("Aim Test", 430, 250);
  var button = document.createElement("button");
  button.innerHTML = "Play Game";
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);
  button.addEventListener("click", () => {
      context.clearRect(0,0,canvas.width,canvas.height);
      body.removeChild(button);
      print_instructions();
      print_game();
  })
}

function print_instructions() {
  context.font = '60pt Candara'
  context.fillText("In order to play please", 300, 100);
  context.fillText("click all of the objects", 310, 250);
  context.fillText("on the screen", 430, 400);
  setTimeout(() => context.clearRect(0,0,canvas.width,canvas.height), 4000);
}

function print_game() {

}

function tick() {
    window.requestAnimationFrame(print_game);
}
