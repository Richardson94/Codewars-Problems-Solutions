function isIsogram(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (j != i) {
        if (str[i].toUpperCase() == str[j].toUpperCase()) {
          return false;
        }
      }
    }
  }
  return true;
}

console.log(isIsogram('Dermatoglyphics')); //true
console.log(isIsogram('moose')); //false
console.log(isIsogram('aba')); //false
