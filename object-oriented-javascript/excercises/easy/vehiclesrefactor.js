class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  
  getWheels() {
    return this.wheels;
  }
  
  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  getWheels() {
    return 4;
  }
}

class Motorcycle extends Vehicle {
  getWheels() {
    return 2;
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model)
    this.payload = payload;
  }
  
  getWheels() {
    return 6;
  }
}

let newCar = new Car('Ford', 'F-150');
console.log(newCar.info());

//do not need to rewrite constructors if the properties are all the same.