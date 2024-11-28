// const tinderUser = new Object();  //single object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "zara";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Vikash",
      lastname: "kumawat",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign(obj1, obj2, obj4); //  {} is a target objs is a resource

const obj3 = { ...obj1, ...obj2 }; // spread formula
// console.log(obj3);

// const users = [
//     {...
//     },
//     {...
//     },
//     {...
//     },
// ]

// users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // each variable put in array

console.log(tinderUser.hasOwnProperty("id")); // property avaleble in array or not
