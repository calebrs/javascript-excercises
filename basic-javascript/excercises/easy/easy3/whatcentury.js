/*
Problem:
input: year as a number
output: what century it is with the correct ending

Example: see code


Data STructure
get the century = the year divided by 100 rounded up
conitional to cehck the last two digits are 11, 12, 13,
conditional to check the last digit of the string


Algorithm:
get the centure and save it to a variable, conver to string

check 11, 12, 13 
if it is, concat th and return the century string

check the last char
  concat the approprate letters

*/
function century(year) {
  let centuryString = String(Math.ceil(year / 100));
  
  if (isElevenTwelveThirteen(centuryString)) {
    return centuryString + 'th';
  }
  
  switch (centuryString[centuryString.length - 1]) {
    case '1': return centuryString + 'st';
    case '2': return centuryString + 'nd';
    case '3': return centuryString + 'rd';
    default: return centuryString + 'th';
  }
}

function isElevenTwelveThirteen(string) {
  return string.slice(-2) === '12' ||
         string.slice(-2) === '13' ||
         string.slice(-2) === '11';
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"