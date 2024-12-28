// function sum(a, b) {
//   let sum = a + b;
//   return sum;
// }

// let ans = sum(1, 3);
// let ans2 = sum(3, 3);
// let ans3 = sum(4, 3);

// console.log(ans);
// console.log(ans2);
// console.log(ans3);

// --------------- q1-------------------

function add(a, b) {
  return a + b;
  // return Number(a) + Number(b);
}

// console.log(add(4, 5));
console.log(add("4", 5));
console.log(add(4, "5")); // string or number ko add karte ha to + aate he dono string ke rop ma work karegi
// console.log(add(4, "5"));
// console.log(add("five ", "5"));

//----------------------------

// function canVote(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let ans = canVote(20);
// console.log(ans);

function canVote(age) {
  if (age > 18) {
    console.log("You are an adult");
  } else {
    console.log("You are a minor");
  }
}

canVote(22);
