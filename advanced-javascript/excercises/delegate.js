"use strict";

/*
delegates behavior of a method to another object's method

*/

function delegate(obj, methodName, ...args) {
  return function() {
    obj[methodName](...args);
  }
}

let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };

// baz.qux();          // logs 'changed'