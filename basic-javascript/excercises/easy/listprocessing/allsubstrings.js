/*
Problem:
input: a string 
output: all substrings of a string in an array

Examples:
see code

Algorithm;
create result array

iterate through the input string length times
  create a subarray starting at the current index and ending at the end
  on each iteration concatenate the return value of the leadingsubstring method with the subarray as an argument
  
return the result array

*/
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


console.log(substrings('abcde'));

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/