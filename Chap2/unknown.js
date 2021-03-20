var val2 = 22;
val2 = "string value";
val2 = new Array();
if (val2 instanceof Array) { // type guard
    val2.push(33);
}
console.log(val2);
