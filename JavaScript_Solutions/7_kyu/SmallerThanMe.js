function smaller(arr) {
  const result = [];
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[i]) {
        count++;
      }
    }
    result.push(count);
  }

  return result;
}

const example1 = [5, 4, 3, 2, 1];
const example2 = [1, 2, 0];

console.log(countSmallerNumbersToTheRight(example1)); // Output: [4, 3, 2, 1, 0]
console.log(countSmallerNumbersToTheRight(example2)); // Output: [1, 1, 0]
