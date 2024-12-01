// ------- Functiion Arguments --------

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  // a = 1
  // b = 2
  // op = divide
  let val = op(a, b); // divide(1,2)
  return val;
}

const ans = doOperation(1, 2, div);
console.log(ans);
