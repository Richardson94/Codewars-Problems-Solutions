//https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string) {
  const arr = string.split('');
  let sw = false;
  let charCode = 97;
  while (!sw && charCode < 123) {
    let Exist = false;
    for (let i = 0; i <= arr.length - 1; i++) {
      if (charCode == parseInt(arr[i].toLowerCase().charCodeAt())) {
        Exist = true;
        i = arr.length;
      }
    }
    if (Exist) {
      charCode++;
    } else {
      sw = true;
    }
  }
  return charCode - 1 === 122 ? true : false;
}
console.log(isPangram('The quick brown fox jumps over the lazy dog')); //true
console.log(isPangram('This is not a pangram.')); //false
