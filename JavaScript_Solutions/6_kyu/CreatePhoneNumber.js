//https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers) {
  let stringNumber = '';
  for (let i = 0; i <= numbers.length - 1; i++) {
    switch (i) {
      case 0:
        stringNumber += '(';
        break;
      case 3:
        stringNumber += ') ';
        break;
      case 6:
        stringNumber += '-';
        break;
    }
    stringNumber += numbers[i];
  }
  return stringNumber;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //"(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); //"(111) 111-1111"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //"(123) 456-7890"
