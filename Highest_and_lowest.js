function highAndLow(numbers) {
  var array = numbers.split(' ');
  var results = convertInt(array);
  console.log(results);
  var hightNum = results[0];
  var lowNum = results[0];
  for (let i = 0; i < results.length; i++) {
    if (hightNum < parseInt(results[i])) {
      hightNum = results[i];
    }
    if (lowNum > parseInt(results[i])) {
      lowNum = results[i];
    }
  }
  return hightNum + ' ' + lowNum;
}
function convertInt(array) {
  var results = [];
  array.forEach((element) => {
    results.push(parseInt(element));
  });
  return results;
}
console.log(highAndLow('1 2 -3 4 5'));
