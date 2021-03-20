class Vehicle { // base/parent class
  constructor(protected wheelCount: number) {} // use "protected" instead of "private" so that child class can access these members

  showNumberOfWheels() {
    console.log(`moved ${this.wheelCount} miles`);
  }
}

// children classes
class Motorcycle extends Vehicle { // extends = inherit from base class
  constructor() {
    super(2); // super = instance of base class
  }

  updateWheelCount(newWheelCount: number) {
    this.wheelCount = newWheelCount;
  }

}

class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motorCycle = new Motorcycle();
motorCycle.showNumberOfWheels();

const autoMobile = new Automobile();
autoMobile.showNumberOfWheels();