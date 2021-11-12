/*
Problem:
input: three angles as numbers
output: string output that states the triangles classifictaion
rules: 
valid triangles: sum of angles is exactly 180, all angles are greater than 0
right: one angle is exactly 90 degrees
acute: all angles are less than 90 degrees
obtuse: one angle is greater than 90 degrees

Examples:
see Code below for test cases


Data Structures:
number inputs
arrays
iteration methods for arrays
conditionals
is valid function
type of tringle function
tringle function


Algorithm:
take the three angles and put them into an array
check if it is a valid triangle
  in => array of angles
  out => true/false
  array as parameter
  sum the angles up and store as value
  check to see if any angles have a value of zeor by iterating through the array
    store as true / false
  if the sum is equals 180 and there are no 0 angles
    reuturn true
check what kind of triangle it it:
  if one of the angles is 90 then return "right"
    iterate through the array and check if one of them is equal to 90 return true
  if all the angles are less than 90 return Acute
    iterate through the array and check if they all are below 90 and returning true if they do. 
  else return 'obtuse'
return the value of the typeof function

*/
function triangle(angle1, angle2, angle3) {
  let angleArray = [angle1, angle2, angle3];
  if (isValid(angleArray)) {
    return typeOfTriangle(angleArray);
  } else {
    return 'Invalid';
  }
}

function isValid(angleArray) {
  let anglesSum = angleArray.reduce((accum, num) => accum + num, 0);
  let hasZero = angleArray.some(num => num === 0);
  return anglesSum === 180 && !hasZero; 
}

function typeOfTriangle(angleArray) {
  if (angleArray.some(angle => angle === 90)) {
    return 'Right';
  } else if (angleArray.every(angle => angle < 90)) {
    return 'Acute';
  } else {
    return 'Obtuse';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
