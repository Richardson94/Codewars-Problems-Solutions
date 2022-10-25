function squareSum(numbers) {
  let val = 0;
  numbers.forEach((element) => {
    val += Math.pow(element, 2);
  });
  return val;
}

console.log(squareSum([0, 3, 4, 5]));
