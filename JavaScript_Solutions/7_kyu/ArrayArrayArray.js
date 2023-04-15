//https://www.codewars.com/kata/57eb936de1051801d500008a

function explode(x) {
  if (x[0] != parseInt(x[0]) && x[1] != parseInt(x[1])) {
    return 'Void!';
  } else {
    var newArray = [];
    if (x[0] == parseInt(x[0])) {
      for (let i = 1; i <= x[0]; i++) {
        newArray.push(x);
      }
    }
    if (x[1] == parseInt(x[1])) {
      for (let i = 1; i <= x[1]; i++) {
        newArray.push(x);
      }
    }
    return newArray;
  }
}
console.log(explode(['a', 3]));
