//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

multiplicationTable = function (size) {
  const table = Array(size)
    .fill(null)
    .map(() => Array(size).fill(null));

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      table[i - 1][j - 1] = i * j;
    }
  }

  return table;
};

console.log(multiplicationTable(3));
