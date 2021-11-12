/*
Problem:
input: 3 numbers that represent the length of each side of a triangle
output: string that indicates what kind of tringle it is => equilateral, isosceles, scalene, invalid
rules: 
Equilateral: all sides are equal
Esosceles: two sides are of equal length and the third is different
scalene: all three sides are difference lengths

all triangles: two shortest sides must be greater than the longest side, and must be greater than 0.

Examples:
see code for test cases.

Data Structures:
three input number
one output string
conditionals to verify what kind of triangle it is
array to sort the three numbers easily

Algorithm:
get the three variables into an array and sort that array from least to greatest
if these are false=>
any element is equal to 0
and first two indeces added together are greater than the last index
return invalid

check if all sides are equal: if the first element is equal to the first and last element of the array or if sum of three does not have a remainder when diveded by three
if they're all equal then return equilateral

check if first two elements are equal, if they are return isoceles

else: it's scalene


*/
function triangle(side1, side2, side3) {
  let sideArray = [side1, side2, side3].sort((a, b) => a - b);
  
  function hasValidSides(array) {
    return array[0] + array[1] > array[2];
  }
  
  if (sideArray.some(side => side === 0) || !hasValidSides(sideArray)) {
    return 'Invalid';
  } else if (side1 === side2 && side1 === side3) {
    return 'Equilateral';
  } else if (sideArray[1] === sideArray[2]) {
    return 'Isosceles';
  } else {
    return 'Scalene';
  }
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"