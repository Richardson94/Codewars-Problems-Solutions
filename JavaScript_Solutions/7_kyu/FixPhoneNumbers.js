//https://www.codewars.com/kata/596343a24489a8b2a00000a2

function isItANum(str) {
  let result = '';
  str.split('').forEach((element) => {
    if (element == parseInt(element)) {
      result += element;
    }
  });
  return result.length == 11 && result[0] == 0 ? result : 'Not a phone number';
}
console.log(isItANum('S:)0207ERGQREG88349F82!efRF)'));
console.log(isItANum('sjfniebienvr12312312312ehfWh'));
console.log(isItANum('0192387415456'));
console.log(isItANum('v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165'));
console.log(isItANum('stop calling me no I have never been in an accident'));
