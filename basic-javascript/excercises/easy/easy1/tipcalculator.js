/*
Problem:
input: get bill amount and tip rate from the user.
output: log the tip amount and the bill amount to the console
ignore invalid input

Examples: 
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00


Data Structures:
input as string => convert to numbers
bill amount: number
tip rate as percent: number - change tip from percent to normal number X.01
total amount = tiprate * bill amount + bill amount
output as a string - use template literal


Algorithm:
get readline
get user input, assign to bill variable
get user input, assign to tip percent variable

get the total by: tiprate * bill amount + bill amount: assign to variable

log to the console the answeras a string


*/

const readline = require("readline-sync");

console.log('=> How much is the bill? ');
let bill = Number(readline.question());

console.log('=> What is the tip percentage? ');
let tipPercentage = Number((readline.question())) * .01;

let tipAmount = (tipPercentage * bill);
let total = bill + tipAmount;

console.log(typeof tipAmount);
console.log('The tip is $' + tipAmount.toFixed(2));
console.log('The total is $' + total.toFixed(2));