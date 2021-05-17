let canvas;
let context;
let first_time = true;

document.addEventListener("DOMContentLoaded", () => {
  canvas = document.querySelector("#myCanvas");
  context = canvas.getContext("2d");
  main_menu();
})

document.addEventListener("click", game_click);

function game_click(e) {
  console.log("click recieved");
}

function main_menu() {
  context.fillStyle = '#000000';
  context.font = '100pt Candara';
  context.fillText("Aim Test", 430, 300);
  var button = document.createElement("button");
  button.innerHTML = "Play Game";
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);
  button.addEventListener("click", () => {
      context.clearRect(0,0,canvas.width,canvas.height);
      body.removeChild(button);
      print_instructions();
  })
}

function print_instructions() {
  let seconds = 5;
  let timer = setInterval(() => {
    context.clearRect(0,0,canvas.width,canvas.height);
    context.font = '60pt Candara'
    context.fillText("In order to play please", 300, 100);
    context.fillText("click all of the objects", 310, 250);
    context.fillText("on the screen", 430, 400);
    context.fillText("Game begins in " + seconds + " seconds", 230, 550);
    seconds -= 1;
    if (seconds == 0) {
      setTimeout(() => {
        clearInterval(timer);
        context.clearRect(0,0,canvas.width,canvas.height);
        print_game();
      },1000)
    }
  },1000)
}

function print_game() {
  let seconds = 15;
  context.font = '30pt Candara';
  if (first_time == true) {
    let timer = setInterval(() => {
      first_time = false;
      context.clearRect(0,0,canvas.width,canvas.height);
      context.fillText("Time left: " + seconds,570,50);
      seconds -= 1;
      if (seconds == 0) {
        clearInterval(timer);
        context.clearRect(0,0,canvas.width,canvas.height);
        game_over();
      }
    },1000)
  }
  
}

function game_over() {
  console.log("got to game over");
}

function tick() {
    window.requestAnimationFrame(print_game);
}
