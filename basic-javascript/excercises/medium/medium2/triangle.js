/*
Problem:
input: three angles
output: what kind of triangle it is



Examples: see code


Data strucutres:
conditionals

Algorithm:
check if the triangle is valid
if all sides are greater than zero
sort the angles into an array, sort the array. 
if the first two elements are greater than the las element

if all angles are equal to eachother: return equilateral
if all sides are different lengths: return scalene
else: return isosceles




*/
function triangle(angle1, angle2, angle3) {
  if (!validTriangle(angle1, angle2, angle3)) {
    return "invalid";
  } else if (angle1 === angle2 && angle2 === angle3) {
    return 'equilateral';
  } else if (angle1 !== angle2 && angle2 !== angle3) {
    return 'scalene';
  } else {
    return 'Isosceles';
  }
}

function validTriangle(ang1, ang2, ang3) {
  let anglesArray = [ang1, ang2, ang3].sort((a, b) => a - b);
  let sumOfShortest = anglesArray[0] +  anglesArray[1];
  return ((ang1 > 0 && ang2 > 0 && 3 > 0) && (sumOfShortest > anglesArray[2]))
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"