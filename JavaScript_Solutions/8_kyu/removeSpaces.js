//https://www.codewars.com/kata/57eae20f5500ad98e50002c5

function noSpace(x) {
  if (x.length == 0) {
    return '';
  } else {
    var newString = '';
    for (let i = 0; i < x.length; i++) {
      if (x[i].charCodeAt(0) != 32) {
        newString = newString + x[i];
      }
    }
    return newString;
  }
}
