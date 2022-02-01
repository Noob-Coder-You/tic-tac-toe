let chance = "X";
const cell = document.querySelectorAll(".cell");
const showWinner = document.querySelector(".popup");
const winnerName = document.querySelector(".winner");
const restartBtn = document.querySelector(".game--restart");
const checkTied = [];
document.addEventListener("click", (e) => {
  let playedNum = e.target.dataset.cellIndex;
  if (playedNum) {
    playTurn(e.target);
  }
});

function playTurn(cell) {
  if (chance === "X") {
    cell.innerText = "X";
    checkTied.push(1);

    checkWinner();
    chance = "O";
  } else {
    cell.innerText = "O";
    checkTied.push(1);

    checkWinner();
    chance = "X";
  }
}
function checkWinner() {
  if (
    cell[0].innerText.length > 0 &&
    cell[0].innerText === cell[1].innerText &&
    cell[1].innerText === cell[2].innerText
  ) {
    showResult(cell[0].innerText);
  } else if (
    cell[3].innerText.length > 0 &&
    cell[3].innerText === cell[4].innerText &&
    cell[4].innerText === cell[5].innerText
  ) {
    showResult(cell[3].innerText);
  } else if (
    cell[1].innerText.length > 0 &&
    cell[1].innerText === cell[4].innerText &&
    cell[4].innerText === cell[7].innerText
  ) {
    showResult(cell[1].innerText);
  } else if (
    cell[2].innerText.length > 0 &&
    cell[2].innerText === cell[5].innerText &&
    cell[5].innerText === cell[8].innerText
  ) {
    showResult(cell[2].innerText);
  } else if (
    cell[3].innerText.length > 0 &&
    cell[3].innerText === cell[4].innerText &&
    cell[4].innerText === cell[5].innerText
  ) {
    showResult(cell[3].innerText);
  } else if (
    cell[6].innerText.length > 0 &&
    cell[6].innerText === cell[7].innerText &&
    cell[7].innerText === cell[8].innerText
  ) {
    showResult(cell[6].innerText);
  } else if (
    cell[6].innerText.length > 0 &&
    cell[6].innerText === cell[4].innerText &&
    cell[4].innerText === cell[2].innerText
  ) {
    showResult(cell[6].innerText);
  } else if (
    cell[0].innerText.length > 0 &&
    cell[0].innerText === cell[4].innerText &&
    cell[4].innerText === cell[8].innerText
  ) {
    showResult(cell[0].innerText);
  } else if (
    cell[0].innerText.length > 0 &&
    cell[0].innerText === cell[3].innerText &&
    cell[3].innerText === cell[6].innerText
  ) {
    showResult(cell[0].innerText);
  } else if (checkTied.length === 9) {
    showResult("Tied");
  }
}

function showResult(winner) {
  winnerName.innerText = `Winner Is: ${winner}`;
  showWinner.classList.remove("remove");
}

restartBtn.addEventListener("click", () => {
  cell.forEach((cell) => {
    cell.innerHTML = "";
    chance = "X";
    showWinner.classList.add("remove");
    checkTied.length = 0;
  });
});
