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

function ifGameEnded() {
  if (gameStarted == true && roundCounter == 5) {
    gameStarted = false;
    commandOutput = `The game has ended. Type 'rps new' to start a new game.`;
  } else if (gameStarted == false && roundCounter < 5) {
    commandOutput = `The game hasn't started yet. Type 'rps new' to begin.`;
  }
}

function roundResult() {
  switch (true) {
    case command == "rps rock" && computerChoice == "scissors":
      break;
  }
  commandOutput = `Round ${roundCounter} result: It's a tie. You chose: Rock, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
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
          case "rock":
            commandOutput = `Round ${roundCounter} result: It's a tie. You chose: Rock, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
            break;
          case "paper":
            computerScore++;
            commandOutput = `Round ${roundCounter} result: You lost. You chose: Rock, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
            break;
          case "scissors":
            humanScore++;
            commandOutput = `Round ${roundCounter} result: You won! You chose: Rock, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
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
          case "paper":
            commandOutput = `Round ${roundCounter} result: It's a tie. You chose: Paper, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
            break;
          case "rock":
            humanScore++;
            commandOutput = `Round ${roundCounter} result: You won! You chose: Paper, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
            break;
          case "scissors":
            computerScore++;
            commandOutput = `Round ${roundCounter} result: You lost. You chose: Paper, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
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
          case "scissors":
            commandOutput = `Round ${roundCounter} result: It's a tie. You chose: Scissors, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
            break;
          case "rock":
            computerScore++;
            commandOutput = `Round ${roundCounter} result: You lost. You chose: Scissors, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
            break;
          case "paper":
            humanScore++;
            commandOutput = `Round ${roundCounter} result: You won! You chose: Scissors, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
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
    computerChoice = "rock";
  } else if (randomNumber == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}
