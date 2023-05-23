console.log(greeting);

var greeting = 'Hello world!';

/*It will throw an error because the greeting isn't
declared and initialized until after the console.log
function is passed 'Hello world!' as an argument

WRONG - this code actually logs 'undefined' because 
variables declared with var hoists the declaration
and initalizes it with a value of undefined, but the 
value assignment doesn't take place until 
the actual like that it is typed. If the variable was
declared with let instead of var, the hoisting would
not happend and it would throw an error.*/