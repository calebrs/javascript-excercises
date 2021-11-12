/*
Problem:
input: a paragraph of text as a string
output: the longest sentence in that paragraph

Examples:
see code


Data Structures:
iteration mechanism
conditional to check if it's punctuation
conditional to compare sentence lengths


Algorithm:
iterate through the paragraph by each character.
  on each character: check if the character is punctuation. if it is
    save the punctuation's index
    get a slice of the paragraph from punctuation index up to that point save to a variable
    push that sentence to a new array
  
  get the minimum length senetence from the array
    



*/
function longestSentence(paragraph) {
  let punctuationIndex = 0;
  let sentenceArray = [];

  for (let indx = 0; indx < paragraph.length; indx += 1) {
    let char = paragraph[indx];
    if (isSentenceEnd(char)) {
      let sentence = paragraph.slice(punctuationIndex, indx + 1);
      sentenceArray.push(sentence);
      punctuationIndex = indx + 2;
    }
  }

  let splitSentenceArray = sentenceArray.map(sentence => sentence.split(' '));
  
  return splitSentenceArray.sort((a, b) => b.length - a.length)[0].join(' ');
}

function isSentenceEnd(char) {
  return '!.?'.includes(char);
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
  ' But, in a larger sense, we can not dedicate, we can not consecrate, ' +
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

console.log(longestSentence("To be or not to be! Is that the question?"));
// To be or not to be!
//
// The longest sentence has 6 words.