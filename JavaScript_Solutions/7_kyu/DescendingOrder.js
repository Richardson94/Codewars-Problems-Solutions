//https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n) {
  var arr = n + '';
  arr = arr.split('');
  var sorted = [];
  arr.forEach((element) => {
    sorted.push(parseInt(element));
  });
  sorted = sorted.sort((a, b) => b - a);
  var value = 0;
  for (let i = 0; i <= sorted.length - 1; i++) {
    if (i == 0) {
      value = parseInt(sorted[i]);
    } else {
      value = value * 10 + parseInt(sorted[i]);
    }
  }
  return value;
}
console.log(descendingOrder(1201)); //54124
console.log(descendingOrder(145263)); //362541
console.log(descendingOrder(123456789)); //987654321
