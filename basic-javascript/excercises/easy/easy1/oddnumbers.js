/*
Problem:
input: no input
output: all the odd numbers from 1 to 99
numbers are all on a new line

Exmaples: console: 1, 2, 3, 4, 5... up to 99


Data Structures
loop that runs 99 times
numbers are logged

Algorithm
begin loop that starts at 1 ends at 99
add 2 to each iteration

*/

function oddNumbers(limit) {
  for (let number = 1; number <= limit; number += 1) {
    if (number % 2 !== 0) {
      console.log(number);
    }
  }
}

oddNumbers(10);
