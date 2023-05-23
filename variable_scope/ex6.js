let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

/* 
false - while the block scope will set b to true, this is 
only within the block scope and b was initially declared
and assigned a value of fals.e
*/