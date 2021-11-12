/*
Problem:
input: an array
output: an array that is rotated: move the first element to the end of the array
rules: do not modify the original array

Examples:
see code

Data Structures:
conditional to check if its an array
copy of the input array
virst element saved as a variable
mechanism to add it to the end


Algorithm:
check if the input is good:
  if the input is an array continue else return undefinded

create copy of the input array
shift the first element off of the front
push that element onto the end

return the array



*/
function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  if (arr.length === 0) {
    return [];
  }

  let arrCopy = arr.slice(0);
  let firstElement = arrCopy.shift();
  arrCopy.push(firstElement);

  return arrCopy;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]