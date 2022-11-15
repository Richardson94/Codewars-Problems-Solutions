function getWinner(listOfBallots) {
  let candidates = generateCandidates(listOfBallots);
  let results = countBallots(candidates, listOfBallots);
  let pos = obtainWonCandidate(results);
  let absoluteMajority = listOfBallots.length / 2;
  if (results[pos] > absoluteMajority) {
    return candidates[pos];
  } else {
    return null;
  }
}
function generateCandidates(listOfBallots) {
  let candidates = [];
  if (candidates.length == 0 && listOfBallots.length >= 1) {
    candidates.push(listOfBallots[0]);
  }
  for (let i = 0; i < listOfBallots.length; i++) {
    for (let j = 0; j < candidates.length; j++) {
      if (
        candidates[j] != listOfBallots[i] &&
        verifyCandidate(listOfBallots[i], candidates)
      ) {
        candidates.push(listOfBallots[i]);
        j = candidates.length + 1;
      }
    }
  }
  return candidates;
}
function verifyCandidate(candidate, listCandidates) {
  for (let i = 0; i < listCandidates.length; i++) {
    if (candidate == listCandidates[i]) {
      return false;
    }
  }
  return true;
}
function countBallots(listOfCandidates, ListOfBallots) {
  let countList = [];
  for (let i = 0; i < listOfCandidates.length; i++) {
    let counter = 0;
    for (let j = 0; j <= ListOfBallots.length; j++) {
      if (listOfCandidates[i] == ListOfBallots[j]) {
        counter++;
      }
    }
    countList.push(counter);
  }
  return countList;
}
function obtainWonCandidate(results) {
  let value = 0;
  let position = 0;
  for (let i = 0; i < results.length; i++) {
    if (results[i] > value) {
      value = results[i];
      position = i;
    }
  }
  return position;
}

console.log(getWinner(['A'])); //  "\"A\"
console.log(getWinner(['A', 'A', 'A', 'B', 'B', 'B', 'A'])); // "\"A\"
console.log(getWinner(['A', 'A', 'A', 'B', 'B', 'B'])); // null
console.log(getWinner(['A', 'A', 'A', 'B', 'C', 'B'])); // null
console.log(getWinner(['A', 'A', 'B', 'B', 'C']));
