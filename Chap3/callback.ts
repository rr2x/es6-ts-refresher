namespace callbackNS {
  const letMeKnowWhenComplete = (size: number, callback: () => void) => {
    let reducer = 0;
    for (let i = 1; i < size; i++) {
      reducer = Math.sin(reducer * i);
    }
    callback();
  }

  letMeKnowWhenComplete(100000000, () => console.log('Great it completed'));
}