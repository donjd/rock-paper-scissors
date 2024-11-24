let humanChoice = "";
let computerChoice = "";

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  humanChoice = prompt("Choose rock, paper, or scissors");
  humanChoice = humanChoice.toLowerCase();
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    computerChoice = "rock";
  } else if (randomNumber == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function playRound() {
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case humanChoice:
          alert(
            `It's a tie! You chose: ${humanChoice}, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`
          );
          break;
        case "paper":
          computerScore++;
          alert(
            `You lost! You chose: ${humanChoice}, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`
          );
          break;
        case "scissors":
          humanScore++;
          alert(
            `You won! You chose: ${humanChoice}, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`
          );
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case humanChoice:
          alert(
            `It's a tie! You chose: ${humanChoice}, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`
          );
          break;
        case "rock":
          humanScore++;
          alert(
            `You won! You chose: ${humanChoice}, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`
          );
          break;
        case "scissors":
          computerScore++;
          alert(
            `You lost! You chose: ${humanChoice}, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`
          );
          break;
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case humanChoice:
          alert(
            `It's a tie! You chose: ${humanChoice}, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`
          );
          break;
        case "rock":
          computerScore++;
          alert(
            `You lost! You chose: ${humanChoice}, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`
          );
          break;
        case "paper":
          humanScore++;
          alert(
            `You won! You chose: ${humanChoice}, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`
          );
          break;
      }
      break;
  }
}

function playGame() {
  for (i = 0; i < 5; i++) {
    getHumanChoice();
    getComputerChoice();
    playRound();
  }

  if (humanScore > computerScore) {
    alert(`You won! The final score was ${humanScore}:${computerScore}`);
  } else if (computerScore > humanScore) {
    alert(`You lost! The final score was ${humanScore}:${computerScore}`);
  } else {
    alert(`You tied! The final score was ${humanScore}:${computerScore}`);
  }
}

playGame();
