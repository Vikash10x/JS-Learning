const express = require("express");
const app = express();

let numberOfRequestForUser = {};
setInterval(() => {
  numberOfRequestForUser = {};
}, 1000);

app.get("/user", function (req, res) {
  res.status(200).json({
    name: "vikash",
  });
});

app.post("/user", function (req, res) {
  res.status(200).json({
    msg: "created dummy user",
  });
});

module.exports = app;
app.listen(3007);
