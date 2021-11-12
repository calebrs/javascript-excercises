/*
Problem:
input: a string
output: a new string, with every number doubled

Examples:


Algorithm:
declare new empty string

iterate through the input string
  on each char add two of them to the empty string

return the string

*/
function repeater(string) {
  let newString = '';

  for (let indx = 0; indx < string.length; indx += 1) {
    if (isConsonant(string[indx])) {
      newString += string[indx] + string[indx];
    } else {
      newString += string[indx];
    }
    
  }

  return newString;
}

function isConsonant(char) {
  let lowerCaseChar = char.toLowerCase();
  return !'aeiou'.includes(lowerCaseChar) &&
  (lowerCaseChar >= 'a' && lowerCaseChar <= 'z' ||
  lowerCaseChar >= 'A' && lowerCaseChar <= 'Z'); 
}


console.log(repeater('String'));        // "HHeelllloo"
console.log(repeater('July 4th'));    // "July 4th"
console.log(repeater(''));             // ""