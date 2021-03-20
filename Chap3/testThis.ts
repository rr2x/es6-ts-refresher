namespace testThis {
  function MyFunction() {
    console.log(this);
  }

  MyFunction(); // "this" in this context is the calling object (Object [global])

  let test = new MyFunction(); // "this" is this context is the new variable "test"
}