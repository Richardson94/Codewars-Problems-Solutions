//https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  var numSaved = 0;
  var countSaved = 0;

  for (let i = 0; i < A.length; i++) {
    var num = A[i];
    var Count = 0;
    for (let j = 0; j < A.length; j++) {
      if (num == A[j]) {
        Count++;
      }
    }
    if (Count % 2 != 0) {
      countSaved = Count;
      numSaved = num;
    }
  }
  return numSaved;
}
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
