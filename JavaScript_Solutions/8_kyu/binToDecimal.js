//https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/train/javascript

function binToDec(bin) {
  if (!/^[01]+$/.test(bin)) {
    return 'Invalid binary number';
  }

  let decimal = 0;
  const length = bin.length;

  for (let i = 0; i < length; i++) {
    decimal += parseInt(bin[length - i - 1]) * Math.pow(2, i);
  }

  return decimal;
}
