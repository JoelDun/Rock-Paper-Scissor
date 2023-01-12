function getComputerChoice ([input]) {
  let computerSelection = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
  return computerSelection
}

const possibleChoices = ["Rock", "Paper", "Scissors"];





console.log(getComputerChoice(possibleChoices))









// function playRound(playerSelection, computerSelection) {
 
// }
 
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));