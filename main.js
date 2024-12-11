const commandLine = document.querySelector(".command-line");

function runUserCommand() {
  const createNewLine = function (e) {
    if (e.key == "Enter") {
      const inputSection = document.createElement("div");
      const prompt = document.createElement("p");
      const userInput = document.createElement("input");

      userInput.setAttribute("type", "text");

      inputSection.setAttribute(
        "style",
        "display: flex; gap: 10px; align-items: center;"
      );
      prompt.textContent = "user:~/rock-paper-scissors$";
      prompt.setAttribute("style", "flex: 0 0 auto;");

      userInput.setAttribute("style", "flex: 1 1 auto;");

      inputSection.appendChild(prompt);
      inputSection.appendChild(userInput);
      commandLine.appendChild(inputSection);

      userInput.focus();

      userInput.addEventListener("keydown", createNewLine);
    }
  };

  const initialInput = document.querySelector(".initialInput");

  initialInput.addEventListener("keydown", createNewLine);
}

runUserCommand();
