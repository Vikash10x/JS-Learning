const express = require("express");

const app = express();

let requestCount = 0;

function requestIncreaser(req, res, next) {
  requestCount = requestCount + 1;
  req.name = "kumawat123";
  console.log("Total number of request: " + requestCount);
  console.log(req.name);
  next();
}

function realSumHandler(req, res) {
  // requestIncreaser(req, res);

  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a + b,
  });
}

app.get("/sum", requestIncreaser, realSumHandler);

app.listen(3000);
