//Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names.

// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

Object.prototype.ancestors = function() {
  let result = [];
  let ancestor = Object.getPrototypeOf(this);
  
  while (true) {
    if (ancestor.hasOwnProperty('ancestors')) {
      result.push('Object.prototype');
      break;
    }
    result.push(ancestor.name);
    ancestor = Object.getPrototypeOf(ancestor);
  }
  return result;
}

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']