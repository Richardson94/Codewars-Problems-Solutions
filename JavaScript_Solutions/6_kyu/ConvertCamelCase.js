//https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
  let array = str.split(/-|_/);
  let converted = '';
  for (let i = 0; i <= array.length - 1; i++) {
    if (i != 0) {
      converted += ConvertCamelCase(array[i]);
    } else {
      converted += array[i];
    }
  }
  return converted;
}

function ConvertCamelCase(data) {
  let newData = '';
  for (let i = 0; i <= data.length - 1; i++) {
    if (i == 0) {
      newData += data[i].toUpperCase();
    } else {
      newData += data[i].toLowerCase();
    }
  }
  return newData;
}
console.table(toCamelCase(''));
console.table(toCamelCase('the_stealth_warrior'));
console.table(toCamelCase('The-Stealth-Warrior'));
console.table(toCamelCase('A-B-C'));
