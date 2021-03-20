console.log('Lets begin.');

// asynchronous code runs outside the current callstack.
setTimeout(() => console.log('I waited, done'), 3000);

console.log('is finished?');