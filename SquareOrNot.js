function squareOrSquareRoot(array) {
  if (array == null || array.length == 0) {
    return array;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (Math.sqrt(array[i]) == parseInt(Math.sqrt(array[i]))) {
        array[i] = Math.sqrt(array[i]);
      } else {
        array[i] = Math.pow(array[i], 2);
      }
    }
  }
  return array;
}

console.log(squareOrSquareRoot([1, 2, 3, 4, 5, 6]));
