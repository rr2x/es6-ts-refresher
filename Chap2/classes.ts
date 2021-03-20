class Person {
  constructor(private readonly msg: string) {}
  // msg: string = "empty";
  speak() {
    // this.msg = "speak " + this.msg;
    console.log(this.msg);
  }
}

const tom = new Person("hello");
tom.speak();