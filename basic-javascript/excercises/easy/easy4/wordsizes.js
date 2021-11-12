/*
Problem:
input: string, a sentance of words seperated by spaces
output: an object that shows the shows the number of words of different sizes

Exmaples:
SEE CODE

Data:


Algorithm:
split the sentance into an array
create the wordlength object

start iterating through the array
  on each element:
    if the current words length exists as a property in the object then add 1 to
    that property
    if not, set it to 0
    
return the object

remove non letters
input string
output a string with the non letters

create a new empty string
iterate through the input string
  at each char. if the char is between a and z and also between A and Z or a space then add it
  the string


*/
function wordSizes(string) {
  let sentance = removeNonLetters(string).split(' ');
  let wordLengths = {};
  
  if (string !== '') {
    sentance.forEach(elem => wordLengths[elem.length] = wordLengths[elem.length] + 1 || 1);
  }
  
  return wordLengths;
}

function removeNonLetters(string) {
  let newString = '';
  
  for (let indx = 0; indx < string.length; indx += 1) {
    if ((string[indx] >= 'a' && string[indx] <= 'z') || (string[indx] >= 'A' && string[indx] <= 'Z') || string[indx] === ' ' ) {
      newString += string[indx];
    }
  }
  
  return newString;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}