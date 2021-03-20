const myPromise = new Promise((resl, rejc)=> {
  setTimeout(() => rejc('failed'), 500);
});

myPromise
  .then(done => console.log('done'))
  .catch(e => console.log(e));
