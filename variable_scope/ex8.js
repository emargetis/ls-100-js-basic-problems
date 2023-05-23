let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

/* 
2 - when b is passed in as a parameter to 
myFunction a is the argument within the function and it 
overshadows the declararion of a on line 1. 
*/