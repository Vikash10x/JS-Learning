const calculate = (a, b, opration) => {
  return opration(a, b);
};

function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

console.log(calculate(5, 2, add));
console.log(calculate(5, 2, mul));
