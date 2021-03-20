namespace OptionalChainingNS {
  interface Wheels {
    count?: number;
  }

  interface Vehicle {
    wheels?: Wheels;
  }

  class Automobile implements Vehicle {
    constructor(public wheels?: Wheels) {}
  }

  const car: Automobile | null = new Automobile({ count: undefined });

  // optional chaining.. if object is null or undefined, do not continue with the next property
  console.log("car ", car);
  console.log("wheels ", car?.wheels);
  console.log("count ", car?.wheels?.count);

  // old way of writing:
  const count = !car ? 0
    : !car.wheels ? 0
    : !car.wheels.count ? 0
    : car.wheels.count;
}