/*
Problem:
input: number
output: the number multiplied by two if its a doubledouble. return the 

Examples: SEE CODE


Data Structures:
if the numbers length is odd return the number doubled
else
  get the left side string
    slice the string from 0 index to the numbers lenth divided by 2 plus 1
  get the right side string
  if they equal each other
    return the number

Algorithm:

*/
function twice(number) {
  if (String(number).length % 2 !== 0) {
    return number * 2;
  } else {
    let leftSide = String(number).slice(0, (String(number).length / 2));
    let rightSide = String(number).slice((String(number).length / 2));
    if (leftSide === rightSide) {
      return number;
    }
  }
  return number * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676