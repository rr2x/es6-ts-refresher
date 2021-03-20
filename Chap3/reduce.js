var reduceNS;
(function (reduceNS) {
    const allTrucks = [2, 5, 7, 10];
    const initialCapacity = 0;
    // reduce([(totalValue, currentElementValue) => ...calculation to accumulate totalValue], [initialValue])
    // iterate values of array then compute the total, "currentElementValue" is changed every iteration
    const allTonnage = allTrucks.reduce((totalCapacity, currentCapacity) => totalCapacity + currentCapacity, initialCapacity);
    console.log(allTonnage);
    // >> tsc find -target 'es6'
    // >> node find
})(reduceNS || (reduceNS = {}));
