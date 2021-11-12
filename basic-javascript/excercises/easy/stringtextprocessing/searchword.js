/*
Problem:
input: word and string or text
output: a number repersengint how many times the word apears in the text

Examples


Algorithm:
split the text into an array
  iterat through the array
  on each iteration check if the string ends with a puncuation
  if it does slice it off and assign it to the current element
  if the current element equals the input word add it to a running total

return the running total

*/
const PUNCUATION = ['.', ',', '!', ':', ';', '?'];

function searchWord(word, text) {
  return text.split(' ')
    .reduce((total, elem) => {
      /*
      if (elem.endsWith(...PUNCUATION)) {
        elem = word.slice(0, -1);
        console.log(elem);
      }
      */
      
      if (elem.toLowerCase() === word) {
        return total + 1;
      } else {
        return total;
      }
    }, 0)
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

console.log(searchWord('sed', text));     // 4
console.log(searchWord('est', text));     // 0
console.log(searchWord('est,', text));    // 2