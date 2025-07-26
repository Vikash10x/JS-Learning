let obj = {
  a: 5,
  b: 4,
  c: 2,
};

for (const key in obj) {
  if (obj.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    // console.log(key, element);
  }
}

// ------- map -------

let arr = [2, 4, 6, 8, 11];

// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   newArr.push(element ** 2);
// }

// let newArr = arr.map((e) => {
//   return e ** 2;
// });
// console.log(newArr);

const greaterThanSeven = (e) => {
  if (e > 7) {
    return true;
  }
  return false;
};

// console.log(arr.filter(greaterThanSeven));

const n = [2, 4, 6, 8, 10];

let red = (a, b) => {
  return a + b;
};

console.log(n.reduce(red));
