// async functions are expected to return a Promise
const delayedResult = async () =>
  new Promise((resl,rejc) =>
    setTimeout(() => resl('completed'),3000));

//IIFE (immediately invoked function expression): declared and executed.
(async function execAsyncFunc() {
  const result = await delayedResult();
  console.log(result);
})();
