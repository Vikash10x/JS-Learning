// Two different way of print the code

// ----- First------
// setTimeout(function () {
//   console.log("hii");
//   setTimeout(function () {
//     console.log("hello");
//     setTimeout(function () {
//       console.log("hi there");
//     }, 5000);
//   }, 3000);
// }, 1000);

// ----- Second-----

function step3Done() {
  console.log("hi there");
}

function step2Done() {
  console.log("hello");
  setTimeout(step3Done, 5000);
}

function step1Done() {
  console.log("hi");
  setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);
