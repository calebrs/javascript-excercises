class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
    this.greeting = 'Meow meow!';
  }
  
  introduce() {
    console.log(`${super.introduce()} Meow meow!`); //way to call methods on the super constructor
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }
  
  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}

let myCat = new Cat('pepe', 20, 'great');
myCat.introduce();