var Person = /** @class */ (function () {
    function Person(msg) {
        this.msg = msg;
    }
    // msg: string = "empty";
    Person.prototype.speak = function () {
        console.log("speak " + this.msg);
    };
    return Person;
}());
var tom = new Person("hello");
tom.speak();
