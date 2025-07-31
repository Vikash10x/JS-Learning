function doubleTrouble(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i >= 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    result.push(arr[i] * 2);
  }
  return result;
}

let input = [2, 2, 3, 4, 5, 6, 7, 8];
let output = doubleTrouble(input);

console.log("Output", output);
