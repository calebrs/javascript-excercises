/*
Problem:
input: string of any length. even 0
output: the summ of all the characters' ASCII values in the string
use the charCodeAt() method

Examples: SEE CODE


Data Structures:
strings
arrays
iteration method to iterat through the string

Algorithm:
split the string into an array
begin iterating through the string. For as long as its length
for each iteration 
  convert the character to ASCII value, save to a value (use charCodeAt())
  add the value to a funning total

return the running total

*/
function asciiValue(string) {
  return string.split('').reduce((accum, char) => accum + char.charCodeAt(0), 0);
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0