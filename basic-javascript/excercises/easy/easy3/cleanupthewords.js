/*
Problem:
input: string of any kinds of characters
output: all the non alphabetic characters replaced with spaces
no consecutive spaces

Examples: see code


Data:
strings
string iteration

Algorithm:
create empyt new string

start to iterate through the string
  on each character check whethor or not the char is a alphanumareic character.
  if it is add it to eh new string
  if the char is not alphanumeric and the last index of the newstring is not a space
  add a space to the end of the string

return the new string

*/
function cleanUp(string) {
  let newString = '';
  
  for (let indx = 0; indx < string.length; indx += 1) {
    if (isAlphabetic(string[indx])) {
      newString += string[indx];
    } else if (newString[newString.length - 1] !== ' ') {
      newString += ' ';
    }
  }
  
  return newString;
}

function isAlphabetic(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "