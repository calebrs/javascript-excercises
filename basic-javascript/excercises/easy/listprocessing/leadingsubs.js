/*
Problem:
input: string argument
output: list of all substrings from the beginning of the string ordered from shortest to longest

Examples:
see code

Algorithm:
create result array

iterate through the input string length times
  on each iteration create a substring starting from the 0 index and ending at the index next to the current one


return the result array
*/
function leadingSubstrings(string) {
  let resultArray = [];

  for (let indx = 0; indx < string.length; indx += 1) {
    resultArray.push(string.slice(0, indx + 1));
  }

  return resultArray;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]