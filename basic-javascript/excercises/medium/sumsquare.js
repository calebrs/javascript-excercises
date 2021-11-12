/*
Problem:
input: integer
output: integer that is the difference between the square of the sum and the sum of the squares
rules:
square of the sums: all numbers from 1 to the input integer summed, then squared
sum of the squares: all the numbers from 1 to the input integer squared, then summed up.

Examples:
see code

Data Structures:
numbers for input and output
loops

Algorithm:
find the square of sums
  sum all the numbers from one to the input
    create a total variable
    start a loop at 1
    then each iteration add the current number to the total
  square the total
  return the value
get the sumOfSquares
  create a total variable
  start a loop at 1 and go for the length of the input int
  at each iteration square the current value then add it to the running total
  return the total
subtract the two from eachother


*/

function sumSquareDifference(integer) {
  return squareOfSums(integer) - sumOfSquares(integer);
}

function squareOfSums(integer) {
  let total = 0;
  for (let index = 1; index <= integer; index += 1) {
    total += index;
  }
  return total * total;
}

function sumOfSquares(integer) {
  let total = 0;
  for (let index = 1; index <= integer; index += 1) {
    total += index * index;
  }
  return total;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150