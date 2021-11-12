/*
Problem:
input: array argument
output: the input array split in half into an array of two arrays
an odd length array will put the extra elements in the first array

Examples:
see code

Algorithm:
get the middle index of the array: (array / 2) - 1 if it's an odd length: array / 2 rounded down
slice the array from beginning to middle save as variable
slice the array from middle to end save as variable
assign saved variables to new result array

*/
function halvsies(arr) {
  let middleIndx = arr.length % 2 === 0 ? (arr.length / 2) - 1 : Math.floor(arr.length / 2);
  
  return [arr.slice(0, middleIndx + 1), arr.slice(middleIndx + 1)];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]