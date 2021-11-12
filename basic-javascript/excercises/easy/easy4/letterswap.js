/*
ProblemL
input: string of words seperated by spaces
output: the last letter of the word switched out with the first letting of the word 

Examples:
see code

Algorithm:
declare words variable set equal to the string split by the spaces

iterate through each word in the words array
  on each word split the word into characters
    save the last element to a variable
    save the first element to a variable
    reassign the first and last variables to the saved variables
    join the word back together
  join the sentence back together

return the new sentence


*/
function swap(string) {
  return string.split(' ').map(word => {
    let wordArray = word.split('');
    [wordArray[0], wordArray[wordArray.length -1]] = [wordArray[wordArray.length -1], wordArray[0]];
    return wordArray.join('');
  }).join(' ');
  
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"