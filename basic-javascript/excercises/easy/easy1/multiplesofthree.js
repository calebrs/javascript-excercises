/*
Problem:
input: an integer greater than 1
output: the sum of all the numbers between 3 and the input number

Examples: SEE CODE


Data:
looping mechanism
numbers as input
summing operator
conditional to check if numbers are divisible by three

Algorithm:
declare sum variable begin loop that loops through numbers 1through input int set to 0
 on each iteration:
  check if the number is divisible by three: num % int === 0
  if it is, then add it to the running total

at the end add the ineger to the running total
return the running total


*/
function multisum(integer) {
  let total = 0;
  
  for (let iter = 1; iter <= integer; iter += 1) {
    if (iter % 3 === 0 || iter % 5 === 0) {
      total += iter; 
    }
  }
  
  return total;
}


console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168