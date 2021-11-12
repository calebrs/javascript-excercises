/*
Problem:
input: string argument
output: new string with all duplicates collapsed into a single character


Examples: SEE CODE


Data Structures:
iteration mechanism
conditional to check if a letter is a repeat
strings inputs and outputs

Algorithm:
create new sting
iterate through the string
  if the current char does not equal the next char, add it to the newstring
  
return the new string

*/

function crunch(string) {
  let crunchedString = '';
  
  for (let indx = 0; indx < string.length; indx += 1) {
    if (string[indx] !== string[indx + 1]) {
      crunchedString += string[indx];
    }
  }
  
  return crunchedString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""