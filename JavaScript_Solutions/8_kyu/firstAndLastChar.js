function removeChar(str) {
  let result = '';
  for (let index = 1; index < str.length - 1; index++) {
    result += str[index];
  }
  return result;
}

console.log(removeChar('eloquent')); //'loquen'
console.log(removeChar('country')); //'ountr'
console.log(removeChar('person')); //'erso'
console.log(removeChar('place')); //'lac'
console.log(removeChar('ooopsss')); //'oopss'
