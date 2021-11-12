/*
Problem:
input: two arguments that are arrays. list of numbers
output: the product of all combination of number pairs sorted in ascending order

Examples:


Algorithm:
create new array
iterate through the first array
  on each number, iterate through the second array
    on each iteration multiply the current number of the first array with the current number of the second array
      push to a new array


*/
function multiplyAllPairs(arr1, arr2) {
  let newArray = [];

  arr1.forEach(num1 =>
      arr2.forEach(num2 =>
          newArray.push(num1 * num2)));

  return newArray.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]