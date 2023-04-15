//https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b) {
  return convertToHex(r) + convertToHex(g) + convertToHex(b);
}
function convertToHex(value) {
  let hexValue;
  value > 255 ? (value = 255) : (value = value);
  if (value > 0) {
    hexValue = value.toString(16).toUpperCase();
  }
  if (value == 0) {
    hexValue = '00';
  } else {
    if (value < 0) {
      hexValue = '00';
    }
  }
  if (hexValue.length == 1) {
    hexValue = '0' + hexValue;
  }

  return hexValue;
}

console.log(rgb(0, 0, 0)); // 000000
console.log(rgb(0, 0, -20)); // 000000
console.log(rgb(255, 255, 255)); // FFFFFF
console.log(rgb(173, 255, 47)); // ADFF2F
