let board;
let dino;
let boardWidth = 750;
let boardHeight = 250;

let dinoWidth = 88;
let dinoHeight = 94;
let dinoX = 50;
let dinoY = 0;

let cactusArray = [];
let velocityX = -8;
let velocityY = 0;
let gravity = 0.4;

let gameOver = false;
let score = 0;
let gameStarted = false;

window.onload = function () {
  const startBtn = document.getElementById('startBtn');
  startBtn.addEventListener('click', startGame);

  board = document.getElementById('board');

  dino = document.createElement('div');
  dino.classList.add('dino');
  dino.style.left = `${dinoX}px`;
  dino.style.bottom = `${dinoY}px`;
  board.appendChild(dino);

  document.addEventListener('keydown', moveDino);
};

function startGame() {
  document.getElementById('startBtn').style.display = 'none';
  gameStarted = true;
  gameOver = false;
  score = 0;
  cactusArray = [];
  velocityY = 0;

  const scoreDisplay = document.createElement('div');
  scoreDisplay.id = 'score';
  scoreDisplay.style.position = 'absolute';
  scoreDisplay.style.top = '10px';
  scoreDisplay.style.left = '10px';
  scoreDisplay.style.font = '20px courier';
  board.appendChild(scoreDisplay);

  update();
  setInterval(placeCactus, 1000);
}

function update() {
  if (!gameStarted || gameOver) {
    return;
  }

  velocityY += gravity;
  dinoY = Math.min(dinoY + velocityY, 0);
  dino.style.bottom = `${dinoY}px`;

  cactusArray.forEach((cactus, index) => {
    cactus.x += velocityX;
    if (cactus.x + cactus.width < 0) {
      cactusArray.splice(index, 1);
      board.removeChild(cactus.element);
    } else {
      cactus.element.style.left = `${cactus.x}px`;
    }

    if (detectCollision(dino, cactus)) {
      gameOver = true;
      gameStarted = false;
      dino.style.backgroundImage = "url('./images/dinosaur/dino-dead.png')";
      alert('Гру завершено! Ваш рахунок: ' + score);
    }
  });

  score++;
  document.getElementById('score').innerText = score;

  if (!gameOver) {
    requestAnimationFrame(update);
  }
}

function moveDino(e) {
  if (gameOver || !gameStarted) {
    return;
  }

  if ((e.code === 'W' || e.code === 'ArrowUp') && dinoY === 0) {
    velocityY = -10;
  }
}

function placeCactus() {
  if (!gameStarted || gameOver) {
    return;
  }

  const cactus = document.createElement('div');
  const type = Math.random();

  if (type > 0.9) {
    cactus.classList.add('cactus', 'cactus3');
    cactusArray.push({
      element: cactus,
      x: boardWidth,
      y: 0,
      width: 102,
      height: 70,
    });
  } else if (type > 0.7) {
    cactus.classList.add('cactus', 'cactus2');
    cactusArray.push({
      element: cactus,
      x: boardWidth,
      y: 0,
      width: 69,
      height: 70,
    });
  } else {
    cactus.classList.add('cactus', 'cactus1');
    cactusArray.push({
      element: cactus,
      x: boardWidth,
      y: 0,
      width: 34,
      height: 70,
    });
  }

  board.appendChild(cactus);
}

function detectCollision(dino, cactus) {
  const dinoRect = dino.getBoundingClientRect();
  const cactusRect = cactus.element.getBoundingClientRect();

  return !(
    dinoRect.right < cactusRect.left ||
    dinoRect.left > cactusRect.right ||
    dinoRect.bottom < cactusRect.top ||
    dinoRect.top > cactusRect.bottom
  );
}
