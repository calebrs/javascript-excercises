/*
Problem:
input: a string of number chars
output: a number / the string converted to a number


Examples:
SEE CODE


Data Strucutres:



Algorithm:
create lookup object {string: number}

create tens multipler set to 1
create result number

start iteratioing through the input string starting from the back of the string
  on each character, add the value of the characters key to the string
  times the tesns multiplier by 10
  
return the result
  




*/
function stringToSignedInteger(string) {
  const NUMBER_LOOKUP = {
    '0' : 0,
    '1' : 1,
    '2' : 2,
    '3' : 3,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 7,
    '8' : 8,
    '9' : 9,
    'A' : 10,
    'B' : 11,
    'C' : 12,
    'D' : 13,
    'E' : 14,
    'F' : 15
  }
  let multiplier = 1;
  let result = 0;
  
  for (let indx = string.length - 1; indx >= 0; indx -= 1) {
    if (indx === 0 && string[indx] === '-') {
      result *= -1;
    } else if (indx === 0 && string[indx] === '+') {
      continue;
    } else {
      result += NUMBER_LOOKUP[string[indx]] * multiplier;
      multiplier *= 10;
    }
  }
  
  return result;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

//console.log(stringToInteger("4D9F")); // logs true
