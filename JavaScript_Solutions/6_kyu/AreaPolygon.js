function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  const sideLength = 2 * circleRadius * Math.sin(Math.PI / numberOfSides);
  const apothem = circleRadius * Math.cos(Math.PI / numberOfSides);
  const area = 0.5 * numberOfSides * sideLength * apothem;

  return parseFloat(area.toFixed(3));
}

// Example usage
console.log(areaOfPolygonInsideCircle(3, 3)); // Output: 11.691
console.log(areaOfPolygonInsideCircle(5.8, 7)); // Output: 92.053
console.log(areaOfPolygonInsideCircle(4, 5)); // Output: 38.042
