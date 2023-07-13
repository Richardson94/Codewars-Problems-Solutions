function digPow(n, p) {
  const digits = Array.from(String(n), Number); // Convert n to an array of digits
  const sum = digits.reduce(
    (acc, digit, index) => acc + Math.pow(digit, p + index),
    0
  );

  if (sum % n === 0) {
    return sum / n;
  } else {
    return -1;
  }
}
