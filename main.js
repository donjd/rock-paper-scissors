const commandLine = document.querySelector(".command-line");

let command = "";
let commandOutput = "";

//Event delegation
commandLine.addEventListener("keyup", addNewLine);

function addNewLine(e) {
  if (e.key == "Enter") {
    const inputSection = document.createElement("div");
    inputSection.classList.add("inputSection");

    const output = document.createElement("p");
    output.classList.add("output");

    const promptSection = document.createElement("div");
    promptSection.classList.add("promptSection");

    const prompt = document.createElement("p");
    prompt.classList.add("prompt");
    const input = document.createElement("input");
    input.classList.add("input");
    input.setAttribute("type", "text");
    input.setAttribute("autocomplete", "off");

    //adding content
    command = e.target.value;
    runCommands(command);
    output.textContent = commandOutput;
    prompt.textContent = "user:~/rock-paper-scissors$";

    inputSection.appendChild(output);
    inputSection.appendChild(promptSection);
    promptSection.appendChild(prompt);
    promptSection.appendChild(input);
    commandLine.appendChild(inputSection);

    input.focus();

    //another way to do this last part would be to get rid of event delegation,
    //set the initial eventListener to the initial-input ID,
    //add a const called latestInput, focus that, removeEventListener
    //from e.target, and add a new eventListener to latestInput. I have a feeling
    //though that removing the event listener AND disabling the element
    // would be better so that the user isn't as easily able to go into the
    //html file and change disabled to false.
    e.target.setAttribute("disabled", "true");
  }
}

//game code
let computerChoice = "";

let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
let gameStarted = false;
// let roundResult = "";

function ifGameEnded() {
  if (gameStarted == true && roundCounter == 5) {
    gameStarted = false;
    commandOutput = `The game has ended. Type 'rps new' to start a new game.`;
  } else if (gameStarted == false && roundCounter < 5) {
    commandOutput = `The game hasn't started yet. Type 'rps new' to begin.`;
  }
}

function showRoundResultMessage(roundResult) {
  let choice = "";

  function showGameResultMessage() {
    if (humanScore > computerScore) {
      commandOutput = `The game is over and you won! You chose: ${choice}, Computer chose: ${computerChoice}. The final score was ${humanScore} : ${computerScore}`;
    } else if (humanScore < computerScore) {
      commandOutput = `The game is over and you lost. You chose: ${choice}, Computer chose: ${computerChoice}. The final score was ${humanScore} : ${computerScore}`;
    } else {
      commandOutput = `The game is over and it was a tie. You chose: ${choice}, Computer chose: ${computerChoice}. The final score was ${humanScore} : ${computerScore}`;
    }
  }

  switch (command) {
    case "rps rock":
      choice = "Rock";
      break;
    case "rps paper":
      choice = "Paper";
      break;
    case "rps scissors":
      choice = "Scissors";
      break;
  }
  switch (roundResult) {
    case "won":
      if (roundCounter == 5) {
        showGameResultMessage();
      } else {
        commandOutput = `Round ${roundCounter} result: You won! You chose: ${choice}, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
      }
      break;
    case "lost":
      if (roundCounter == 5) {
        showGameResultMessage();
      } else {
        commandOutput = `Round ${roundCounter} result: You lost. You chose: ${choice}, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
      }
      break;
    case "tied":
      if (roundCounter == 5) {
        showGameResultMessage();
      } else {
        commandOutput = `Round ${roundCounter} result: It was a tie. You chose: ${choice}, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
      }
      break;
  }
}

function runCommands(cmd) {
  switch (cmd) {
    case "rps --help":
      commandOutput = `
      rps new = starts a new game with reset score;
      rps score = returns the current score;
      rps rock/paper/scissors = chooses weapon;
      rps --help = returns a list of the available commands;
      `;
      break;
    case "rps new":
      roundCounter = 0;
      humanScore = 0;
      computerScore = 0;
      gameStarted = true;
      commandOutput = `A new game has started. Choose your weapon.`;
      break;
    case "rps score":
      commandOutput = `Your Score: ${humanScore}, Computer Score: ${computerScore}`;
      break;
    case "rps rock":
      ifGameEnded();
      getComputerChoice();
      if (gameStarted == true && roundCounter < 5) {
        roundCounter++;
        switch (computerChoice) {
          case "Rock":
            showRoundResultMessage("tied");
            break;
          case "Paper":
            computerScore++;
            showRoundResultMessage("lost");
            break;
          case "Scissors":
            humanScore++;
            showRoundResultMessage("won");
            break;
        }
      }

      break;
    case "rps paper":
      ifGameEnded();
      getComputerChoice();
      if (gameStarted == true && roundCounter < 5) {
        roundCounter++;
        switch (computerChoice) {
          case "Rock":
            humanScore++;
            showRoundResultMessage("won");
            break;
          case "Paper":
            showRoundResultMessage("tied");
            break;
          case "Scissors":
            computerScore++;
            showRoundResultMessage("lost");
            break;
        }
      }
      break;
    case "rps scissors":
      ifGameEnded();
      getComputerChoice();
      if (gameStarted == true && roundCounter < 5) {
        roundCounter++;
        switch (computerChoice) {
          case "Rock":
            computerScore++;
            showRoundResultMessage("lost");
            break;
          case "Paper":
            humanScore++;
            showRoundResultMessage("won");
            break;
          case "Scissors":
            showRoundResultMessage("tied");
            break;
        }
      }
      break;
    default:
      commandOutput = `Please enter a valid command.`;
      break;
  }
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    computerChoice = "Rock";
  } else if (randomNumber == 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}
