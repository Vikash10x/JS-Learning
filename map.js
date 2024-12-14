// Array filter mathid

// let arr = [29, 34, 8, 0, 5, 2];
// let a2 = arr.filter((a) => {
//   return a < 10;
// });
// console.log(a2);

// -----------

let ctr = 1;
function callback() {
  console.log();
  console.log(ctr);
  ctr = ctr + 1;
  setTimeout(callback, 1000);
}
setTimeout(callback, 1000);
