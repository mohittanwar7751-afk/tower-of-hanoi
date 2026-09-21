console.log("Tower of Hanoi JavaScript loaded");

let diskCount = 3;
let moveCount = 0;
let selectedTower = null;
let moveHistory = [];


let timerSeconds = 0;
let timerInterval = null;
let gameStarted = false;

let towers = [
  [3, 2, 1],
  [],
  []
];

const towerElements = document.querySelectorAll(".tower");
const moveCountElement = document.getElementById("move-count");
const minimumMovesElement = document.getElementById("minimum-moves");
const bestScoreElement = document.getElementById("best-score");
const messageElement = document.getElementById("message");
const resetButton = document.getElementById("reset-button");
const startButton = document.getElementById("start-button");
const diskCountElement = document.getElementById("disk-count");
const timerElement = document.getElementById("timer");
const winScreen = document.getElementById("win-screen");
const winDisks = document.getElementById("win-disks");
const winMoves = document.getElementById("win-moves");
const winTime = document.getElementById("win-time");
const winMinimum = document.getElementById("win-minimum");
const newBestMessage = document.getElementById("new-best-message");
const playAgainButton = document.getElementById("play-again-button");
const undoButton = document.getElementById("undo-button");



function minimumMoves() {
  return (2 ** diskCount) - 1;
}

function bestScoreKey() {
  return "hanoi-best-" + diskCount;
}

function loadBestScore() {

  const score = localStorage.getItem(bestScoreKey());

  if (score !== null) {
    bestScoreElement.textContent = score;
  } else {
    bestScoreElement.textContent = "Not set";
  }
}

function formatTime(seconds) {

  const minutes =
    Math.floor(seconds / 60);

  const remainingSeconds =
    seconds % 60;

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(remainingSeconds).padStart(2, "0")
  );
}


function startTimer() {

  if (timerInterval !== null) {
    return;
  }

  timerInterval = setInterval(function () {

    timerSeconds++;

    timerElement.textContent =
      formatTime(timerSeconds);

  }, 1000);
}


function stopTimer() {

  if (timerInterval !== null) {

    clearInterval(timerInterval);

    timerInterval = null;
  }
}


function resetTimer() {

  stopTimer();

  timerSeconds = 0;

  timerElement.textContent = "00:00";

  gameStarted = false;
}



function startGame() {

  resetTimer();

  diskCount = Number(diskCountElement.value);

  towers = [
    [],
    [],
    []
  ];

  for (let disk = diskCount; disk >= 1; disk--) {
    towers[0].push(disk);
  }

  moveCount = 0;
  selectedTower = null;
  moveHistory = [];

  moveCountElement.textContent = "0";
  minimumMovesElement.textContent = minimumMoves();

  messageElement.textContent = "";

  loadBestScore();

  drawTowers();
}

function drawTowers() {

  for (let towerNumber = 0; towerNumber < 3; towerNumber++) {

    const tower = towerElements[towerNumber];

    tower.innerHTML = "";

    if (selectedTower === towerNumber) {
      tower.classList.add("selected");
    } else {
      tower.classList.remove("selected");
    }


    // Create rod
    const rod = document.createElement("div");

    rod.className = "rod";

    tower.appendChild(rod);


    // Create disks
    for (
      let position = 0;
      position < towers[towerNumber].length;
      position++
    ) {

      const diskNumber =
        towers[towerNumber][position];

      const disk =
        document.createElement("div");

      disk.className = "disk disk-" + diskNumber;

      // Disk width
      const smallestWidth = 50;
      const largestWidth = 180;

      let diskWidth;

      if (diskCount === 1) {

        diskWidth = largestWidth;

      } else {

        diskWidth =
          smallestWidth +
          ((diskNumber - 1) /
            (diskCount - 1)) *
          (largestWidth - smallestWidth);
      }


      // Direct styling
      disk.style.width =
        diskWidth + "px";

      disk.style.height = "25px";

      disk.style.backgroundColor =
        "red";

      disk.style.borderRadius =
        "6px";

      disk.style.marginTop =
        "3px";

      disk.style.display =
        "block";

      disk.style.position =
        "relative";

      disk.style.zIndex =
        "2";


      tower.appendChild(disk);
    }


    // Tower name
    const label =
      document.createElement("p");

    label.textContent =
      "Tower " + (towerNumber + 1);

    tower.appendChild(label);


  }
}


