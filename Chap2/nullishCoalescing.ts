namespace nullishCoalescingNS {
  const val1 = undefined;
  const val2 = 10;
  // nullish coalescing:
  // if val1 is not null or undefined and has value return it
  // else, return val2
  const result = val1 ?? val2;
  console.log(result);
}