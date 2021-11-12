/*
Problem:
input: two primitive data types
output: true or false boolean.
rules: only one argument is true


Examples: SEE CODE


Data Structures:
&& and || operators
any data type as input


Algorithm:
if one is truthy and the other falsy return true
if one is falsy and the other is truthy return true
anything else is false

*/
function xor(input1, input2) {
  return !!(input1 && !input2) || (!input1 && input2);
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);