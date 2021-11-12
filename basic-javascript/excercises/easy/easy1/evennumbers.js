/*
Problem:
input: no input
output: all the even numbers from 1 to 99
numbers are all on a new line

Exmaples: console: 2, 4, 6, 8 ...


Data Structures
loop that runs 99 times
numbers are logged

Algorithm
begin loop that starts at 1 ends at 99
add 2 to each iteration

*/

for (let number = 2; number <= 99; number += 2) {
  console.log(number);
}