function binaryFingers(binaryString) {
  const fingers = ['Thumb', 'Index', 'Middle', 'Ring', 'Pinkie'];
  const result = [];

  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === '1') {
      result.push(fingers[i]);
    }
  }

  return result;
}

console.log(binaryFingers('101')); // Output: ["Middle", "Thumb"]
console.log(binaryFingers('11111')); // Output: ["Pinkie", "Ring", "Middle", "Index", "Thumb"]
console.log(binaryFingers('00000')); // Output: []
