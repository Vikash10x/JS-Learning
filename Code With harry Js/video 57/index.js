console.log("hyy this is tutorial 57");

let a = 0;

// for (let i = 0; i < 100; i++) {
//   console.log(a + i);
// }

// let obj = {
//   name: "vikash",
//   work: "programmer",
//   sallery: 50000000,
// };

// for (const key in obj) {
//   console.log(key);
// }
// for (const c of "programmer") {
//   console.log(c);
// }

// let i = 0;
// while (i < 100) {
//   console.log(i);
//   i++;
// }

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

let Marks = {
  harry: 98,
  vikash: 70,
  vivek: 50,
};

for (const sutdent in Marks) {
  console.log(`${sutdent} has marks ${Marks[sutdent]}`);
}
