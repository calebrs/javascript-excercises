/*
Problem:
input: array of integers
output: the array of integers sorted, based on the english translation of the numbers

Examples:


Algorithm:
create const array of the numbers in english

map the input array 
  on each element return the english word that corresponds to the number as an index
  
sort the array alphabetically

map the word array back
  on each element, return the index of that corresponds to the word.

*/
function alphabeticNumberSort(array) {
  const NUMBERS_AS_WORDS = ['zero', 'one', 'two', 'three', 'four',
                            'five', 'six', 'seven', 'eight', 'nine',
                            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                            'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  return array.map(num => NUMBERS_AS_WORDS[num])
              .sort()
              .map(word => NUMBERS_AS_WORDS.indexOf(word));
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]