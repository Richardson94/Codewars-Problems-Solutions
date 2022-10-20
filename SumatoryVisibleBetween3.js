//#sumatory of numbers if the number is divisible betwen 3 or 5
function solution(number) {
  if (number < 0) {
    return 0;
  } else {
    var sumatoria = 0;
    for (let i = 1; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sumatoria = sumatoria + i;
      }
    }
    return sumatoria;
  }
}

console.log(solution(10));
