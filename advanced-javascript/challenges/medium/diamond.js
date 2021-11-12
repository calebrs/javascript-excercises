/*
input:string letter
output: a diamond that starts and ends at the input letter


Exmaples: 'C
  A
 B B
C   C
 B B
  A

Data structures

4, letter, 4
3 letter, 1, letter, 3
2 letter, 3, letter, 2
1, letter, 5 letter, 1
letter,  7, letter


Algorithm:
get the index of the input number from the alphabet string
get the starting spaces = index of input minus 1
get ful length: (spaces * 2) + 1;

create first and last line variable: stating spaces + input letter
create middle line variable: letter + full length - 2 + letter
add first line to the result string

start iterating through the splhabet string starting at index 1 excude the last digit
  on each iteration: 
  get spaces: starting spaces - current index
  get middel spaces = full length - 2 - (spaces * 2)
  create

push onto array: first line,  middle array, middle line, middle array reversed, last line
return that array joined by new lines

*/
class Diamond {
  static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    if (letter === 'A') return 'A\n';

    let letterIndex = Diamond.ALPHABET.indexOf(letter);
    let startingSpaces = letterIndex;
    let fullLength = (startingSpaces * 2) + 1;
    let firstLastLine = ' '.repeat(startingSpaces) + 'A' + ' '.repeat(startingSpaces);
    let middleLine = letter + ' '.repeat(fullLength - 2) + letter;
    let middleRows = [];

    for (let indx = 1; indx < letterIndex; indx += 1) {
      let currentLetter = Diamond.ALPHABET[indx];
      let sideSpaces = startingSpaces - indx;
      let middleSpaces = (fullLength - 2) - (sideSpaces * 2);
      middleRows.push(' '.repeat(sideSpaces) + currentLetter + ' '.repeat(middleSpaces) + currentLetter + ' '.repeat(sideSpaces));
    }

    return [firstLastLine, ...middleRows, middleLine, ...middleRows.reverse(), firstLastLine + '\n'].join('\n');
  }
}

module.exports = Diamond;