/*
Problem:
input: String that is a paragraph. Contains sentances that end in . ? or !
Output: The longest sentance in the input paragraph
rules:
treat anything isolated by spaces as a word
preserve the punctuation

Exmaples/Test Cases:
See code


Data Structures:
input and output strings
arrays
looping mechanisms for each sentance
looping mechanism for each word in a sentance

Algorithm:
build array of sentances -
  create empty sentance array
  create start index set to 0
  start loop that ends when the start index is greater than or equal to the length of the paragraph
  create end index, set to the index of the first punctuation
  slice the paragraph from the start index to the end index
  push the sliced sentace to the sentance array
  set the start index equal to the end index

create longest sentance variable
split the sentance array into words
iterate through the sentance array
  compare the current sentance's length with the longest sentance variable. If it's bigger, then set it equal to the longest sentance variable.

join the words back into a sentance
return the longest sentance

*/

function longestSentence(paragraph) {
  let sentenceArray = getSentanceArray(paragraph);
  let longestSentenceLength = 0;
  let longestSentence = '';

  sentenceArray.forEach(sentence => {
    let arrayOfWordsLength = sentence.split(' ').length;
    if (arrayOfWordsLength > longestSentenceLength) {
      console.log(longestSentenceLength);
      longestSentence = sentence;
      longestSentenceLength = arrayOfWordsLength;
    }
  });

  return longestSentence;
}

function getSentanceArray(paragraph) {
  let sentanceArray = [];
  let startIndex = 0;
  
  while (startIndex <= paragraph.length) {
    let endIndex = getEndIndex(paragraph, startIndex) + 1;
    let sentance = paragraph.slice(startIndex, endIndex);

    sentanceArray.push(sentance);
    startIndex = endIndex + 1;
  }
  
  return sentanceArray;
}

function getEndIndex(paragraph, startIndex) {
  let punctuationIndeces = [paragraph.indexOf('.', startIndex), paragraph.indexOf('?', startIndex), paragraph.indexOf('!', startIndex)];
  let punctuationIndecesSortedFiltered = punctuationIndeces.filter(num => num !== -1).sort();
  let endIndex = punctuationIndecesSortedFiltered[0];

  return endIndex;
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';



console.log(longestSentence(longText));
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

console.log(longestSentence(longerText));
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

console.log(longestSentence("Where do you think you're going? What's up, Doc?"));
// Where do you think you're going?
//
// The longest sentence has 6 words.

console.log(longestSentence("Is that the question? To be or not to be!"));
// To be or not to be!
//
// The longest sentence has 6 words.

//console.log(getSentanceArray(longText));
