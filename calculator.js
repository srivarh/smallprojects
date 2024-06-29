// toggle between darkmode and whitemode
const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}


// calculator javascript code



// select all the buttons into the variable buttons
const buttons = document.querySelectorAll("button");
//select the input into inputField
const inputField = document.getElementById("result");
//iteration of buttons
for (let i = 0; i < buttons.length; i++) {
    //adding eventlistener
  buttons[i].addEventListener("click", () => {
    const buttonValue = buttons[i].textContent;
    //conditions for execution
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } 
    
    else {
      appendValue(buttonValue);
    }
  });
}
///function to clear the result
function clearResult() {
  inputField.value = "";
}
//functionto calculate the result
function calculateResult() {
  inputField.value = eval(inputField.value);
}
//function to append value to input feild
function appendValue(buttonValue) {
  inputField.value += buttonValue;
}


