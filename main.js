const commandLine = document.querySelector(".command-line");

let command = "";
let commandOutput = "";

//Event delegation
commandLine.addEventListener("keyup", addNewLines);

function addNewLines(e) {
  if (e.key == "Enter") {
    //output parent
    const inputSection = document.createElement("div");
    inputSection.classList.add("inputSection");

    //output children
    const output = document.createElement("p");
    output.classList.add("output");

    //prompt section parent
    const promptSection = document.createElement("div");
    promptSection.classList.add("promptSection");

    //prompt section children
    const prompt = document.createElement("p");
    prompt.classList.add("prompt");
    const input = document.createElement("input");
    input.classList.add("input");
    input.setAttribute("type", "text");
    input.setAttribute("autocomplete", "off");

    //styling
    inputSection.setAttribute("style", "display");

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
  }
}

//game code
let computerChoice = "";

let humanScore = 0;
let computerScore = 0;

function runCommands(cmd) {
  switch (cmd) {
    case "rps --help":
      commandOutput = `
      rps new = starts a new game with reset score;
      rps score = returns the current score;
      rps rock/paper/scissors = chooses weapon;
      rps --help = returns a list of the available commands;
      rps clear = clears the screen but does not reset game;
      `;
      break;
    case "rps new":
      playGame();
      commandOutput = `A new game has started.`;
      break;
    case "rps score":
      commandOutput = `Your Score: ${humanScore}, Computer Score: ${computerScore}`;
      break;
    case "rps clear":
      commandOutput = `Clear the screen without resetting the score`;
      break;
    case "rps rock":
      switch (computerChoice) {
        case "rock":
          commandOutput = `It's a tie! You chose: Rock, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
          break;
        case "paper":
          computerScore++;
          commandOutput = `You lost! You chose: Rock, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
          break;
        case "scissors":
          humanScore++;
          commandOutput = `You won! You chose: Rock, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
          break;
      }
      break;
    case "rps paper":
      switch (computerChoice) {
        case "paper":
          commandOutput = `It's a tie! You chose: Paper, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
          break;
        case "rock":
          humanScore++;
          commandOutput = `You won! You chose: Paper, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
          break;
        case "scissors":
          computerScore++;
          commandOutput = `You lost! You chose: Paper, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
          break;
      }
      break;
    case "rps scissors":
      switch (computerChoice) {
        case "scissors":
          commandOutput = `It's a tie! You chose: Scissors, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
          break;
        case "rock":
          computerScore++;
          commandOutput = `You lost! You chose: Scissors, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
          break;
        case "paper":
          humanScore++;
          commandOutput = `You won! You chose: Scissors, Computer chose: ${computerChoice}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
          break;
        default:
          commandOutput = `Please enter a valid command.`;
      }
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

function playGame() {
  for (i = 0; i < 5; i++) {
    getComputerChoice();
  }
}
