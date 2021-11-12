/*
Problem:
input: two objects
output: true or false. whether or not the two objects have the same key value pairs


Examples:



Algorithm:

loop through first object
  on each proptery if cuurent prop is in the other object and has the sam evalue as the other obj move on


*/
function objectsEqual(obj1, obj2) {
  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key) || obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}


console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false