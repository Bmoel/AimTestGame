let canvas;
let context;
let target = {
  x: 0,
  y: 0
}
let score = 0;
let unlocked = true;

document.addEventListener("DOMContentLoaded", () => {
  canvas = document.querySelector("#myCanvas");
  context = canvas.getContext("2d");
  main_menu();
})

function game_click(e) {
  const [i,j] = [e.x,e.y];
  console.log("click: " + "[" + i  + "," + j + "]" + " goal: " + "[" + target.x + "," + target.y + "]");
  if (i > target.x && i < target.x + 100 && j > target.y && j < target.y + 100) {
    console.log("success");
    if (unlocked == true) {
      score += 1000;
      unlocked = false;
    }
  }
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
  document.addEventListener("click", game_click);
  let seconds = 30;
  context.font = '30pt Candara';
  let timer = setInterval(() => {
    unlocked = true;
    context.clearRect(0,0,canvas.width,canvas.height);
    object_placer();
    context.fillText("Time left: " + Math.floor(seconds/2),400,50);
    context.fillText("Score: " + score, 850, 50);
    seconds -= 1;
    if (seconds == 0) {
      clearInterval(timer);
      setTimeout(() => {
        context.clearRect(0,0,canvas.width,canvas.height);
        game_over();
      },500)
    }
  },500)
}

function object_placer() {
  target.x = Math.floor(Math.random() * (1300 - 100) + 100);
  target.y = Math.floor(Math.random() * (700 - 100) + 100);
  context.beginPath();
  context.moveTo(target.x,target.y);
  context.lineTo(target.x + 100, target.y);
  context.lineTo(target.x + 100, target.y + 100);
  context.lineTo(target.x, target.y + 100);
  context.lineTo(target.x, target.y);
  context.stroke();
}

function game_over() {
  console.log("got to game over");
}
