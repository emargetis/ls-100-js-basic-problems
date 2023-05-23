function calculateBMI(weightKG, heightCM) {
  let heightM = heightCM / 100;
  return (weightKG / heightM**2).toFixed(2);
}


console.log(calculateBMI(80, 180)); // "24.69"