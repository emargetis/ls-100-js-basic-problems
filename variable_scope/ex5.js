function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();


/* 1 2 because the first print statement is logging
1 which is assigned a. Next we are declaring and 
initializing a again and it shadows the first a 
during the second print statement within the if block

WRONG - Technically, JS does hoist a variable defined 
by let, but when it does, it creates a 
'temporal dead zone' in which the variable exists but
doesn't have a value - not even of undefined like
var does.
*/