const { error } = require("console");
const fs = require("fs");

console.log("starting");
fs.writeFile("vk.txt", "Vikash is a good boy..", () => {
  console.log("done");
  fs.readFile("vk.txt", (error, data) => {
    console.log(error, data.toString());
  });
});

fs.appendFile("vk.txt", "of poornima", (e, d) => {
  console.log(d);
});
console.log("ending");
