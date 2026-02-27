let arr = [1, 2, 2, 4, 2, 5,];

function doubleTrouble(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      result.push(arr[i] * 2);
      i++; // skip next duplicate
    } else {
      result.push(arr[i] * 2);
    }
  }

  return result;
}

console.log(doubleTrouble(arr));
