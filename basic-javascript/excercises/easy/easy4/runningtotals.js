/*
Problem:
input: an array of numbers
output: an array with the same number of elements as the input. 
rules:
Each element of the output is the running total of the original array. SEE examplse

Examplse:
SEE CODE

Data:
arrays
numbers for elements
iteration mechanism
add previous element to the current element to get the new element

Algorithm:
declare new array that is empty
declare total set to 0;
start iterating through the array
  on each element: add the total to the current element. set to the total
  push the total to the new array
  
return the array

*/
function runningTotal(array) {
  let newArray = [];
  let total = 0;
  
  for (let indx = 0; indx < array.length; indx += 1) {
    total += array[indx];
    newArray.push(total);
  }
  
  return newArray;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []