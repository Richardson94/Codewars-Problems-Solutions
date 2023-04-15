//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

function solution(str, ending) {
  const strArray = str.split('');
  const endingArray = ending.split('');

  if (strArray.length < endingArray.length) {
    return false;
  } else {
    var num = 0;
    for (
      let i = strArray.length - endingArray.length;
      i < strArray.length;
      i++
    ) {
      if (strArray[i] != endingArray[num]) {
        return false;
      }
      num++;
    }
    return true;
  }
}
console.log(solution('abcde', 'cde'));
