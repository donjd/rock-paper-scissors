let computerAnswer = "";
let userInput = "";
let userScore = 0;
let computerScore = 0;

function getUserInput() {
  userInput = prompt("Choose rock, paper, or scissors");
}

function getComputerAnswer() {
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

function getWinner() {
  let roundResult = `You: ${userInput}, Computer: ${computerAnswer}`;
  let totalScore = `You: ${userScore}, Computer: ${computerScore}`;

  if (userInput == "rock" && computerAnswer == "paper") {
    computerScore++;
    alert(`you lost. Round Result: ${roundResult}, Total Score: ${totalScore}`);
  } else if (userInput == "rock" && computerAnswer == "scissors") {
    userScore++;
    alert(`you won! Round Result: ${roundResult}, Total Score: ${totalScore}`);
  } else if (userInput == "paper" && computerAnswer == "rock") {
    userScore++;
    alert(`you won! Round Result: ${roundResult}, Total Score: ${totalScore}`);
  } else if (userInput == "paper" && computerAnswer == "scissors") {
    computerScore++;
    alert(`you lost. Round Result: ${roundResult}, Total Score: ${totalScore}`);
  } else if (userInput == "scissors" && computerAnswer == "rock") {
    computerScore++;
    alert(`you lost. Round Result: ${roundResult}, Total Score: ${totalScore}`);
  } else if (userInput == "scissors" && computerAnswer == "paper") {
    userScore++;
    alert(`you won! Round Result: ${roundResult}, Total Score: ${totalScore}`);
  } else if (userInput == computerAnswer) {
    alert(
      `It's a tie, go again! Round Result: ${roundResult}, Total Score: ${totalScore}`
    );
  }
}

for (i = 0; i < 10; i++) {
  getUserInput();
  getComputerAnswer();
  getWinner();
}
