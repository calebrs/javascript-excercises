/*
problem:
input: two integers first is count second is starting number
output: an array, starting at starting number, and incrementing by the starting number

Examples:


Algorithm:
creat empty array
begin loop that loops count times
  on each iteration push the start number to the empty array
  times the start number by the iteration umber

return the array

*/
function sequence(count, start) {
  let sequence = [];

  for (let indx = 1; indx <= count; indx += 1) {
    sequence.push(start * indx);
  }

  return sequence;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []