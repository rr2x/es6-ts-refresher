namespace filterNS {
  const filterItems = [
    { name: 'jon', age:20 },
    { name: 'linda', age:22 },
    { name: 'jon', age:40 }
  ];

  // filter() returns all items from search criteria by creating a new array
  const results = filterItems.filter((item, index) => item.name === 'jon');

  console.log(results);
  // >> tsc find -target 'es6'
  // >> node find
}