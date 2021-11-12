//remove the vowels from the string

function removeVowels(arr) {
  return arr.map(string =>
    string.split('')
          .filter(char => !'aeiouAEIOU'.includes(char)
          ).join('')
        );
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]