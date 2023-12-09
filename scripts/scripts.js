// scripts.js
document.addEventListener("DOMContentLoaded", function () {
/****************** create variables ******************/
// create variables to hold the values for modelName and duration
let modelName = "XYZ";
let duration = 0;

/****************** helper function ******************/
// create a function called recalculate() which will
//   - create a variable to represent the calculated-cost span element.
//     That will look something like:
//        // let costLabel = document.getElementById("calculated-cost");
//   - check the value of the modelName variable, and use that to calculate the new total cost:
//        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
//        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
//   - set the value of the calculated-cost element's innerHTML to this new value
function recalculate() {
  let costLabel = document.getElementById("calculated-cost");
  let newTotalCost = (modelName === "XYZ") ? duration * 100 : duration * 213;
  costLabel.innerHTML = newTotalCost.toFixed(2); // Display cost with two decimal places
}

/****************** model button logic ******************/
// first, create a variable to represent the "Switch Model" pseudo-button
let modelButton = document.getElementById("model-button");
let modelText = document.getElementById("model-text");

// second, create a function called changeModel() which checks the value of the model name variable.
// This function will:
//   - create a variable to represent the model-text span element
//   - if modelName is currently "XYZ", change the value of modelName to "CPRG",
//     and change the innerHTML of the model-text span element to "Model CPRG"
//   - if modelName is currently "CPRG", change the value of modelName to "XYZ",
//     and change the innerHTML of the model-text span element to "Model XYZ"
//   - then, recalculate() the total cost.
console.log(modelButton)
modelButton.addEventListener("click", changeModel);

function changeModel() {
  if (modelName === "XYZ") {
    modelName = "CPRG";
    modelText.innerHTML = "Model CPRG";
  } else {
    modelName = "XYZ";
    modelText.innerHTML = "Model XYZ";
  }
  recalculate();
}

/****************** duration button logic ******************/
// first, create a variable to represent the "Change Duration" pseudo-button.
let durationButton = document.getElementById("duration-button");
let durationText = document.getElementById("duration-text");

// then, create a function called changeDuration() that will
//   - create a variable to represent the duration-text span element
//   - prompt() the user for a new duration
//   - save the result of the prompt() to the duration variable
//   - change the innerHTML of the duration-text span element to this new value
//   - recalculate() the total cost
durationButton.addEventListener("click", changeDuration);

function changeDuration() {
  let newDuration = prompt("Enter new duration:");
  duration = parseFloat(newDuration) || 0; // Ensure duration is a valid number, default to 0 if not
  durationText.innerHTML = duration;
  recalculate();
}

});