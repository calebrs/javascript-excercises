/*
Problem:
input: string
output: the same string, but every other char is lowercase starting with uppercase

Examples:


Algorithm:
split the string into an array
  iterate through the array
  if the char has a even index and is a alphetic
    caps the letter
  otherwise lowcase the letter

join the array to a string
return the string

*/
function staggeredCase(str) {
  let count = 0;
  return str.split('')
    .map((char, indx) => {
      if (count % 2 === 0 && isAlphabetic(char)) {
        count += 1;
        return char.toUpperCase();
      } else if (count % 2 !== 0 && isAlphabetic(char)) {
        count += 1;
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join('');
}

function isAlphabetic(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);