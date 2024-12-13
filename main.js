const commandLine = document.querySelector(".command-line");
const initialInput = document.querySelector("#initialInput");
let userInput = initialInput;
let command = "";
let commandResult = "";

initialInput.addEventListener("keyup", addNewLines);

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
    output.textContent = commandResult;
    prompt.textContent = "user:~/rock-paper-scissors$";

    inputSection.appendChild(output);
    inputSection.appendChild(promptSection);
    promptSection.appendChild(prompt);
    promptSection.appendChild(input);
    commandLine.appendChild(inputSection);
  }

  // input.addEventListener("keyup", addNewLines);
}

function runCommands(cmd) {
  switch (cmd) {
    case "rps --help":
      commandResult = `
      rps score = returns the current score\n
      rps rock/paper/scissors = chooses weapon\n
      rps new = starts a new game with reset score\n
      rps --help = returns a list of the available commands\n
      rps clear = clears the screen if too messy\n
      `;
      break;
    case "rps new":
      commandResult = `Game has restarted.`;
      break;
    case "rps clear":
      commandResult = `Clear the screen without resetting the score`;
      break;
  }
}
