/*
Problem:
input: an odd integer
output: a four pointed diamond in an integer X integer grid
create a grid that is nxn
diamond gets another * at each level on both sides.

Examples: SEE the code


Data Structures:
loop that runs int times, which createts the grid
integer is a number
outputs are strings
1, 3, 5, 3, 1
2, 1, 0, 1, 2
using the above patterns, concat spaces and stars accordingly



Algorithm:
declare stars variable set to 1
declare spaces variable set to stars minus integer divided by 2
begin loop that runs integer times
on each iteration, print spaces plus stars plus spaces
if stars is less than integer: add two to stars, minus one from spaces
if stars are more than integer: minus two to stars, minus one from spaces

 


*/

function diamond(integer) {
  const SPACE = ' ';
  const STAR = '*';
  let starsNumber = 1;
  let spacesNumber = (integer - starsNumber) / 2;
  
  for (let iteration = 1; iteration <= integer; iteration += 1) {
    if (iteration < integer / 2) {
      console.log(`${SPACE.repeat(spacesNumber)}${STAR.repeat(starsNumber)}${SPACE.repeat(spacesNumber)}`);
      starsNumber += 2;
      spacesNumber -= 1;
    } else if (starsNumber >= Math.floor(integer / 2)) {
      console.log(`${SPACE.repeat(spacesNumber)}${STAR.repeat(starsNumber)}${SPACE.repeat(spacesNumber)}`);
      starsNumber -= 2;
      spacesNumber += 1;
    }
  }
  console.log(`${SPACE.repeat(spacesNumber)}${STAR.repeat(starsNumber)}${SPACE.repeat(spacesNumber)}`);
}

diamond(7);

 
 //console.log(diamond(9));
