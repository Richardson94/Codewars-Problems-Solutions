//#Average score if you are better or not
function betterThanAverage(classPoints, yourPoints) {
  var numScore = classPoints.length + 1;
  var valor = 0;
  for (let i = 0; i < classPoints.length; i++) {
    valor = valor + classPoints[i];
  }
  valor = valor / numScore;
  if (yourPoints >= valor) {
    return true;
  } else {
    return false;
  }
}

console.log(
  betterThanAverage(
    [
      65, 91, 41, 63, 38, 24, 3, 87, 76, 49, 56, 32, 72, 35, 92, 46, 79, 79, 31,
      30, 18, 82, 43, 75, 17, 90, 8, 92, 25, 53, 58, 62, 59, 14, 86, 60, 76, 37,
      94, 24, 0, 81, 50, 84, 84, 96, 39, 7, 65, 5, 53,
    ],
    53
  )
);
