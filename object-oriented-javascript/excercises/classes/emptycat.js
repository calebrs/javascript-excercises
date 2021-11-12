class Cat {
  constructor(name) {
    this.name = name;
  }
  static genericGreeting() {
    console.log(`Hello, I am a cat`)
  }
  
  personalGreeting() {
    console.log(`Hello, my name is ${this.name}`)
  }
}

Cat.genericGreeting();