/*
Problem:
input: one argument, a positive integer
output: list of the digits in that number


Example


Algorithm:

*/

function digitList(number) {
  return String(number).split('').map(char => Number(char));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]