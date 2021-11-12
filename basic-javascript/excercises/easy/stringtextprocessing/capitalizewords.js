/*
prob
in string
out the same string, but the first letter of each word is cappsed

exam


algo
split the input string into an array
iterate through the input string array
  on each iteration slice the first letter, caps it, then add it to the rest of the word uncappsed

join the array back
  


*/
function wordCap(str) {
  return str
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'