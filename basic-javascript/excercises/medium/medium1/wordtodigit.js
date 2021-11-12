/*
Problem:
input: sentence that's a string
Examples: a string with every occurence of number words converted to digits


Data Structures
chnage sentence into array
iteration mechanic
way to handle punctuation


Algorithm:
declare lookup table
create new array
split the sentence into an array of words
  iterate through the sentence, if the last character of the word is not alphabetic
    save it as a variable
  if the word matches the lookup table. push the index of the word to the new array plus the punctuation

  if its not a number push to the array


*/
function wordToDigit(string) {
  const NUMBER_LOOKUP = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return string.split(' ')
    .map(word => {
      let punctuation = '';
      if (!isAlphabetic(word.slice(-1))) {
        punctuation = word.slice(-1);
        word = word.slice(0, -1);
      }

      if (NUMBER_LOOKUP.includes(word)) {
        return `${NUMBER_LOOKUP.indexOf(word)}${punctuation}`;
      }
      return word + punctuation;
    }).join(' ');
}

function isAlphabetic(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'A');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."