/*
Problem:
input: an array of integers
output: the average of all the numbers in the array rounded to three places

Algorithm:

*/
function multiplicativeAverage(array) {
  return (array.reduce((accum, num) => accum * num, 1) / array.length).toFixed(3);
}
console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"