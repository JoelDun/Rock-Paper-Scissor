
function getComputerChoice () {
  let computerSelection = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
  return computerSelection
}

let winCount = 0;
let loseCount = 0;
let drawCount = 0;

const possibleChoices = ["rock", "paper", "scissors"];

function playRound (playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    loseCount++
    return "You lose! Paper beats rock!" 
  }
  if (playerSelection == "paper" && computerSelection == "scissors") {
    loseCount++
    return "You lose! Scissors beats paper!"
   }
  if (playerSelection == "scissors" && computerSelection == "rock" ) {
    loseCount++
    return "You lose! Rock beats scissors!"
  }
  if (playerSelection == "rock" && computerSelection == "scissors") {
    winCount++
    return "You win! Rock beats scissors!"
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    winCount++
    return "You win! Paper beats rock!"
  }
  if (playerSelection == "scissors" && computerSelection == "paper") {
    winCount++
    return "You win! Scissors beats paper!"
  }
  else {
    drawCount++
    return "Draw!"
  }
}

function game () {
  let result = ""
  for (let i = 0; i < 5; i++) {
    let playerSelection = "rock";
    let computerSelection = getComputerChoice;
    result = playRound(playerSelection, computerSelection(i))
  }
  if (winCount > loseCount) {
    return "You win with a score of " + winCount + " to " + loseCount + "!"
  }
  else {
    return "You lose with a score of " + loseCount + " to " + winCount + "!"
  }

}

console.log(game())