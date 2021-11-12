/*
Problem:
input: a word and a list of possible anagrams
output: a list of all the anagrams of the word in the input list

Examples: SEE TEST CASES


Data Structures:
class with constructor
word property 
list property

match method

Algorithm:
if both words are equal return false

  sort word1
  sor word2

if they are equal reutrn true else return false

*/
class Anagram {
  constructor(word) {
    this.word = word;
  }

  isAnagram(word) {
    let word1 = this.word.toLowerCase();
    let word2 = word.toLowerCase();

    if (word1 === word2) return false;

    let word1Sorted = word1.split('').sort().join('');
    let word2Sorted = word2.split('').sort().join('');

    return word2Sorted === word1Sorted;
  }

  match(list) {
    let result = [];

    list.forEach(word => {
      if (this.isAnagram(word)) {
        result.push(word);
      }
    });

    return result;
  }
}
module.exports = Anagram;