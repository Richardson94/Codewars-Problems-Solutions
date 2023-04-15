//https://www.codewars.com/kata/59706036f6e5d1e22d000016

function wordsToMarks(string) {
  var arrayChart = string.split('');
  var value = 0;
  arrayChart.forEach((element) => {
    value = value + (element.charCodeAt(0) - 96);
  });

  return value;
}
console.log(wordsToMarks('friendship'));
