const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const score = document.getElementById("score");
const startBtn = document.getElementById("startBtn");

let gameStarted = false;
let scoreCounter = 0;

function jump() {
  if (!gameStarted) return;

  dino.classList.add("jump-animation");
  setTimeout(() => {
    dino.classList.remove("jump-animation");
  }, 500);
}

function startGame() {
  console.log("Start Button wurde geklickt");
  gameStarted = true;

  rock.classList.add("rock-animation");
  startBtn.style.display = "none";
}

startBtn.addEventListener("click", startGame);

document.addEventListener("keypress", (event) => {
  if (!dino.classList.contains("jump-animation") && gameStarted) {
    jump();
  }
});

setInterval(() => {
  if (!gameStarted) return;

  const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));

  scoreCounter++;
  score.innerText = scoreCounter;

  if (rockLeft < 0) {
    rock.style.display = "none";
  } else {
    rock.style.display = "";
  }

  if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
    alert("You got a score of: " + score.innerText + "\n\nPlay again?");
    location.reload();
  }
}, 50);
