/*
Problem:
input: a string
output: an object with percent of characters that are lowercase, uppcase and neither

Example
see code


Data Structures
object as result
string as input
way to count uppcase. lowercase and neither
way to convert those into a percent


Algorithm
declare the object with the three properties
declare loercase, uppercase, and neither count

iterate through the string
  on each char check if it's lower or uppercase or neither
    add whatever it is to it's corresponding variable

get the percent: divide the counts by the total of all counts
push that to the object




*/
function letterPercentages(string) {
  let ratioObj = { uppercase: 0, lowercase: 0, neither: 0 }
  let uppercase = 0;
  let lowercase = 0;
  let neither = 0;
  
  for (let indx = 0; indx < string.length; indx += 1) {
    if (string[indx] >= 'a' && string[indx] <= 'z') {
      lowercase += 1;
    } else if (string[indx] >= 'A' && string[indx] <= 'Z') {
      uppercase += 1;
    } else {
      neither += 1;
    }
  }
  
  ratioObj.lowercase = ((lowercase / string.length) * 100).toFixed(2);
  ratioObj.uppercase = ((uppercase / string.length) * 100).toFixed(2);
  ratioObj.neither = ((neither / string.length) * 100).toFixed(2);
  
  return ratioObj;
}



console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }