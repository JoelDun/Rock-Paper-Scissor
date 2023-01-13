
function getComputerChoice (input) {
  let computerSelection = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
  return computerSelection
}




function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper"){
    return "You lose! Paper beats rock!"
  }
  if (playerSelection == "paper" && computerSelection == "scissors"){
    return "You lose! Scissors beats paper!"
  }
  if (playerSelection == "scissors" && computerSelection == "rock"){
    return "You lose! Rock beats scissors!"
  }

  if (playerSelection == "rock" && computerSelection == "scissors"){
    return "You win! Rock beats scissors!"
  }
  if (playerSelection == "paper" && computerSelection == "rock"){
    return "You win! Paper beats rock!"
  }
  if (playerSelection == "scissors" && computerSelection == "paper"){
    return "You win! Scissors beats paper!"
  }
}

const possibleChoices = ["rock", "paper", "scissors"];

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playerSelection)
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));
