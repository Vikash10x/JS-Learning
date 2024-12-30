const express = require("express");
const app = express();

let errorCount = 0;

app.get("/user", function (req, res) {
  throw new Error("User not found");
  res.status(200).json({
    msg: "jhon",
  });
});

app.post("/user", function (req, res) {
  res.status(200).json({
    msg: "created dummy user",
  });
});

app.get("/errorCount", function (req, res) {
  res.status(200).json({ errorCount });
});

module.exports = app;
app.listen(3006);
