String.prototype.toJadenCase = function () {
  let arr = this.split(' ');
  let value = '';
  for (let i = 0; i <= arr.length - 1; i++) {
    if (i == arr.length - 1) {
      value += converJaden(arr[i]);
    } else {
      value += converJaden(arr[i]) + ' ';
    }
  }
  return value;
};

function converJaden(str) {
  let stringChain = '';
  let arr = str.split('');
  for (let i = 0; i <= arr.length - 1; i++) {
    if (i == 0) {
      stringChain += arr[i].toUpperCase();
    } else {
      stringChain += arr[i].toLowerCase();
    }
  }
  return stringChain;
}
var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
