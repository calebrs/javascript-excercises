/*
Problem:
input: verse number
output: the string verse of the beer song
rules:
1st verse = 99 bottles of beer
99th verse = 0 bottles of beer


Examples: SEE TESTS


Data Structures:
string outputs
number inputs
class
no constructor

unique verses:
1 bottle of beer
  bottle not bottles
  "no more bottles"
2 bottles of beer
  2 bottles of beer (regular)
  1 bottle of beer on the wall
0 bottles of beer
  no more bottles of beer on the wall...
  Go to the store and buy some more, 99 bottles of beer on the wall.

Algorithm:
static verse method:
line1 words variable = number
line2 words variable = input number - 1

create line one variable = "number of beer on the wall, 2 bottles of beer.\n"
create line two variable = "Take one down and pass it around, ${line2Words} of beer on the wall.\n

if input is 2
  line1 words don't change
  reassign line 2 to the new string
if input is 1
  reassign both lines to the new string
if input is 0
  reassign both lines to the new strings

return the addition of line 1 and 2

static verses method:
  rest the inputs into an array
  loop through the array
  call verse method each iteration with the current number as an argument


static lyrics method
  create array with numbers 1 -100
  spread the array into the argument for verses method then call it




*/
class BeerSong {
  static verse(number) {
    let line1Words = String(number);
    let line2Words = String(number - 1);

    let lineOne = `${line1Words} bottles of beer on the wall, ${line1Words} bottles of beer.\n`;
    let lineTwo = `Take one down and pass it around, ${line2Words} bottles of beer on the wall.\n`;

    if (number === 2) {
      lineTwo = "Take one down and pass it around, 1 bottle of beer on the wall.\n"
    } else if (number === 1) {
      lineOne = "1 bottle of beer on the wall, 1 bottle of beer.\n";
      lineTwo = "Take it down and pass it around, no more bottles of beer on the wall.\n";
    } else if (number === 0) {
      lineOne = "No more bottles of beer on the wall, no more bottles of beer.\n";
      lineTwo = "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
    }

    return lineOne + lineTwo;
  }

  static verses(num1, num2) {
    let args = (() => {
      let arr = [];

      for (let count = num1; count >= num2; count -= 1) {
        arr.push(count);
      }

      return arr;
    })();

    let result = '';

    args.forEach(num => {
      result += BeerSong.verse(num) + '\n';
    });
    
    return result.trimEnd() + '\n';
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;