/*
Problem:
input: a positive integer
output: a string of alternating 1 and zeros as long as the input
rule: must start with 1

Examples:
see code

Data Structures:


Algorithm:
create an empyt string
start a loop that goes input times
  on each iteration if the iteration is even
  add a 1 to the string
  else
  add a 0 to the string

return the string


*/
function stringy(number) {
  let newString = '';
  
  for (let iteration = 0; iteration < number; iteration += 1) {
    iteration % 2 === 0 ? newString += '1' : newString += '0';
  }
  
  return newString;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"