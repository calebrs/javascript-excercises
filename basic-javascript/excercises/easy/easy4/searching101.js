/*
Problem:
input: five numbers from the user
output: whethor or not the first number appears in the rest of the numbers

Examples:
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

Data Strucutes:
arrays for checking
number for first number input
include moethod to check array

Algorithm:
include readline
create check array
get input for all six nubmers
save the first number as a variable
save the rest of the numbers into an array
  push them into the array

use the includes method to check if the array has the first number


*/
const readline = require("readline-sync");

let num1 = Number(readline.question('Enter the first number: '));
let num2 = Number(readline.question('Enter the second number: '));
let num3 = Number(readline.question('Enter the third number: '));
let num4 = Number(readline.question('Enter the fourth number: '));
let num5 = Number(readline.question('Enter the fifth number: '));
let num6 = Number(readline.question('Enter the sixth number: '));

let checkArray = [num2, num3, num4, num5, num6];

if (checkArray.includes(num1)) {
  console.log(`The number ${num1} appears in ${checkArray.join(', ')}`);
} else {
  console.log(`The number ${num1} does not appear in ${checkArray.join(', ')}`);
}
