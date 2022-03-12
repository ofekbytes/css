

const addNumberForm = document.querySelector("form");
const inputs = addNumberForm.querySelectorAll("input");
const output = addNumberForm.querySelector("output");

inputs.forEach((input) => {
  input.oninput = outputResult;
});

function outputResult() {
  const numberOne = parseInt(inputs[0].value);
  const numberTwo = parseInt(inputs[1].value);

  const result = numberOne + numberTwo;

  output.innerText = result;
}
