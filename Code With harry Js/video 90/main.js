const express = require("express");
const app = express();
const blog = require("./routes/blog");
const port = 3000;
const fs = require("fs");

// app.use(express.static("public"));
app.use("/blog", blog);

// Middleware 1
app.use((req, res, next) => {
  console.log(req.headers);
  req.vk = "I am vikash bhai";

  fs.appendFileSync("log.txt", `Time: ${Date.now()} is a ${req.method}\n`);
  console.log(`Time: ${Date.now()} is a ${req.method}\n`);
  // res.send("bye bye");
  next();
});

// Middleware 2
app.use((req, res, next) => {
  console.log("M2");
  req.vk = "I am Ritik bhai";
  next();
});

app.get("/", (req, res) => {
  res.send("Hello Vikash ji");
});

app.get("/about", (req, res) => {
  res.send("Hello about" + req.vk);
});

app.get("/contact", (req, res) => {
  res.send("Hello contact");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
