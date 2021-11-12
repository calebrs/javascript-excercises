/*
Problem:
input: one integer
output: returns true if its odd, false if even

Examples: SEE CODE



Data Structures


Algorithm:



*/

function isOdd(integer) {
  return integer % 2 !== 0;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true