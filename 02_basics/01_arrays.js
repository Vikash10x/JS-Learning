// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["dorimon", "nobita"];

// console.log(myArr);

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2);

// Array methods --------------------------

myArr.push(6);
myArr.push(7);
myArr.pop();

// myArr.unshift(9); // Add value of starting
// myArr.shift(); // remove starting value

// console.log(myArr.includes(4)); // check of value include in variable
// console.log(myArr.indexOf(3)); // check of element which position

const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

// Slice -----  isme range include nahi hoti hai

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);

// Splice ----- isme range include hoti hai

console.log("b", myArr);
const myn2 = myArr.splice(1, 3);
console.log(myn2);
