let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

/* We are iteration through the values and none of them are strictly equal to true

WRONG - the names of the properties are strings so none of them are equal to true, not even 'true'.

*/