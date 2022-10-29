function lastFibDigit(n) {
  if (n > 1) {
    let LastDigit = '0';
    a = 0;
    b = 1;
    c = 0;
    let value = Math.trunc(n / 60) * 60 + 2;
    if (value > n) {
      c = 1;
    }
    for (let i = Math.trunc(n / 60) * 60 + 2; i <= n; i++) {
      c = a + b;
      if (c + ''.length > 1) {
        c = c % 10;
      }
      a = b;
      b = c;
      console.log('iteracion', i, 'valor->', c);
    }
    return c;
  } else {
    return 1;
  }
}
console.log(lastFibDigit(1)); //1
console.log(lastFibDigit(21)); //6
console.log(lastFibDigit(302)); //1
console.log(lastFibDigit(4003)); //7
console.log(lastFibDigit(273172946217361)); //1
