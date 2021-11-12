/*
Problem:
input: a number
output: the next number goint up, that is a featured number
featured number:
odd
multiple of 7
all digits occur once

Examplse: see code



Algorithm:
declare num = num  + 1


start while loop. Goes until num is a featured num
  convert num to string
  add 1 to count
  
  if numis featured number return num
  
is featured num: num
num is multiple of seven
num is odd
all digits occur once

all digits occur once:
  first digit does not equal second digit, first digit does not equal third digit, second digit does not equal third digit


*/
function featured(num) {
  let count = num + 1;
  
  while (true) {
    
    if (isFeaturedNum(count)) {
      return count;
    } else if (count > 9876543200) {
      return "There is no possible number that fulfills those requirements."
    }
    
    count += 1;
  }
}

function isFeaturedNum(num) {
  let numString = String(num);
  return num % 7 === 0 && num % 2 !== 0 && !hasDuplicate(numString);
}

function hasDuplicate(string) {
  for (let indx = 0; indx < string.length; indx += 1) {
    if (string.slice(indx + 1).includes(string[indx])) {
      return true;
    } 
  }
  return false;
}

console.log(isFeaturedNum(21));

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."