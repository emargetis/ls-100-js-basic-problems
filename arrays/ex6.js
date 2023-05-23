let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...


for (let i = 0; i < vocabulary.length; i++) {
  for (let w = 0; w < vocabulary[i].length; w++) {
    console.log(vocabulary[i][w]);
  }
}



