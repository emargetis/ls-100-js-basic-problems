function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree();


/* Actually doesn't output anything 
because the () are mising to invoke the 
function. If we invoke it will output:
3 / 1 = 3
6 / 2 = 3 ...
30 / 10 = 3
*/