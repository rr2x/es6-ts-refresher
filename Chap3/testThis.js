var testThis;
(function (testThis) {
    function MyFunction() {
        console.log(this);
    }
    MyFunction(); // "this" in this context is the calling object
    var test = new MyFunction(); // "this" is this context is the new variable "test"
    test;
})(testThis || (testThis = {}));
