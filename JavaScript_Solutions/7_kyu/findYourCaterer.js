function findCaterer(budget, people) {
  if (budget < 15 || people < 1) {
    return -1;
  }

  if (people * (people > 60 ? 24 : 30) <= budget) {
    return 3;
  }

  if (people * 20 <= budget) {
    return 2;
  }

  if (people * 15 <= budget) {
    return 1;
  }

  return -1;
}
