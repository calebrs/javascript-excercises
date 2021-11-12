/*
create a rectangle class

contructor has two arguments which represent the width and length



*/
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


let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20