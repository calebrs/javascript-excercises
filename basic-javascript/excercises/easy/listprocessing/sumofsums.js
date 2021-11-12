/*
Problem:
input: an array of numbers
output: the sum of leading subsequence elements for that array;
array will always have at least one number

Examples:


Algorithm:
  iterate through the array
    on each iteration, sum the numbers starting from 0 to the next index
    add that to a running total

    return the total


*/
function sumOfSums(arr) {
  let total = 0;

  for (let indx = 1; indx <= arr.length; indx += 1) {
    total += arr.slice(0, indx).reduce((accum, num) => accum + num, 0);
  }

  return total;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35