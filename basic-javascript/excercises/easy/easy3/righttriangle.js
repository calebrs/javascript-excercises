/*
Problem:
input: positive integer
output: a tringale with integer side size.
Riaglen is logged as stars (*)

Example:
*
   **
  ***
 ****
*****


Data Strucuters
iterating mechanism
pattern: fo each row: 1 star, 4 spaces : 2 stars, 3 spaces

Algorithm:
declare star const
declare space const

declare spacees = input - 1
declare stars = 1

iterate input number of times
  on each iteration log to the console
    spaces repeated spaces times then star start times
    decrease spaces by 1
    increase stars by 1


*/

function triangle(size) {
  const STAR = '*';
  const SPACE = ' ';
  let numberOfSpaces = size - 1;
  let numberOfStars = 1;
  
  for (let row = 1; row <= size; row += 1) {
    console.log(`${SPACE.repeat(numberOfSpaces)}${STAR.repeat(numberOfStars)}`);
    numberOfSpaces -= 1;
    numberOfStars += 1;
  }
}

triangle(5);
triangle(9);

 