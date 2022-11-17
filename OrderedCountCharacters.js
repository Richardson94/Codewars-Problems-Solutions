var orderedCount = function (text) {
  var arr = [];
  for (var i = 0; i < text.length; ++i) {
    var k = 0;
    for (var j = 0; j < arr.length; ++j) if (arr[j][0] == text[i]) k++;
    if (k == 0) {
      for (var j = i; j < text.length; ++j) if (text[j] == text[i]) k++;
      arr.push([text[i], k]);
    }
  }
  return arr;
};
