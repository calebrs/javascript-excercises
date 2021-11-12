/*
Problem:
input: a string template that has identifiers for verbs, adverbs, adjectives, and nouns
output: the template filled out randomly with words - string
rules:
Use words from a pool of predefined values


Examples: SEE CODE Below



Data Structures
pools of random words: verbs, adverbs, nouns, adjectives
template structured in a way that I can parse/identify where the keywords are.
Way to iterate through the template
output is string
randomly choose a word for each template

Algorithm:
split the template into an array of words
iterate through the array of words
  on each word:
    if the last char of the word is not alphabetic
    save the punctuation into a string
    save the new word into word
  
  if the word equals noun, verb, adverb, or adjective:
    generate a random number between 0 and 3
    replace the word in the template with arrayindex as the random word


*/

let template1 = "The noun verb the noun's noun."
let template2 = "The adjective brown noun advb verb the adjective yellow noun, who advb verb his noun and looks around."

const NOUNS = ['cat', 'dog', 'horse', 'pig'];
const ADJECTIVES = ['blue', 'happy', 'juicy', 'gross'];
const VERBS = ['flys', 'tickles', 'eats', 'grabs'];
const ADVERBS = ['quickly', 'slowly', 'quietly', 'bashfully'];


function madlibs(template) {
  return template.split(' ')
    .map(word => {
      let punctuation = '';
      if (!isAlphabetic(word.slice(-1))) {
        punctuation = word.slice(-1);
        word = word.slice(0, -1);
      }

      if (word.includes('noun')) {
        return word.replace('noun', NOUNS[randomNumberZeroToThree()] + punctuation);
      } else if (word.includes('verb')) {
        return word.replace('verb', VERBS[randomNumberZeroToThree()] + punctuation);
      } else if (word.includes('advb')) {
        return word.replace('advb', ADVERBS[randomNumberZeroToThree()] + punctuation);
      } else if (word.includes('adjective')) {
        return word.replace('adjective', ADJECTIVES[randomNumberZeroToThree()] + punctuation);
      } else {
        return word + punctuation;
      }
    })
    .join(' ');
}

function randomNumberZeroToThree() {
  return Math.floor(Math.random() * 4);
}

function isAlphabetic(char) {
  return (char > 'a' && char < 'z') || (char > 'A' && char < 'Z');
}

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".