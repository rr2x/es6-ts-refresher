namespace mapCollectionNS {

  // Map: collection of key-value pairs, aka dictionary
  // each member as a unique key.
  const mappedEmp = new Map();

  mappedEmp.set('linda', { fullname: 'Linda Johnson', id: 1 });
  mappedEmp.set('jim', { fullname: 'Jim Thomson', id: 2 });
  mappedEmp.set('pam', { fullname: 'Pam Dryer', id: 4 });

  console.log(mappedEmp);
  console.log('get', mappedEmp.get('jim')); // get member via key
  console.log('size', mappedEmp.size);

  for(let [key, val] of mappedEmp) {
    console.log('iterate', key, val);
  }

  // >> tsc mapCollection -target 'es6'
  // >> node mapCollection
}