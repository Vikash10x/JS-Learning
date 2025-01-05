const express = require("express");
const app = express();

let countNumber = 0;

function countTotalNumber(req, res, next) {
  countNumber = countNumber + 1;
  console.log("Total count numbers: " + countNumber);
  next();
}

app.get("/sum", countTotalNumber, function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});

app.get("/totalRequest", countTotalNumber, function (req, res) {
  res.json({
    message: countNumber,
  });
});

app.listen(3003);
