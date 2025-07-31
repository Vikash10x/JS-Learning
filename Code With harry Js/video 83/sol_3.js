function mirror(arr) {
  let reversed = arr.split("").reverse().join("");
  return arr + reversed;
}

let input = "Hello";
let output = mirror(input);

console.log("Mirror name: ", output);
