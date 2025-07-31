function sumSelector(arr) {
  let sum = 0;

  for (const num of arr) {
    if (num < 0) {
      break;
    }
    sum = sum + num;
  }
  return sum;
}

let input = [2, 3, 4, 5, 6];
let output = sumSelector(input);

console.log("Output: ", output);
