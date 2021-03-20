class ClassA {
  static typeName: string = "static value";
  constructor() {}

  static getFullName() {
    return "ClassA " + ClassA.typeName;
  }
}

const d = new ClassA();
console.log(ClassA.typeName);

// example usage:

class Runner {
  static lastRunTypeName: string;
  constructor(private typeName: string) {}

  run() {
    Runner.lastRunTypeName = this.typeName;
  }
}

const a = new Runner("a");
const b = new Runner("b");

b.run();
a.run();

console.log(Runner.lastRunTypeName);

// static members can be called by both static and instance members
// BUT static members can't call instance members
