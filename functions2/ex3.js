function greet() {
  console.log(`${greeting()}, ${recipient()}!`);
}

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}


greet(); // logs: Good morning, Launch School!