//https://www.codewars.com/kata/6402205dca1e64004b22b8de/train/javascript

function findCaterer(budget, people) {
  const basic_buffet = 15;
  const economy_buffet = 20;
  let premium_buffet = 30;

  let bestOption;
  if (budget > 60) {
    premium_buffet -= premium_buffet * 0.2;
  }
  const calculate = budget / people;
  console.log('_> :', calculate, ' ammount ', premium_buffet);

  if (calculate > economy_buffet && calculate <= premium_buffet) {
    bestOption = 3;
  } else if (calculate > basic_buffet && calculate <= economy_buffet) {
    bestOption = 2;
  } else if (calculate > 0 && calculate <= basic_buffet) {
    bestOption = 1;
  } else {
    bestOption = -1;
  }
  return bestOption;
}

console.log(findCaterer(150, 10)); //expect 1
console.log(findCaterer(1500, 60)); //expect 2
console.log(findCaterer(1500, 61)); //expect 3
console.log(findCaterer(100, 0)); //expect -1
console.log(findCaterer(200, 5)); //expect 3
