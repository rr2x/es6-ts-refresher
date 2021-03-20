namespace findNS {
  const items = [
    { name: 'jon', age:20 },
    { name: 'linda', age:22 },
    { name: 'jon', age:40 }
  ];

  // find() grabs 1st instance of element from array
  const jon = items.find(item => item.name ==='jon');

  console.log(jon);

  // >> tsc find -target 'es6'
  // >> node find
}