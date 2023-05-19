function getMiddle(word) {
  const length = word.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    // Even-length word, return middle two characters
    return word.slice(middleIndex - 1, middleIndex + 1);
  } else {
    // Odd-length word, return middle character
    return word.charAt(middleIndex);
  }
}
