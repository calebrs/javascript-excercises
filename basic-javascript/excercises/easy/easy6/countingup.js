/*
Problem:
input: number
output: array with numbers from 1 to the number

*/

function sequence(number) {
  let sequenceArray = [];

  for (let iter = 1; iter <= number; iter += 1) {
    sequenceArray.push(iter);
  }

  return sequenceArray;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]