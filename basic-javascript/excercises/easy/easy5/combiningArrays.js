/*
Problem:
input: two arrays
output: one array, that has no duplicate values

Example:
see code

Data:
inputs are both arrays
a new array with the elements
way to track duplicates
iteration mechanisms on each array

Algorithm:
declare result array
concat the two arrays together save to new array variable
  iterate through the combined array
    on each iteration if the current element is not inlcuded in the array starting at the next index
    include it in the result array

    return the result array
*/
function union(arr1, arr2) {
  let combinedArray = arr1.concat(arr2);

  return combinedArray.filter((elem, indx) => !combinedArray.slice(indx + 1).includes(elem));

  /*
  let combinedArray = arr1.concat(arr2);
  let resultArray = [];

  combinedArray.forEach((elem, indx) => {
    if (!combinedArray.slice(indx + 1).includes(elem)) {
      resultArray.push(elem);
    }
  });

  return resultArray;
  */
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]