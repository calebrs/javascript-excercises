/*
Problem:
input: an array
output: an array that contains every other element of the input array
rules: 1st, 3rd, 5th elements of an array


Examples: SEE CODE


Data Structures:
arrays
iterating method/mechanism 
conditional to check if index is an even index: 0, 2, 4
even indexes are odd elements


Algorithm:
iterate through the input array
  an each iteration check if the index of the current element is divisible by 2
  if it is, add it to the result array



*/
function oddities(array) {
  return array.filter((_, indx) => indx % 2 === 0);
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []