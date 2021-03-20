// function getLength<T>(arg: T): number {
//   if(arg.hasOwnProperty("length")) { //check if we have this property
//     return arg["length"];
//   }
//   return 0;
// }

interface HasLength {
  length: number;
}

// generic contraint using "extends" on symbol T
function getLength<T extends HasLength>(arg: T): number {
  return arg.length;
}

console.log(getLength<number>(22));
console.log(getLength("hello world"));
