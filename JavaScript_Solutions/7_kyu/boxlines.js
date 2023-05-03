//https://www.codewars.com/kata/6129095b201d6b000e5a33f0/javascript
function f(x, y, z) {
  return x * (y + 1) * (z + 1) + y * (z + 1) * (x + 1) + z * (x + 1) * (y + 1);
}

console.log(f(2, 1, 1)); //return 20

console.log(f(1, 2, 3)); //return 46

console.log(f(2, 2, 2)); //return 54
