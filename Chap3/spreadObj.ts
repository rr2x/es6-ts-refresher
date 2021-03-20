namespace spreadObjNS {
  class A {
    aname: string = 'A';
  }
  class B {
    bname: string = 'B';
  }

  const a = new A();
  const b = new B();
  const c = { ...a, ...b }; // creates a new object, unaffected by changes between "a" and "b"
  const d = Object.assign(a, b); // whatever changes on "a" and "b" will reflect on "d"
  console.log(c);
  console.log(d);

  a.aname = 'a1';
  console.log(c);
  console.log(d);

  // >>  tsc spreadObj -target 'es6'
  // >>  node spreadObj
}