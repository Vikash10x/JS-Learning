console.log("This is Promose");

const p1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("number is lessthan fron 0.5");
  } else {
    setTimeout(() => {
      console.log("I am done");
      resolve("vikash");
    }, 3000);
  }
});
const p2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("number is lessthan fron a 2");
  } else {
    setTimeout(() => {
      console.log("I am done 2");
      resolve("vikash 2");
    }, 3000);
  }
});
const p3 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("number is lessthan fron a 3");
  } else {
    setTimeout(() => {
      console.log("I am done 3");
      resolve("vikash 3");
    }, 3000);
  }
});
const p4 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("number is lessthan fron a 4");
  } else {
    setTimeout(() => {
      console.log("I am done 4");
      resolve("vikash 4");
    }, 3000);
  }
});
const p5 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("number is lessthan fron a 5");
  } else {
    setTimeout(() => {
      console.log("I am done 5");
      resolve("vikash 5");
    }, 3000);
  }
});

p6 = Promise.any([p1, p2, p3, p4, p5]);
p6.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});
