var spreadObjNS;
(function (spreadObjNS) {
    class A {
        constructor() {
            this.aname = 'A';
        }
    }
    class B {
        constructor() {
            this.bname = 'B';
        }
    }
    const a = new A();
    const b = new B();
    const c = Object.assign(Object.assign({}, a), b);
    const d = Object.assign(a, b);
    console.log(c);
    console.log(d);
    a.aname = 'a1';
    console.log(c);
    console.log(d);
    // >>  tsc spreadObj -target 'es6'
    // >>  node spreadObj
})(spreadObjNS || (spreadObjNS = {}));
