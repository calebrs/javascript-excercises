/*
Problem:
input: an array
output: reverses the elements in place
DO not use the reverse method

Examples:


Algorithm:
declare the new array
begin iterating through the input array array in reverse
  on each iteration push the current element of the input array to the current index of the new array


*/
function reverse(array) {
  for (let indx = 0; indx < array.length; indx += 1) {
    array.splice(indx, 0, array.pop());
  }

  return array;
}



let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true