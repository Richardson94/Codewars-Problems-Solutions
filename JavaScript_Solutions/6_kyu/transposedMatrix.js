//https://www.codewars.com/kata/52fba2a9adcd10b34300094c/solutions/javascript

function transpose(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const transposed = Array(numCols)
    .fill(null)
    .map(() => Array(numRows));
  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  return transposed;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(transpose(matrix)); // expected [[1, 4], [2, 5], [3, 6]]
