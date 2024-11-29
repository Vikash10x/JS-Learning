// ========== Array of Object ==========

function solve(arr) {
  // filter in js array
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender == "male" && arr[i].age > 18) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

let users = [
  {
    name: "vikash",
    age: 19,
    gender: "male",
  },
  {
    name: "priya",
    age: 21,
    gender: "female",
  },
  {
    name: "akash",
    age: 28,
    gender: "male",
  },
];

const ans = solve(users);

console.log(ans);
