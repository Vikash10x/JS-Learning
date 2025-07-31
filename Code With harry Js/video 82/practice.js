// function delay() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello world");
//     }, 2000);
//   });
// }

// async function main() {
//   let a = await delay();
//   console.log(a);
// }
// main();

// =============

// function findAverage(...numbers) {
//   sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }

//   let average = sum / numbers.length;
//   return average;
// }

// let avg = findAverage(...[10, 20, 30, 40, 50]);

// console.log("average is:", avg);

// average();

// --- Calculater -------

let a = parseFloat(prompt("Enter first number"));
let opreation = prompt("Enter opreation  (+,-,*,/)");
let b = parseFloat(prompt("Enter first number"));

if (opreation == "+") {
  result = a + b;
} else if (opreation == "-") {
  result = a - b;
} else if (opreation == "*") {
  result = a * b;
} else if (opreation == "/") {
  result = a / b;
} else {
  result = "Invalid opreation";
}

console.log("Result is: ", result);
