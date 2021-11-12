"use strict";

/*
Problem: 
input: none
output: an object iwth three methods, push pop, and printstack

algorithm:
create function 
declare an array outside of the return statment that keeps track of the stack

*/
function newStack() {
  let stack = [];

  return {
    push(item) {
      stack.push(item);
      console.log(`${item} added to the stack!`);
    },

    pop() {
      stack.pop();
      console.log(`${stack[stack.length - 1]} was removed from the stack!`);
    },

    printStack() {
      stack.forEach(elem => console.log(elem));
    },
  }
}

let animals = newStack();
animals.push('dog');
animals.push('horse');
animals.printStack();
animals.pop()
