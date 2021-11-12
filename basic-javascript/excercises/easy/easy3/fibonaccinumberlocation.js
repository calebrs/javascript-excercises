/*
Problem:
input: an integer
output: index of the first fibonacci number integer number of digits long
integer is greater than 2

Example: SEE CODE


Data Structures:
iterating through the fibonacci numbers
numbers
fibonacci = current num plus the previous num

Algorithm:
create fib array = [1, 1]

start iterating through all the fibonacci numbers:
  start loop at second index of array
  if the current num converted to string's length is equal to the input int
    return the current index
  on each iteration push current num + previous num


*/
function findFibonacciIndexByLength(length) {
  let fibArray = [1, 1];
  let indx = 1;
  
  while (true) {
    if (String(fibArray[indx]).length === length) {
      return indx + 1;
    }
    fibArray.push(fibArray[indx] + fibArray[indx - 1]);
    indx += 1;
  }
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74

// Don't try any higher values until you read the solution Discussion