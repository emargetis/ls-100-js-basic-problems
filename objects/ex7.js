let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = [];

for (let key in vehicle) {
  keys.push(key);
}

console.log(keys);


let keys2 = Object.keys(vehicle);

console.log(keys2);