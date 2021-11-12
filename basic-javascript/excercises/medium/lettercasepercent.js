/*
Problem:
input: any string, with any kind of characters
output: an object, with these properties: lowercase, uppercase, and neither. And the value of each property is a percentage of how much of the string matches the property
rules: input will always have at least one character



Examples: see the code below


Data Structures:
input: string
output: object with three properties
looping mechanism for the string
conditional to decide if it's upper or not

algorithm:
Create empty object
creat variables for uppercasecount, lowercase coutn and neither count
iterate through the string
if the current index is lowercase, uppercase, or neither add it to a runngin total
end loop

calculate percentages rounded to second decimal place and save to variable
    total / length of the string

create the object with the percentages
  inside of object with properties declared, assign the properties the percent values

return the object
*/

function letterPercentages(string) {
  let newObj = {};
  let upperCaseCount = 0;
  let lowerCaseCount = 0;
  let neitherCount = 0;
  let stringLength = string.length;
  
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] >= 'A' && string[index] <= 'Z') {
      upperCaseCount += 1;
    } else if (string[index] >= 'a' && string[index] <= 'z') {
      lowerCaseCount += 1;
    } else {
      neitherCount += 1;
    }
  }
  
  return {uppercase: calculatePercent(upperCaseCount, stringLength),
          lowercase: calculatePercent(lowerCaseCount, stringLength),
          neither: calculatePercent(neitherCount, stringLength)};
}

function calculatePercent(number, setLength) {
  return String(((number / setLength) * 100).toFixed(2));
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }