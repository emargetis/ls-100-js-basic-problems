const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

/* { firstName: 'Jane', lastName: 'Doe'} - the value
of firstName gets reassigned within the object a even 
though a is declared with const because the values 
are still mutable. */