/*
Problem:
input: three numbers
output: a letter grade string
take the average of the three letters
if the average falls in a certain range then output that grade


Examples:


Data Structures:


Algorithm:
*/
function getGrade(grade1, grade2, grade3) {
  let averageGrade = (grade1 + grade2 + grade3) / 3;
  
  if (90 <= averageGrade) {
    return 'A';
  } else if (80 <= averageGrade) {
    return 'B';
  } else if (70 <= averageGrade) {
    return 'C';
  } else if (60 <= averageGrade) {
    return 'D';
  } else {
    return 'F';
  }
}


console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"