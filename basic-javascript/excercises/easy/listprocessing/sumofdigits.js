/*
Problem:
input: one number
output: sum of the digits
rules: use method calls only

Examples: see code


Algorithm:
convert the number to a string
convert the string to an array
reducde the array. convert each element to a number

*/
function sum(number) {
  return String(number)
      .split('')
      .reduce((accum, num) => Number(num) + accum , 0);
}


console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45