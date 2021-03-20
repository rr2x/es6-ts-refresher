namespace setNS {
  const userIds = [
    1,2,1,3
  ];

  // set: collection of unique values or objects
  // similar to array but are optimized for unique collections
  const uniqueIds = new Set(userIds);
  console.log(uniqueIds);

  uniqueIds.add(10); // if array: .push, if set: .add
  console.log('add 10', uniqueIds);

  console.log('has', uniqueIds.has(3)); // find if it exists

  console.log('size', uniqueIds.size); // check "quantity" not "length"

  for (let item of uniqueIds) {   // for-let-of, to iterate
    console.log('iterate', item)
  }

  // >> tsc set -target 'es6'
  // >> node set
}