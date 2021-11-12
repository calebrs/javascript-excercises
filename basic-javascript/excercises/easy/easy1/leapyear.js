/*
Problem:
input: year as integer
output: true if it's leap year, false it it's not
rules:
leap year is: 
-evenly divisible by 4
-the year is not divisible by 100 except 400
-

Examples: SEE CODE


Data Structures:
conditionals
check if year is divisible by 4
check if year is divisible by 400
check if year is divisible by 100
boolean return value


Algorithm:
if the year is divisibel by for, and is not divisible by 100
 return true
if the year is divisible by 400
  return true



*/
function isLeapYear(year) {
  if (year <= 1752) {
    return year % 4 === 0;
  }
  
  if (year > 1752) {
    if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  }
  return false;
  }
}


console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true