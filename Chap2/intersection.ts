let obj: { name: string } & { age: number } = { // type of both the following
  name: 'tom',
  age: 25
}

console.log(obj);