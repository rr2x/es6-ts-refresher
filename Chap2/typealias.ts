type Points = 20 | 30 | 40 | 50; // numeric literal type

let score: Points = 20; // declare score as Points type and give value from one of the possible values,
                        // if given a different value, compilation will fail

console.log(score);

// object literal type declaration:

type ComplexPerson = {
  name: string,
  age: number,
  birthday: Date,
  married: boolean,
  address: string
}