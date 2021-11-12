/*
Problem:
input: get user input, an integer greater than 0. Ask if the user wants sum or product
output: the sum or product of all the integers between 1 and the input itenger

Examples:
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.


Data Structures:
input: string, converted to a number
output: string stating the projct or sum
looping mechanism, starting from 1 to the input integer


Algorithm:
get readline

ask user for integer
assigne integer to a variable convert to number

ask user for product or sum: 's' or 'p'
assign answer to a variable

decarel total variable

conditional:
start loop - loop integer times starting at one, end on the itneger(includisve)
for each iteration if input is addition
  add the current tumber to total
  if input is product 
  times the current number and set equal tot he total

log to the console the answer
  

*/

const readline = require("readline-sync");

console.log('=> Please enter an integer greater than 0: ');
let integer = Number(readline.question());

console.log('=> Enter "s" to compute the sum, or "p" to compute the product. ');
let sumOrProduct = readline.question();

let total = sumOrProduct === 's' ? 0 : 1;

if (sumOrProduct === 's') {
  for (let iteration = 1; iteration <= integer; iteration += 1) {
    total += iteration;
  }
  console.log(`The sum of the inegers between 1 and ${integer} is ${total}`);
} else if (sumOrProduct === 'p') {
  for (let iteration = 1; iteration <= integer; iteration += 1) {
    total *= iteration;
  }
  console.log(`The product of the inegers between 1 and ${integer} is ${total}`);
}
