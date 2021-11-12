/*
Problem:
input: a string  
output: an array of all the paindormic substrings of the input string

Examples:


Algorithm:
get all the substrings from the string by using the substrings method
create palindrome array

loop through all the substrings
  on each iteration if the current string split, reversed, then joined, equals the string
  psush the string to a new array

  return the palindrom array

*/
function palindromes(string) {
  let subStrings = substrings(string);
  let palindromes = [];

  for (let indx = 0; indx < subStrings.length; indx += 1) {
    let currentElem = subStrings[indx];
    if (isPalindrome(currentElem) && currentElem.length > 1) {
      palindromes.push(currentElem);
    }
  }

  return palindromes;
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function substrings(string) {
  let result = [];

  for (let indx = 0; indx < string.length; indx += 1) {
    let subArray = string.slice(indx);
    let leadingSubs = leadingSubstrings(subArray);
    result = result.concat(leadingSubs);
  }

  return result;
}

function leadingSubstrings(string) {
  let resultArray = [];
  for (let indx = 0; indx < string.length; indx += 1) {
    resultArray.push(string.slice(0, indx + 1));
  }
  return resultArray;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]