/*
Problem:
input: a string of different digits
output: all possible consecutive number series of a specified length in that string
an error is thrown if the asked for digit is longer than the first input

Examples: SEE TEST CODE
01234:
012
123
234
0123
1234


Data Structures:
Series class that takes a string as an argument
slices method that takes a number as an argument
throw new error if the input is longer than the string


Algorithm:
declare new class called Series
  constructor takes string argument and stores it in this.digits

series method:
if the input is greater than the length of the saved digits throw error
  create result array
    iterate through the string as an array
      create start variable index, create end variable index
      if end is longer than the array break
      slice from start to end and push to result array


*/
class Series {
  constructor(digits) {
    this.digits = digits;
  }

  slices(num) {
    if (num > this.digits.length) throw new Error();

    let result = [];
    let splitDigits = this.digits.split('').map(digit => Number(digit));

    splitDigits.forEach((_, indx) => {
      let endIndx = num + indx;
      if (endIndx <= this.digits.length) {
        let slice = splitDigits.slice(indx, endIndx);
        result.push(slice);
      }
    });

    return result;
  }
}

module.exports = Series;