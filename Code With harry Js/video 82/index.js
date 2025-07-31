function sum(a, b, c) {
  return a + b + c;
}

console.log(a1);
(async function main() {
  //   let a = await sleep();
  //   console.log(a);
  //   let b = await sleep();
  //   console.log(b);
  //   let [x, y, ...rest] = [2, 4, 5, 6, 7, 8, 9];
  //   console.log(x, y, rest);

  let obj = {
    a: 1,
    b: 3,
    c: 5,
  };
  let { a, b } = obj;
  console.log(a, b);

  let s = [2, 4, 6];
  console.log(s[0] + s[1] + s[2]);
  console.log(sum(...s));

  //   const x = "the";
  //   const y = "no";
  //   const z = { x, y };
  //   console.log(z);
})();
var a1 = 5;

const sleep = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
};

const sum = async (a, b, c) => {
  return a + b + c;
};
