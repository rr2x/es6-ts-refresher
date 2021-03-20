namespace mapNS {
  const employees = [
    { name: 'tim', id: 1},
    { name: 'cindy', id: 2},
    { name: 'rob', id: 3}
  ];

  // map() interates on all array elements
  const elements = employees.map((item, index) =>
    `<div>${item.id} - ${item.name}</div>`);

  console.log(elements);
  // >> tsc find -target 'es6'
  // >> node find
}