const inputs = document.querySelectorAll(".inputs");

const div = document.querySelector("#colorDiv");

const red = document.getElementById("redValue");
const green = document.getElementById("greenValue");
const blue = document.getElementById("blueValue");

const changeFunction = () => {
  //   console.log(event);
  div.style.backgroundColor = `rgb(${inputs[0].value},${inputs[1].value},${inputs[2].value})`;
  red.innerText = inputs[0].value;
  green.innerText = inputs[1].value;
  blue.innerText = inputs[2].value;
};

changeFunction();

// inputs[0].addEventListener("change", changeFunction);
// inputs[1].addEventListener("change", changeFunction);
// inputs[2].addEventListener("change", changeFunction);

inputs.forEach((input) => {
  input.addEventListener("change", changeFunction);
});
