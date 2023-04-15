//https://www.codewars.com/kata/5583090cbe83f4fd8c000051

function digitize(n) {
  var cad = n + '';
  if (n == null || cad.length == 0) {
    return '';
  } else {
    var vector = new Array(cad.length - 1);
    var i = 0;
    for (let j = cad.length - 1; j >= 0; j--) {
      vector[i] = parseInt(cad[j], 0);
      i = i + 1;
    }
    return vector;
  }
}
