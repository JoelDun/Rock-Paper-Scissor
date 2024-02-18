const possibleChoices = ["rock", "paper", "scissors"];

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultDisplay = document.getElementById("result");
const reloadButton = document.getElementById("reload");
const gameHistoryList = document.getElementById("game-history-list");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    resultDisplay.textContent = `Draw! Both chose ${playerSelection}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    resultDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    resultDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }

  updateScore();
  checkForGameOver();
  
const historyEntry = document.createElement("li");
historyEntry.textContent = `Round Result: Player chose ${playerSelection}, Computer chose ${computerSelection}. ${resultDisplay.textContent}`;
gameHistoryList.appendChild(historyEntry);

}

function updateScore() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function checkForGameOver() {
  if (playerScore === 5 || computerScore === 5) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    reloadButton.style.display = "block";

    if (playerScore > computerScore) {
      resultDisplay.textContent = `You win the game! Score: ${playerScore}-${computerScore}`;
    } else {
      resultDisplay.textContent = `You lose the game! Score: ${playerScore}-${computerScore}`;
    }
  }
}

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));
reloadButton.addEventListener("click", () => window.location.reload());
