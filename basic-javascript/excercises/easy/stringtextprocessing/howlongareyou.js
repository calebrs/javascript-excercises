/*
Problem:
input: string
output: an array with each element being the word a space then the words length

Example


Algorithm:
  split the string into an array
  iterate through the array
    on each word save the word followed bu a space then the length
    add it to a new array

  join the array
  return the array
*/
function wordLengths(str) {
  if (!str) return [];
  console.log(str);
  return str.split(' ')
    .map(word => `${word} ${word.length}`);
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []