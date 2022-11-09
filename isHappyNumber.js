function isHappy(n) {
  let sw = false;
  let count = 0;
  while (!sw) {
    n = sumDigit(n);
    count++;
    if (n == 1) {
      sw = true;
    }
    if (count > 8) {
      return false;
    }
  }
  return true;
  // Good Luck
}
function sumDigit(n) {
  let arr = n + ''.split('');
  let sumValue = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sumValue += Square(parseInt(arr[i]));
  }
  return sumValue;
}
function Square(n) {
  return n * n;
}

console.log(isHappy(1)); //true
console.log(isHappy(7)); //true
console.log(isHappy(16)); //false
