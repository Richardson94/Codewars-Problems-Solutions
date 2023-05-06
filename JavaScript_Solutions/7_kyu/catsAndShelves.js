// https://www.codewars.com/kata/62c93765cef6f10030dfa92b/train/javascript

function solution(start, finish) {
  let count = 0;
  while (start < finish) {
    console.log('->', start);
    if (start + 3 <= finish) {
      start += 3;
      count++;
    } else {
      start += 1;
      count++;
    }
  }
  return count;
}
