var callNS;
(function (callNS) {
    var caller1 = {
        name: 'jon',
        collegeCourse: 'jon'
    };
    var caller2 = {
        name: 'secret',
        collegeCourse: 'secret'
    };
    function checkMyThis(age, collegeCourse) {
        console.log("What is \"this\" context: \"" + this + "\"");
        console.log("Name: \"" + this.name + "\"");
        this.age = age;
        console.log("Age: \"" + this.age + "\"");
        this.collegeCourse = collegeCourse;
        console.log("Course: \"" + this.collegeCourse + "\"");
    }
    checkMyThis(18, "bsba");
    console.log("---------");
    checkMyThis.call(caller1, 25, "bsmed");
    console.log("---------");
    checkMyThis(21, "bshrm");
    console.log("---------");
    checkMyThis.apply(caller2, ["8", "assassination"]);
    // call() changes context of "this" during the call only
    // apply() same as call() but paramters as an array
})(callNS || (callNS = {}));
