function allMatches(array, regex) {
  let newArray = [];
  array.forEach(word => {
    if (regex.test(word)) {
      newArray.push(word);
    }
  })
  
  return newArray;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/));