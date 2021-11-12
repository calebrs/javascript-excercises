let rlSync = require('readline-sync');

function multiply(num1, num2) {
  return num1 * num2;
}

let input1 = rlSync.question("Enter the first number to multiply: ");
let input2 = rlSync.question("Enter the second number to multiply: ");
console.log(`${input1} * ${input2} = ${multiply(input1, input2)}`);