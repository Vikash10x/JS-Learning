// primitive

// 7 types : String, Number, Boolearn, null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggeIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 2545768976735526351n;

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "vikash",
  age: 18,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof scoreValue);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack  (Primitive),   Heap(Non-Primitive)

let myYoutubename = "Vikashkumawatdotcom";

let = anothername = myYoutubename;
anothername = "chaiaurcode";

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "kumawat@google.com";

console.log(userOne.email);
console.log(userTwo.email);
