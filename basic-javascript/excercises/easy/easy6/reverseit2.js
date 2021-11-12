/*
Problem:
input: a string, might be sentence
output: each word in the sentence reversed

Examples:


Algorithm:
split the sentance into words
  on each word reverse the word

return the array

*/
function reverseWords(string) {
  return string.split(' ').map(elem => elem.split('').reverse().join('')).join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"