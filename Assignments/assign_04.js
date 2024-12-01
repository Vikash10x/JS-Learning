// 1 => n
// 2 => 1 + 2 = 3
// 5 => 1 + 2 + 3 + 4 + 5 = 15

function sum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = i + ans;
  }
  return ans;
}

// let ans = sum(10000);
// console.log(ans);

// Synchronous Code ---------------

function sum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = i + ans;
  }
  return ans;
}

let ans1 = sum(100);
console.log(ans1);
let ans2 = sum(1000);
console.log(ans2);
let ans3 = sum(10000);
console.log(ans3);
