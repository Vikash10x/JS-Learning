const express = require("express");

const app = express();

app.get("/add/:a/:b", function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.json({
    answer: a + b,
  });
});

app.get("/add", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    answer: a + b,
  });
});

app.get("/sub", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    answer: a - b,
  });
});

app.get("/multiply", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    answer: a * b,
  });
});

app.get("/div", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    answer: a / b,
  });
});

app.listen(3007);
