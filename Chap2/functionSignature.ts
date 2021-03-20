type Run = (miles: number) => boolean; // type alias

let runner: Run = function (miles: number): boolean { // function type

  if (miles > 10) {
    return true;
  }
  return false;
}

console.log(runner(9));