/*
Prob
in string
out object with properties lowercase uppercase and neither with the count of the respective char

Exa


Algo
create result object
iterate through the string
  on each check if it's lower or uppercase
  if it's upper add to upper prop in the obj
  ''

return obj


*/
function letterCaseCount(str) {
  let resultObj = {lowercase: 0, uppercase: 0, neither: 0};

  for (let indx = 0; indx < str.length; indx += 1) {
    if (isUpperLowerOrNeither(str[indx]) === 1) {
      resultObj['lowercase'] += 1;
    } else if (isUpperLowerOrNeither(str[indx]) === -1) {
      resultObj['uppercase'] += 1;
    } else {
      resultObj['neither'] += 1;
    }
  }

  return resultObj;
}

function isUpperLowerOrNeither(char) {
  if (char >= 'a' && char <= 'z') {
    return 1;
  } else if (char >= 'A' && char <= 'Z') {
    return -1;
  } else {
    return 0;
  }
}


console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }