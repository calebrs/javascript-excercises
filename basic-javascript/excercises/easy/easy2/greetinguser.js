/*
Problem:
input: user input, user's name
output: a greeting to the user.
rules: if the last character is an '!' then caps the greeting


Examples:
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?


Data Structures: 
readline object
save name to a string
strings as console outputs 



Algorithm:
require the readline object

ask for the user's name
save users name to name variable
save the greeting to a variable in lower caps with the name.

if the last cahracter is a '!' then caps the greeting
if it's not then log the greeting normally

*/
const readline = require("readline-sync");

let name = readline.question('What is your name? ');

if (name.slice(-1) === '!') {
  name = name.slice(0, name.length - 1);
  console.log("HELLO " + name.toUpperCase() + '. WHY ARE WE SCREAMING?');
} else {
  console.log('Hello ' + name);
}

