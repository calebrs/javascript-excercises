/*
Problem:
input: odd integer, number
output: eight pointed star (*), in a grid of integer x integer size.
rules: smalles grid need to handle is seven stars
middle line is all stars
above and below middle are three stars in the center
stars extend past that increasing with one space in between for each new line


Examples: SEE CODE


Data Structures:
integer number of string lines which follow this pattern
declare const number of stars to 3
outside stars: 0, 1, 2 ...
spaces between stars: Integer - Number of Stars (3) divided by two, decreases by one each time
the center row is all stars
looping mechanism

Algorithm:
create center number = integer divided by two rounded up
Begin loop that runs integer number of times
create outisde stars variable to 0
crete between stars variable to integer - 3 divided by 2
if the iteration is less than half of the integer rounded down, 
  print to the conosle: outside space + star + inside space + star + inside space + star + outside space
  increase outisde stars by one
 decreasee spaces in between by 1
if the iteration equals the integer divided by two rounded up
  print a line of stars equal to integer
if the iteration is greater than the integer divided by two rounded up
  print to the conosle: outside space + star + inside space + star + inside space + star + outside space
  decrease outisde stars by one
  increase spaces in between by 1





*/
function star(integer) {
  const CENTER_ROW = Math.ceil(integer / 2);
  const STAR = '*';
  const SPACE = ' ';
  let outsideSpaces = 0;
  let insideSpaces = (integer - 3) / 2;
  
  for (let row = 1; row <= integer; row += 1) {
    if (row < CENTER_ROW) {
      console.log(SPACE.repeat(outsideSpaces) + STAR + SPACE.repeat(insideSpaces) +
                  STAR + SPACE.repeat(insideSpaces) + STAR + SPACE.repeat(outsideSpaces));
      outsideSpaces += 1;
      insideSpaces -= 1;
    } else if (row === CENTER_ROW) {
      console.log(STAR.repeat(integer));
      outsideSpaces -= 1;
      insideSpaces += 1;
    } else if (row > CENTER_ROW) {
      console.log(SPACE.repeat(outsideSpaces) + STAR + SPACE.repeat(insideSpaces) +
                  STAR + SPACE.repeat(insideSpaces) + STAR + SPACE.repeat(outsideSpaces));
      outsideSpaces -= 1;
      insideSpaces += 1;
    }
  }
}



star(7);
/* logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *
*/

star(9);
/* logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *
*/