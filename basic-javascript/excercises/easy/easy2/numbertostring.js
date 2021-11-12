/*
Problem:
input: a number
output: a string of the same number
rules:
do not use string(), or toString()

Example: SEE CODE


Data Structures:
number input
string output


Algorithm:
create lookup array from 0 to 9

create string number

while the number does not equal 0
  1. get from the number the right most digit - number % 10 save to variable
  add the value of the index from step 1 to the string number
  set the number to the number - input number

return the string



*/
function signedIntegerToString(number) {
  const LOOKUP = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  let numberCopy = number;
  let stringNumber = '';
  
  if (number < 0) {
    number *= -1;
  }
  
  do {
    let digit = number % 10;
    stringNumber = LOOKUP[digit] + stringNumber;
    number = (number - digit) / 10;
  } while (number !== 0);
  
  //console.log(numberCopy);
  switch (Math.sign(numberCopy)) {
    case -1: return `-${stringNumber}`;
    case 0: return stringNumber;
    case 1: return '+' + stringNumber;
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");