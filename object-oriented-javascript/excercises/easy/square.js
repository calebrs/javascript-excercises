class Rectangle {
  constructor(width, recLength) {
    this.width = width;
    this.recLength = recLength;
  }
  
  getWidth() {
    return this.width;
  }
  
  getLength() {
    return this.recLength;
  }
  
  getArea() {
    return this.recLength * this.width;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25