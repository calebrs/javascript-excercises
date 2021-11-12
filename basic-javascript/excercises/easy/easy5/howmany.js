/*
Problem:
input: an array of words
output: logged to the console, the word and how many times it occurs

Example: see code


Algorithm:
declare empty object

iterate through the input array
  on each element, if the element exists as a key in the object add one to the key's value.
  If it doesn't exist set it to 1

return the object

*/
function countOccurrences(array) {
  let newObject = {};

  for (let indx = 0; indx < array.length; indx += 1) {
    newObject[array[indx]] = newObject[array[indx]] + 1 || 1;
  }

  for (let key in newObject) {
    console.log(`${key} => ${newObject[key]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

/*
// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/