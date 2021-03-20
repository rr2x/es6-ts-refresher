var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.getFullName = function () {
        return "ClassA " + ClassA.typeName;
    };
    ClassA.typeName = "static value";
    return ClassA;
}());
var d = new ClassA();
console.log(ClassA.typeName);
// example usage:
var Runner = /** @class */ (function () {
    function Runner(typeName) {
        this.typeName = typeName;
    }
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.typeName;
    };
    return Runner;
}());
var a = new Runner("a");
var b = new Runner("b");
b.run();
a.run();
console.log(Runner.lastRunTypeName);
