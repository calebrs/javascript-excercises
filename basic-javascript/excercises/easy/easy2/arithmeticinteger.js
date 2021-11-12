/*
Problem:
input: user input, two integers. The operation type
output: The two input integers evaluated using all the operations
operations are * + - / % and **

Examples: 
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 141050039560662968926103




Data Structures
all of the operators mentioned in the RULES
numbers as inputs. Converted from the string user inputs
number as output rounded to the second decimal place


Algorithm:
get the readline object

prompt user for first number
set number to num1 variable, convert to number

prompt user for second number
set number to num2 variable, convert to number

log the answers to the console

*/
const readline = require("readline-sync");

let num1 = Number(readline.question("==> Enter the first number: "));
let num2 = Number(readline.question("==> Enter the second number: "));

console.log(`${num1} + ${num2} = ` + num1 + num2);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ` + num1 * num2);
console.log(`${num1} / ${num2} = ` + (num1 / num2).toFixed(2));
console.log(`${num1} % ${num2} = ` + num1 % num2);
console.log(`${num1} ** ${num2} = ` + (num1 ** num2));

