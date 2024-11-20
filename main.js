let tries = 0;
let userInput = prompt("Choose rock, paper, or scissors").toLowerCase;
let computerAnswer;

function generateRockPaperScissors() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    computerAnswer = "rock";
  } else if (randomNumber == 2) {
    computerAnswer = "paper";
  } else {
    computerAnswer = "scissors";
  }
  return computerAnswer;
}

generateRockPaperScissors();

if (userInput == computerAnswer) {
  tries += 1;
}
console.log(tries);
