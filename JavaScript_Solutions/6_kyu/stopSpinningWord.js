function spinWords(string) {
  let result = '';
  let stringArray = string.split(' ');
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length >= 5) {
      stringArray[i] = reverse(stringArray[i]);
    }
    result += stringArray[i];

    if (i < stringArray.length - 1) {
      result += ' ';
    }
  }

  return result;
}
function reverse(string) {
  let result = '';
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}
console.log(spinWords('Welcome')); // "emocleW");
console.log(spinWords('Hey fellow warriors')); // "Hey wollef sroirraw");
console.log(spinWords('This is a test')); // "This is a test");
console.log(spinWords('This is another test')); // "This is rehtona test");
console.log(spinWords('You are almost to the last test')); // "You are tsomla to the last test");
console.log(spinWords('Just kidding there is still one more')); // "Just gniddik ereht is llits one more");
console.log(spinWords('Seriously this is the last one')); // "ylsuoireS this is the last one");
