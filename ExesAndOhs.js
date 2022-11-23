function XO(str) {
  var countX = 0;
  var countO = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'x' || str[i] == 'X') {
      countX++;
    }
    if (str[i] == 'o' || str[i] == 'O') {
      countO++;
    }
  }
  return countO == countX ? true : false;
}
console.log(XO('xo'));
console.log(XO('xxOo'));
console.log(XO('xxxm'));
console.log(XO('Oo'));
console.log(XO('ooom'));

