// complete the function
function solution(string) {
  let result = string[0];
  for (let index = 1; index < string.length; index++) {
    if (string[index] === string[index].toUpperCase()) {
      result += ' ';
    }
    result += string[index];
  }
  return result;
}

console.log(solution('camelCasing')); // 'camel Casing',
console.log(solution('camelCasingTest')); //, 'camel Casing Test',
