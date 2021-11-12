/*
Problem:
input: Get use input, a length and width
output: the area of the room in meters and feet logged to the console

Examples:
=> What is the width? 
50
=> What is the length?
20

output: the answer is...

Data Structures:
string variables to hold the user input
the readline object
product operator

Algorithm:
get the readline object
ask for the width and save to a variable
ask for the length and save to a variable

times the length and width for the meters answer, save to a variable
times the meters by the conversion factor for the feet area

log to the conosle the two answers using template literal
*/
const readline = require("readline-sync");

console.log("What is the width?");
let width = Number(readline.question());

console.log("What is the length?");
let length = Number(readline.question());

let areaMeters = (width * length).toFixed(2);
let areaFeet = (areaMeters * 10.7639).toFixed(2);

console.log(`The area in meters is: ${areaMeters}. The area in feet is: ${areaFeet}`);
