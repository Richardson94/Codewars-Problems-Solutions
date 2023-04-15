//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

var humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears == 0) {
    return [0, 0, 0];
  } else {
    var catYears = 0;
    var dogYears = 0;
    for (let i = 1; i <= humanYears; i++) {
      if (i == 1) {
        catYears = catYears + 15;
        dogYears = dogYears + 15;
      } else {
        if (i == 2) {
          catYears = catYears + 9;
          dogYears = dogYears + 9;
        } else {
          catYears = catYears + 4;
          dogYears = dogYears + 5;
        }
      }
    }
    return [humanYears, catYears, dogYears];
  }
};

console.log(humanYearsCatYearsDogYears(10));
