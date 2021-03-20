namespace AbstractNamespace {
  // abstract classes cannot be instantiated
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}

    // no implementation and needs to be implemented by the inheriting class
    abstract updateWheelCount(newWheelCount: number): void;

    showNumberOfWheels() {
      console.log(`moved ${this.wheelCount} miles`);
    }
  }

  class Motorcycle extends Vehicle {
    constructor() {
      super(2);
    }
    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log(`Motorcycle has ${this.wheelCount}`);
    }
  }

  class Automobile extends Vehicle {
    constructor() {
      super(4);
    }
    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount}`);
    }
    showNumberOfWheels() { //overriding
      console.log(`moved ${this.wheelCount} miles`);
    }
  }

  const motorCycle = new Motorcycle();
  motorCycle.updateWheelCount(1);
  const autoMobile = new Automobile();
  autoMobile.updateWheelCount(3);
}
