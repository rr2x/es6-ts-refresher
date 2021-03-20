namespace bindNS {
  class A {
    name: string = 'A';
    go() {
      console.log(this.name);
    }
  }
  class B {
    name: string = 'B';
    go() {
      console.log(this.name);
    }
  }

  const a = new A();
  a.go();
  const b= new B();
  b.go = b.go.bind(a); // change caller to class A instead of class B
  b.go();

  // bind() changes the context of "this" in present and future
  // nodejs = object global
  // browser = object window
}