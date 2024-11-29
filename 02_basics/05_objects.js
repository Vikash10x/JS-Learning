const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Vikash",
};

// course.courseInstructor;

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "vikash",
//     "price": "free",
//     "coursename": "js in hindi"
// }

[{}, {}, {}];

// ---------------- Array of Object--------------
let arr = [
  "vikash",
  21,
  {
    name: "vikash",
    age: 21,
  },
];
const var1 = arr[2];

let var2 = {
  name: "vikash",
  age: 21,
};
console.log(arr);
console.log(var2);
