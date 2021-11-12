/*
Problem:
input: a string
output: true or false, on whethor or not the input sring is a palindome
palidrome is a word that is spelled the same front and back

Example:
see code

Data:


Algorithm:

*/
function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}


console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true