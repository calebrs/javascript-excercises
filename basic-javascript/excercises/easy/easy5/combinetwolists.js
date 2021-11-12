/*
Problem:
input: two arrays that are not empty and have the smae number of elements
output: one array, with alternating elements from the two arrays

Examples:
see code

Algorithm:
create new array
start iterating as many times as the length of the input arrays
on each iteration push the current element of both arrays to the new array
return result array


*/
function interleave(arr1, arr2) {
  let resultArray = [];

  for (let indx = 0; indx < arr1.length; indx += 1) {
    resultArray.push(arr1[indx], arr2[indx]);
  }

  return resultArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]