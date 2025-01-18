let board;
let boardWidth = 750;
let boardHeight = 250;
let context;

let dinoWidth = 88;
let dinoHeight = 94;
let dinoX = 50;
let dinoY = boardHeight - dinoHeight;
let dinoImg;

let dino = {
  x: dinoX,
  y: dinoY,
  width: dinoWidth,
  height: dinoHeight,
};
let cactusArray = [];

let cactus1Width = 34;
let cactus2Width = 69;
let cactus3Width = 102;

let cactusHeight = 70;
let cactusX = 700;
let cactusY = boardHeight - cactusHeight;

let cactus1Img;
let cactus2Img;
let cactus3Img;

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
  board.height = boardHeight;
  board.width = boardWidth;

  context = board.getContext('2d');

  dinoImg = new Image();
  dinoImg.src = './images/dinosaur/dino.png';

  cactus1Img = new Image();
  cactus1Img.src = './images/dinosaur/cactus1.png';

  cactus2Img = new Image();
  cactus2Img.src = './images/dinosaur/cactus2.png';

  cactus3Img = new Image();
  cactus3Img.src = './images/dinosaur/cactus3.png';

  document.addEventListener('keydown', moveDino);
};

function startGame() {
  document.getElementById('startBtn').style.display = 'none';
  gameStarted = true;
  gameOver = false;
  score = 0;
  cactusArray = [];
  velocityY = 0;

  requestAnimationFrame(update);
  setInterval(placeCactus, 1000);
}

function update() {
  if (!gameStarted || gameOver) {
    return;
  }
  requestAnimationFrame(update);

  context.clearRect(0, 0, board.width, board.height);

  velocityY += gravity;
  dino.y = Math.min(dino.y + velocityY, dinoY);
  context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

  for (let i = 0; i < cactusArray.length; i++) {
    let cactus = cactusArray[i];
    cactus.x += velocityX;
    context.drawImage(
      cactus.img,
      cactus.x,
      cactus.y,
      cactus.width,
      cactus.height
    );

    if (detectCollision(dino, cactus)) {
      gameOver = true;
      gameStarted = false;
      dinoImg.src = './images/dinosaur/dino-dead.png';
      dinoImg.onload = function () {
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
      };
      alert('Гру завершено! Ваш рахунок: ' + score);
      return;
    }
  }

  context.fillStyle = 'black';
  context.font = '20px courier';
  score++;
  context.fillText(score, 5, 20);
}

function moveDino(e) {
  if (gameOver || !gameStarted) {
    return;
  }

  if ((e.code == 'Space' || e.code == 'ArrowUp') && dino.y == dinoY) {
    velocityY = -10;
  }
}

function placeCactus() {
  if (!gameStarted || gameOver) {
    return;
  }

  let cactus = {
    img: null,
    x: cactusX,
    y: cactusY,
    width: null,
    height: cactusHeight,
  };

  let placeCactusChance = Math.random();

  if (placeCactusChance > 0.9) {
    cactus.img = cactus3Img;
    cactus.width = cactus3Width;
    cactusArray.push(cactus);
  } else if (placeCactusChance > 0.7) {
    cactus.img = cactus2Img;
    cactus.width = cactus2Width;
    cactusArray.push(cactus);
  } else if (placeCactusChance > 0.5) {
    cactus.img = cactus1Img;
    cactus.width = cactus1Width;
    cactusArray.push(cactus);
  }

  if (cactusArray.length > 5) {
    cactusArray.shift();
  }
}

function detectCollision(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}
