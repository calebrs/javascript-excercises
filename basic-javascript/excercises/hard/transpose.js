/*
Problem:
input: a 3x3 matrix represented by three arrays. Each array is a row.  
output: the matrix transposed
transpose: 


Examples:
see code

Data Structures:
original matrix: 1, 2, 3, 4, 5, 6, 7, 8, 9
1, 2, 3,
4, 5, 6,
7, 8, 9

transposed matrix: 1, 4, 7, 2, 5, 8, 3, 6, 9,
1, 4, 7,
2, 5, 8,
3, 6, 9
        
pattern: 0, 2, 4, -2, 0, 2, -4, -2, 0
pattern by index from the beginning of the array:

0, 1, 2, 3, 4, 5, 6, 7, 8
0, 3, 6, 1, 4, 7, 2, 5, 8

0, 1, 2, 0, 1, 2, 0, 1, 2

0, 2, 4, -2, 0, 2, -4, -2, 0
2, 2, -6, 2, 2, -6, 2, 2 



Algorithm:
create the new array
  declare count
  iterate over the array
    on each array: iterate over each row
    on each row: 


*/
function transpose(matrix) {

}



const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]