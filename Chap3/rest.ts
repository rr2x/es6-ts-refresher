namespace restNS {
  // the last parameter is the only one to use the rest keyword (...)
  // rest refers to indefinite number of array parameters

  function doSomething(a, ...others) {
    console.log(a, others, others[others.length-1]);
  }

  doSomething(1,2,3,4,5,6,7);
}