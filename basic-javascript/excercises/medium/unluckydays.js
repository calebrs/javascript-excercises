/*
Problem:
input: year as number 
output: the number of firday the 13s are in that year.
rules: assume the year is greater that 1752 and will be the same calendar in the future.

Examples: see code


Data Structures:
number input
number output
dates
iterate though the date?
friday === 5 for getDay

Algorithm:
create numberoffirdays total
iterate through all the months in a year
  start loop that runs 12 times
    each loop, create a new date with the current year and month with the day of 13
    create lookup table for months???
    if day === 5 
    add that to a running total
    
return the total

*/

function fridayThe13ths(year) {
  let numberOfFriday13s = 0;
  
  for (let month = 0; month < 12; month += 1) {
    let thirteenthOfTheMonth = new Date(year, month, 13);
    
    if (thirteenthOfTheMonth.getDay() === 5) {
      numberOfFriday13s += 1;
    }
  }
  
  return numberOfFriday13s;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2