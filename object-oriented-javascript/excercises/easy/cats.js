//Update the code to display correctly
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  
  info() {
    console.log(`My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`);
  }
}

console.log(Cat.constructor.name);
let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());