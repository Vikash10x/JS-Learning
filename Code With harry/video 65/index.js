//     Write a program to calculate factorial of a number using reduce and using for loops

let num = 5;
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(num));

// --------

// let num = [1, 2, 3, 4, 5];
// let fact = (a, b) => {
//   return a * b;
// };

// console.log(num.reduce(fact));
