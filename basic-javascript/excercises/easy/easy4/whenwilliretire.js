/*
problem:
input: the age of the user. what age the user will retire. the current year
output: the year the the user will retire
rules:
get the year from date object


Examples:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

Data:
the current year
the user input age to retire
the user age
get years left: current age minus retirment age
get the year they will retire: current year plus (current age mius retirment year)



Algorithm:
get readline

get user inputs

get the yearsleft
get the year they will retire

log the answer to the console

*/
const readline = require("readline-sync");

let userAge = readline.question("What is your age? ");
let retireAge = readline.question("At what age would you like to retire? ");
let yearsLeft = retireAge - userAge;
let retireYear = yearsLeft + 2020;

console.log(`It's 2020. You will retire in ${retireYear}. You have only ${yearsLeft} years of work to go!`)