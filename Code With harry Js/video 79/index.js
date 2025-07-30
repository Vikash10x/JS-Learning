let a = prompt("Enter first number");
let b = prompt("Enter second number");

if (isNaN(a) || isNaN(b)) {
  throw RangeError("Sorry this is not allowed");
}
let sum = parseInt(a) + parseInt(b);

function main() {
  let x = 1;
  try {
    console.log("The sum is:", sum * x);
    return true;
  } catch (error) {
    console.log("Bhai error mil gaya");
    return false;
  } finally {
    console.log("The file being close");
  }
}
let c = main();

// try {
//   //   setTimeout(() => {
//   //     let a = 5;
//   //     console.log(a);
//   //   }, 3000);
// } catch (error) {
//   //   console.log("error mil gaya hai...");
//   alert(error.name);
// }

// let age = 8;

// if (age >= 18) {
//   console.log("You are valid for voting");
// } else if (age < 18) {
//   throw SyntaxError("You are not valid for voting");
// }

// console.log("Voting end.......");
