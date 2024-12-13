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
      commandOutput = `Here is your new game.`;
      break;
    case "rps score":
      commandOutput = `The score is -- You: 0, Computer: 0`;
      break;
    case "rps clear":
      commandOutput = `Clear the screen without resetting the score`;
      break;
    case "rps rock":
      commandOutput = `You have chosen rock. The computer chose...`;
      break;
    case "rps paper":
      commandOutput = `You have chosen paper. The computer chose...`;
      break;
    case "rps scissors":
      commandOutput = `You have chosen scissors. The computer chose...`;
      break;
    default:
      commandOutput = `Please enter a valid command.`;
      break;
  }
}
