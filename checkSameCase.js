function sameCase(a, b) {
  if (a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90) {
    if (b.charCodeAt(0) >= 65 && b.charCodeAt(0) <= 90) {
      return 1;
    } else {
      if (b.charCodeAt(0) >= 97 && b.charCodeAt(0) <= 122) {
        return 0;
      } else {
        return -1;
      }
    }
  } else {
    if (a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 122) {
      if (b.charCodeAt(0) >= 65 && b.charCodeAt(0) <= 90) {
        return 0;
      } else {
        if (b.charCodeAt(0) >= 97 && b.charCodeAt(0) <= 122) {
          return 1;
        } else {
          return -1;
        }
      }
    } else {
      return -1;
    }
  }
}

console.log(sameCase('b', 'Z'));
