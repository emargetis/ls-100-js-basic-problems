function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

/* 1 because a is declared outside of the if block
scope so it is accessible by the console.log function*/