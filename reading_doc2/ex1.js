let iceCreamTaste = 'chocolate'; //Missing a semi and variable could be in camelCase not snake_case
let iceCreamDensity = 10; //Missing a semi and variable could be in camelCase not snake_case

while (iceCreamDensity > 0) { //Fixed iceCreamDensity, moved bracket up, and put a space in between while
  console.log('Drip...'); //removed 1 indent of 2 spaces
  iceCreamDensity -= 1; //Fixed iceCreamDensity, left decrement in place because the -- should only be used within for loops, removed 1 indent of 2 spaces
}

console.log('The ' + iceCreamTaste + ' ice cream melted.'); //Aded spaces between concatentation and fixed iceCreamTaste