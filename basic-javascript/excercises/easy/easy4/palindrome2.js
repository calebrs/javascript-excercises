/*
Problem:


Examples:


Algorithm:
create new string
iterate through the string
  on each iteration check if the char is alphanumeric, or a number
  if it is add it to the new string

run the is palindromr method on te newstring

*/

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {
  let newString = '';
  let lowerCaseString = string.toLowerCase();
  
  for (let indx = 0; indx < string.length; indx += 1) {
    if (isAlphanumeric(lowerCaseString[indx])) {
      newString += lowerCaseString[indx];
    }
  }
  
  return isPalindrome(newString);
}

function isAlphanumeric(char) {
  return (char >= 'a' && char <= 'z') ||
         (char >= '0' && char <= '9');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false