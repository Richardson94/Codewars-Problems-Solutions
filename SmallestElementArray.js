function nthSmallest(arr, pos) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = tmp;

        sorted = false;
      }
    }
  }
  return arr[pos - 1];
}
console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5));
