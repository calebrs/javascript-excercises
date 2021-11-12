/*
Problem:
input: Word as string
output: boolean true or false, whethor or not the word can be spelled
rules:
Must use the spelling block from the given list
spelling blocks are two letters arranged like 'B:O' 
To spell a word, each letter comes from the collection, but only from one block
each block can only be used once
case insensitive

Examples: SEE CODE



Data Structures:
array, of arrays: [[B, O], [X, K]];
array of used indexes
strings
iteration mechanism to look through the array of arrays


Algorithm:
create constant array with all the blocks in it
Start function
  1. create array of used indexes, set to empty array
  2. Start iterating throught each letter of the input word
    1. capitalize letter
    2. check if the letter is contained in one of the blocks: getletterBlock
    3. push the block index to array of indexes
  
  3. Check the array of indexes for any duplicate values
  function returns true or false from the above line


CHECK IF LETTER IS IN one of the blocks
input: letter
output: index of the block, that the letter is in
  start iterating through the blocks
  if the block contains the letter, return the index of the block

Check for duplicate values
input: array
output: true or false boolean
[1, 2, 3, 4] - true
[1, 2, 2, 3] - false
iterate through the array
  use the includes built-in function that check if the array includes the current 
  value startig at the next index
  if that function returns true, return false
  if it returns false, return true




*/
const BLOCKS = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['N', 'A'],
                ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'],
                ['C', 'P'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']];


function isBlockWord(string) {
  let usedIndexes = [];
  
  for (let indx = 0; indx < string.length; indx += 1) {
    let currentLetter = string[indx].toUpperCase();
    let blockIndex = getLetterBlock(currentLetter);
    
    usedIndexes.push(blockIndex);
  }
  return !hasDuplicateValues(usedIndexes);
}

function getLetterBlock(letter) {
  for (let indx = 0; indx < BLOCKS.length; indx += 1) {
    if (BLOCKS[indx].includes(letter)) {
      return indx;
    }
  }
}

function hasDuplicateValues(array) {
  for (let indx = 0; indx < array.length; indx += 1) {
    if (array.includes(array[indx], indx + 1)) {
      return true;
    }
  }
  return false;
}

//console.log(hasDuplicateValues([1, 2, 3, 4, 5]));

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));      // true 
console.log(isBlockWord('APPLE'));      // false 
console.log(isBlockWord('apple'));       // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));      // false
