var OptionalChainingNS;
(function (OptionalChainingNS) {
    var _a;
    var Automobile = /** @class */ (function () {
        function Automobile(wheels) {
            this.wheels = wheels;
        }
        return Automobile;
    }());
    var car = new Automobile({ count: undefined });
    // optional chaining.. if object is null or undefined, do not continue with the next property
    console.log("car ", car);
    console.log("wheels ", car === null || car === void 0 ? void 0 : car.wheels);
    console.log("count ", (_a = car === null || car === void 0 ? void 0 : car.wheels) === null || _a === void 0 ? void 0 : _a.count);
    // old way of writing:
    var count = !car ? 0
        : !car.wheels ? 0
            : !car.wheels.count ? 0
                : car.wheels.count;
})(OptionalChainingNS || (OptionalChainingNS = {}));
