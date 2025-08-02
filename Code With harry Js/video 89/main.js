const express = require("express");
const blog = require("./routes/blog");
const shop = require("./routes/shop");
const app = express();

app.use(express.static("public"));
app.use("/blog", blog);
app.use("/shop", shop);

app.get("/", (req, res) => {
  console.log("It is get req");
  res.send("Hello World!");
});

// app.post("/", (req, res) => {
//   console.log("It is post req");
//   res.send("Hello World! Post");
// });

// app.put("/", (req, res) => {
//   console.log("It is put req");
//   res.send("Hello World! Put");
// });

app.get("/index", (req, res) => {
  console.log("It is index");
  res.sendFile("templetes/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  console.log("It is api");
  res.json({ a: 1, b: 2, c: 3, d: 4, name: ["viaksh", "akash"] });
});

app.listen(7001, () => {
  console.log("Example app listening on port 7001");
});
