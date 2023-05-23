let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.splice(energy.indexOf('fossil'), 1, 'geothermal');

console.log(energy);