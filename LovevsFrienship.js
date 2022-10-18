function wordsToMarks(string) {
  var arrayChart = string.split('');
  var value = 0;
  arrayChart.forEach((element) => {
    value = value + (element.charCodeAt(0) - 96);
  });

  return value;
}
console.log(wordsToMarks('friendship'));
