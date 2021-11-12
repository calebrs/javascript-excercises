/*
Problem:
input: no input
output: a randonmly generated number between 20 and 120 inclusive


Examples:
Teddy is 69 years old!

Data:
math object, radom method
the age:
random (number * 100) + 20 rounded up

Algorithm:

*/

let age = Math.ceil((Math.random() * 100) + 20);

console.log(age);