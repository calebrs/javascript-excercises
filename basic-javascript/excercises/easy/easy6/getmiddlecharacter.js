/*
Problem:
input: a string 
output: the middle character if the strings length is odd and the two middle characters if the stirng is even

Examples: see code


Algorithm:
declare middle char empty

if the length is odd:
  create middle char = index: length / 2 rounded down 
if it's even:
  create middle char = (length / 2) and (length / 2) - 1

return the middle chars

*/
function centerOf(string) {
  let middleChars = '';

  if (string.length % 2 !== 0) {
    middleChars = string[Math.floor(string.length / 2)];
  } else {
    middleChars = string.slice((string.length / 2) - 1, (string.length / 2) + 1);
  }
  
  return middleChars;
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"