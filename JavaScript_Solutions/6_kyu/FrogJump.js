//https://www.codewars.com/kata/536950ffc8a5ca9982001371

function solution(a) {
  let sw = false;
  let count = 0;
  let limit = a.length - 1;
  let Control = 0;
  while (!sw) {
    Control++;
    count += a[count];
    if (count >= 0 && count <= limit) {
    } else {
      sw = true;
    }
    if (Control > 50) {
      sw = true;
      Control = -1;
    }
  }

  return Control;
}

console.log(solution([1, 2, 2, -1])); //4
console.log(solution([1, 2, 1, 5])); //3
console.log(solution([1, 1, 1, 1])); //4
console.log(solution([1, -1])); //-1
console.log(solution([-3])); //1
