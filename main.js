const initialInput = document.querySelector(".initialInput");

initialInput.addEventListener("keyup", (e) => {
  if (e.key == "enter") {
    console.log("it worked");
  }
});