function moveDisk(from, to) {

  if (towers[from].length === 0) {
    return false;
  }

  const disk = towers[from][towers[from].length - 1];

  const destination =
    towers[to][towers[to].length - 1];

  if (destination !== undefined && disk > destination) {


    alert("You cannot place a larger disk on a smaller disk.");

    return false;


  }

  moveHistory.push({
    from: from,
    to: to,
    disk: disk
  });

  towers[from].pop();

  towers[to].push(disk);

  moveCount++;

  moveCountElement.textContent = moveCount;


  return true;
}

function undoMove() {

  if (moveHistory.length === 0) {
    return;
  }

  // Hide winning screen if it is open
  winScreen.classList.add("hidden");

  const lastMove =
    moveHistory.pop();

  towers[lastMove.to].pop();

  towers[lastMove.from].push(
    lastMove.disk
  );

  moveCount--;

  moveCountElement.textContent =
    moveCount;

  selectedTower = null;

  gameStarted = true;

  startTimer();

  drawTowers();

  messageElement.textContent = "";
}



function showWinScreen() {
  winDisks.textContent = diskCount;
  winMoves.textContent = moveCount;
  winTime.textContent = formatTime(timerSeconds);
  winMinimum.textContent = minimumMoves();


  const bestScore = localStorage.getItem(bestScoreKey());

  if (bestScore && Number(bestScore) === moveCount) {
    newBestMessage.textContent = "⭐ New Best Score!";
  } else {
    newBestMessage.textContent = "🎯 Great Job!";
  }

  winScreen.classList.remove("hidden");


}


function checkWinner() {

  if (towers[2].length !== diskCount) {
    return;
  }

  stopTimer();
  gameStarted = false;

  const oldBest =
    localStorage.getItem(bestScoreKey());

  if (
    oldBest === null ||
    moveCount < Number(oldBest)
  ) {


    localStorage.setItem(
      bestScoreKey(),
      moveCount
    );

    bestScoreElement.textContent =
      moveCount;

    messageElement.textContent =
      "You won in " +
      moveCount +
      " moves — new best score!";


  } else {


    messageElement.textContent =
      "You won in " +
      moveCount +
      " moves!";

  }

  showWinScreen();
}

for (let i = 0; i < towerElements.length; i++) {

  towerElements[i].addEventListener(
    "click",
    function () {

      if (selectedTower === null) {

        if (towers[i].length === 0) {

          alert("This tower has no disks.");

          return;
        }

        selectedTower = i;

        if (!gameStarted) {

          gameStarted = true;

          startTimer();
        }

        drawTowers();

        return;
      }


      if (selectedTower === i) {

        selectedTower = null;

        drawTowers();

        return;
      }


      const successfulMove =
        moveDisk(selectedTower, i);


      selectedTower = null;


      if (successfulMove) {
        drawTowers();
        checkWinner();
      } else {
        drawTowers();
      }
    }


  );
}

startButton.addEventListener(
  "click",
  function () {
    startGame();
  }
);

resetButton.addEventListener(
  "click",
  function () {
    startGame();
  }
);

diskCountElement.addEventListener(
  "change",
  function () {
    startGame();
  }
);

playAgainButton.addEventListener("click", () => {
  winScreen.classList.add("hidden");
  startGame();
});

undoButton.addEventListener(
  "click",
  function () {
    undoMove();
  }
);



startGame();
