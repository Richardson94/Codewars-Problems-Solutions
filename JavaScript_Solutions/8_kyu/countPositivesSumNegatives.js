//https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) {
    return [];
  } else {
    var numPositive = 0;
    var numNegative = 0;
    for (let i = 0; i < input.length; i++) {
      const element = input[i];
      if (element > 0) {
        numPositive++;
      } else {
        numNegative = numNegative + input[i];
      }
    }
    return [numPositive, numNegative];
  }
}
