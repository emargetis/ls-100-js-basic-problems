function repeat(reps, str) {
  let repeat = '';
  for (let i = 0; i < reps; i++) {
    repeat = repeat + str;
  }
  return repeat;
}


console.log(repeat(3, 'ha'));  // 'hahaha'