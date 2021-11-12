"use strict";

let obj = {
  name: 'Caleb',
}

let obj2 = {
  name: 'Ellie',
}

function myBind(func, context, ...args) {
  return function() {
    func.apply(context, args); //use the apply method instead of call so the function can accept multiple arguments.
  }
}

let myFunc = function() {
  console.log(`I am ${this.name}`);
}

let myBoundFunc = myBind(myFunc, obj);
myBoundFunc.call(obj2);