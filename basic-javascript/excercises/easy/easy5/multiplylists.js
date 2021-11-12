/*
Problem:
input: two arrays of numbers
output: an array of the same length with the product of elements with the same index

Examples: see code

Algorithm:
create new array
iterate through the arrays as many times as the length
  on each iteration times the current index with the other arrays current index
  push to the new array

return the new array

*/
function multiplyList(arr1, arr2) {
  return arr1.map((num, indx) => num * arr2[indx]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]