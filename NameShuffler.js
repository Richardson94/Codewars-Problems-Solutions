// #Name Shuffler
function nameShuffler(str) {
  var pos = obtainPoint(str);
  if (pos != 0) {
    var Shuffler = '';
    for (let i = pos + 1; i < str.length; i++) {
      Shuffler += str[i];
    }
    Shuffler += ' ';
    for (let j = 0; j < pos; j++) {
      Shuffler += str[j];
    }
    return Shuffler;
  } else {
    return 'no spaces';
  }
}
function obtainPoint(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) == 32) {
      return i;
    }
  }
  return 0;
}

console.log(nameShuffler('john McClane'));
