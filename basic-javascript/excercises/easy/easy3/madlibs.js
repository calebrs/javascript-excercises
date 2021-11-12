/*
Problem:
input: get user input for a noun verb adjective and adverb
output: a sentance that uses what the user input

Examples:
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.


Data Strucutures:
user inputs saved as strings

Algorithm:
get the four variables from the user

log the sentence to the console with the user's inputs

*/
const readline = require("readline-sync");

let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adjective = readline.question('Enter a adjective: ');
let adverb = readline.question('Enter a adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb} ${adverb} over the ${adjective} ${noun}.`);
console.log(`The ${noun} ${adverb} ${verb} up ${adjective} Joe's ${noun}.`);