namespace someEveryNS {
  const widgets = [
    { id: 1, color: 'blue'},
    { id: 2, color: 'yellow'},
    { id: 3, color: 'orange'},
    { id: 4, color: 'blue'}
  ];

  // some() returns true if at least one item is present, otherwise false
  // can be regarded as OR (true OR true = true, true OR false = true)
  console.log('some are blue', widgets.some(item => item.color ==='blue'));

  // every() returns true if ALL of the items are of the condition, otherwise false
  // can be regarded as AND (true AND true = true, true AND false = false)
  console.log('every one is blue', widgets.every(item => item.color === 'blue'));
}