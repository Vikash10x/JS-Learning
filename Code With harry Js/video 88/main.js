import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.static("public"));

app.get("/check", (req, res) => {
  res.send("Hello check");
});

app.get("/blog/:slug", (req, res) => {
  console.log(req.params);
  console.log(req.query);

  res.send(`Hello ${req.params.slug}`);
});

// app.get("/blog/c", (req, res) => {
//   res.send("this is c language");
// });
// app.get("/blog/python", (req, res) => {
//   res.send("this is python language");
// });

app.listen(7000);
