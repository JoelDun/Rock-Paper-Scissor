
function getComputerChoice () {
  let computerSelection = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
  return computerSelection
}

const possibleChoices = ["rock", "paper", "scissors"];

function playRound (playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose! Paper beats rock!"
  }
  if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose! Scissors beats paper!"
   }
  if (playerSelection == "scissors" && computerSelection == "rock" ) {
    return "You lose! Rock beats scissors!"
  }
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats scissors!"
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats rock!"
  }
  if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beats paper!"
  }
  else {
    return "Draw!"
  }
}

function game () {
 let winCount = 0;
 let loseCount = 0;
 
  for (let i = 0; i < 5; i++) {
    let playerSelection = "rock";
    let computerSelection = getComputerChoice;
    let result = playRound(playerSelection, computerSelection(i))
    console.log(result)
  }
  
}

console.log(game())