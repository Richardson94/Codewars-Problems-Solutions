//https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

function upArray(arr) {
  if (VerifySintax(arr) && arr.length > 0) {
    let summed = false;
    let pos = arr.length - 1;
    arr[pos] += 1;
    while (!summed) {
      summed = true;
      if (pos >= 0) {
        console.log(arr[pos]);
        if (arr[pos] == 10) {
          arr[pos] = 0;
          if (pos != 0) {
            arr[pos - 1] += 1;
          } else {
            let tempArray = generateNewArray(arr);
            pos++;
            arr = tempArray;
            arr[pos - 1] += 1;
          }
        }
        summed = false;
        pos--;
      }
    }

    return arr;
  } else {
    return null;
  }
}

function VerifySintax(arr) {
  let count = 0;
  arr.forEach((element) => {
    if (element > 9 || element < 0) {
      count++;
    }
  });
  return count > 0 ? false : true;
}

function generateNewArray(arr) {
  let newArray = [];
  newArray.push(0);
  arr.forEach((element) => {
    newArray.push(element);
  });
  return newArray;
}

console.log(upArray([9, 9])); //,   [1,0,0]
