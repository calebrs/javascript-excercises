/*
Problem:
input: an integer
ouput: the maximum rotated number
rules: 
735291 ==> 352917 ==> 329175 ==> 321759
735291

Examples:


Data S: 
the result array
iteration mechanism
slice mechanism
previous two methods

Algorithm:
create result number that is the number converted to a stirng
start a loop that goes for as long as the input number converted to a string
  on each iteration run the rotate right most digits function with the count being the index

return the result number

*/
function maxRotation(num) {
  for (let count = String(num).length; count >= 1; count -= 1) {
    num = rotateRightmostDigits(num, count);
  }
  
  return num;
}

function rotateRightmostDigits(number, count) {
  let numberAsArray = String(number).split('');
  let rightDigits = numberAsArray.slice(-count);
  let leftDigits = numberAsArray.slice(0, -count)
  let rotatedRightDigits = rotateArray(rightDigits);

  return Number(leftDigits.concat(rotatedRightDigits).join(''));
}

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  if (arr.length === 0) {
    return [];
  }

  let arrCopy = arr.slice(0);
  let firstElement = arrCopy.shift();
  arrCopy.push(firstElement);

  return arrCopy;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845