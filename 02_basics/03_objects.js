// ++++++++++++ Objects ++++++++++++

// singleton
// Object.create

// object literals

const mySym = Symbol("kay1");

const jsUser = {
  name: "vikash",
  "full name": "vikash kumawat",
  [mySym]: "myKey1",
  age: 18,
  location: "jaipur",
  email: "kumawatvk@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(jsUser.email);
// console.log(jsUser["age"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "kumawatvk@x.com";

// Object.freeze(jsUser);
jsUser.email = "vikash0012@gmail.com";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello JS User");
};

jsUser.greetingTwo = function () {
  console.log(`Hello JS User,${this.name}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
