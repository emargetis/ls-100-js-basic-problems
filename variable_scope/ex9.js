const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

/* It will thow an error because we can't reassign the 
value of a given that it was declared with const. */