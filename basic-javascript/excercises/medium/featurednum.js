/*
Problem:
input: takes an integer
output: returns a number that is the "next featured number"
rules: 
the next featured number is: 
an odd number
multiple of seven
all digets occur only once
output is the next featured number

Examples:
see code

Data Structures:
numbers
conditionals for each rule


Algorithm:
starting at the input number iterate upwards.
check each number for each of the conditions
  check if it's odd and multiple of seven
    input - number
    outpur true or false
      return that it's odd and a multiple of seven
  make sure all digits are unique
    input: number 
    outpur true or false
      convert number to string
      create check string
      iterate over the digits
      for every digit check to see if it is in the check string
      if it is in the check string, return false
      if its not add it to the check string.
  check to see if the number is greater than 9876543201
    if not return "There is no possible number that fulfills those requirments"
  
  if it passes the test return the number to exit the loop



*/

function featured(integer) {
  const BIGGEST_DIGIT = 9876543201
  
  while (true) {
    integer += 1;
    
    if (isOddAndMultipleOfSeven(integer) && digitsAreUnique(integer)) {
      return integer;
    } else if (integer > BIGGEST_DIGIT) {
      return 'There is no possible number that fulfills those requirments';
    }
  }
}

function isOddAndMultipleOfSeven(integer) {
  return integer % 2 > 0 && integer % 7 === 0;
}

function digitsAreUnique(integer) {
  let integerAsString = String(integer);
  let checkString = '';

  for (let index = 0; index < integerAsString.length; index += 1) {
    if (checkString.includes(integerAsString[index])) {
      return false;
    } else {
      checkString += integerAsString[index];
    }
  }
   return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."