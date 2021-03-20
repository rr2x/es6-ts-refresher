var destructuringNS;
(function (destructuringNS) {
    var getEmployee = function (id) {
        return ({
            name: 'John',
            age: 35,
            address: '123 St',
            country: 'United States'
        });
    };
    var _a = getEmployee(22), fullName = _a.name, age = _a.age;
    console.log('employee', fullName, age);
    var getEmployeeWorkInfo = function (id) {
        return ([
            id, 'Office St', 'France'
        ]);
    };
    var _b = getEmployeeWorkInfo(33), id = _b[0], officeAddress = _b[1];
    console.log('employee', id, officeAddress);
})(destructuringNS || (destructuringNS = {}));
