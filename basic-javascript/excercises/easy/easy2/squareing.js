/*
Problem:
input: one argument
output: the square of the number
rules: use the multiply function

Exmaples: SEE cODE


Data Structures:
numbers
multiply function

Algorithm:


*/
function square(number) {
  return multiply(number, number);
}

function multiply(num1,  num2) {
  return num1 * num2;
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true