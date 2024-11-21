let computerAnswer;
let userInput;

function getUserInput() {
  userInput = prompt("Choose rock, paper, or scissors");
}

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

getUserInput();
generateRockPaperScissors();

while (userInput == computerAnswer) {
  alert("it's a tie go again!");
  getUserInput();
  generateRockPaperScissors();
}

if (userInput == "rock" && computerAnswer == "paper") {
  alert("you lost");
} else if (userInput == "rock" && computerAnswer == "scissors") {
  alert("you won!");
} else if (userInput == "paper" && computerAnswer == "rock") {
  alert("you won!");
} else if (userInput == "paper" && computerAnswer == "scissors") {
  alert("you lost");
} else if (userInput == "scissors" && computerAnswer == "rock") {
  alert("you lost");
} else if (userInput == "scissors" && computerAnswer == "paper") {
  alert("you won!");
}
