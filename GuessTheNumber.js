let value;
for (let i = 1; i < 10; i++) {
  value = Math.round(Math.random(1, 1000));
  if (this.guess(value) == 'Correct!') {
    i = 10;
    return value;
  }
}
return value;
console.log(doTest(1));
