const commandLine = document.querySelector(".command-line");
const initialInput = document.querySelector("#initialInput");
let userInput = initialInput;
const commands = [];

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

    //styling
    inputSection.setAttribute("style", "display");

    //adding content
    output.textContent = runCommands(commands.at(-1));
    prompt.textContent = "user:~/rock-paper-scissors$";

    inputSection.appendChild(output);
    inputSection.appendChild(promptSection);
    promptSection.appendChild(prompt);
    promptSection.appendChild(input);
    commandLine.appendChild(inputSection);
  }
}

function runCommands(cmd) {
  switch (cmd) {
    case "rps --help":
      console.log("this worked yo");
      break;
    case "rps rock":
      console.log("rocks");
      break;
  }
}
