/*
Problem:
input: an array of integers
output: the average of all theintegers in the array, rounded down to the integer

Examples:


Algorithm:



*/
function average(array) {
  return Math.floor(array.reduce((accum, num) => accum + num) / array.length)
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40