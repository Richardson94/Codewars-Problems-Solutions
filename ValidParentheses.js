function validParentheses(parens) {
  if (countCharacter('(', parens) == countCharacter(')', parens)) {
    console.log('Equitativo');
    return true;
  }
  return false;
}
function comprobeString(parensString) {}
function countCharacter(char, stringChar) {
  let value = 0;
  for (let pos = 0; pos < stringChar.length; pos++) {
    if (stringChar[pos] == char) {
      value++;
    }
  }
  return value;
}

console.log(validParentheses('(')); // false
console.log(validParentheses(')')); // false
console.log(validParentheses('')); // true
console.log(validParentheses('()')); // true
console.log(validParentheses('())')); // false
