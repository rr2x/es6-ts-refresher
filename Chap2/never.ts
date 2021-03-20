// void = does not return a value
// never = does not complete a function (prehaps an error can occur)

function oldEnough(age: number): never | boolean { // returns a union type
  if (age > 59) {
    throw Error("Too old!");
  }
  if (age <= 18) {
    return false;
  }
  return true;
}

console.log(oldEnough(58));