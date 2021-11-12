/*
Problem:
input: a number, and a count
output: the last count digits rotated. number output

Examples:


Data
numnbers converted to arrays
the rotate method
new array sliced in relation to count

Algorithm:
convert number into an array save as variable
get the rightmost numbers by slicing from negative count
get the left numbers by sliced from 0 to the negative count
rotated the right sliced array
convert both array back to strings
concat the strings
convert to number

return number
*/
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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917