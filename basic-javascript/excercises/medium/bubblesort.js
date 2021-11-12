/*
Problem:
input: An array
output: A sorted array in ascending order
rules: Must use a 'bubble sort'
make multiple passes through the array
on each pass, compare two consecutive values
if the first is greater than the second, swap the two elements
repeat until there is a complete pass with no swaps
do this by mutating the array only

Examples: see the code below for test cases


Data Structures:
arrays
numbers
strings (corce these to numbers)
nested loops
conditionals to end loops and swap numbers


Algorithm:
start a while loop that ends when no swaps are made
create swapmade boolean set to false
start iterating through the array at the index 1 end at the length of the array
  looking at the current index and the previous index
  create currentindex variable
  create previous index variable
  if the current index is lower than the previous index swap them by:
    setting the current index to the value of the previous index
    setting the previous index to the value of the current index
    set swapmade to true


end while if swapmade is false

**NO RETURN VALUE**
*/

function bubbleSort(array) {
  while (true) {
    let swapMade = false;
    for (let indx = 1; indx < array.length; indx += 1) {
      let currentIndex = array[indx];
      let previousIndex = array[indx - 1];
      if (currentIndex < previousIndex) {
        array[indx] = previousIndex;
        array[indx - 1] = currentIndex;
        swapMade = true;
      } 
    }
    if (!swapMade) break;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]